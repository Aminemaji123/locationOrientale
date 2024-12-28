import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ReservationPage.css';

const ReservationPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [carDetails, setCarDetails] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          carId,
          ...formData
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setReservationData(data);
        setShowInvoice(true);
      } else {
        alert(data.message || 'Erreur lors de la réservation');
      }
    } catch (error) {
      alert('Erreur lors de la réservation');
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const paymentResponse = await processPayment();
      
      if (paymentResponse.success) {
        const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            carId,
            ...formData,
            totalPrice
          }),
        });

        const data = await response.json();
        if (response.ok) {
          setReservationData(data);
          setShowInvoice(true);
          setShowPayment(false);
        } else {
          alert(data.message || 'Erreur lors de la réservation');
        }
      }
    } catch (error) {
      alert('Erreur lors du paiement');
    } finally {
      setLoading(false);
    }
  };

  const processPayment = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 2000);
    });
  };

  const renderPaymentForm = () => {
    if (formData.paymentMethod === 'card') {
      return (
        <div className="payment-form">
          <div className="form-group">
            <label>Numéro de carte</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="payment-row">
            <div className="form-group">
              <label>Date d'expiration</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="reservation-page">
      {!showInvoice ? (
        <div className="reservation-form-container">
          <h2>Réserver votre véhicule</h2>
          <form onSubmit={handleSubmit} className="reservation-form">
            <div className="form-group">
              <label>Date de début</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date de fin</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Nom complet</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Méthode de paiement</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
              >
                <option value="card">Carte bancaire</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {renderPaymentForm()}

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Traitement...' : 'Valider et payer'}
            </button>
          </form>
        </div>
      ) : (
        <div className="invoice-container">
          <div className="invoice">
            <h2>Facture de réservation</h2>
            <div className="invoice-details">
              <p><strong>Numéro de réservation:</strong> {reservationData?._id}</p>
              <p><strong>Nom:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Téléphone:</strong> {formData.phone}</p>
              <p><strong>Date de début:</strong> {formData.startDate}</p>
              <p><strong>Date de fin:</strong> {formData.endDate}</p>
              <p><strong>Méthode de paiement:</strong> {formData.paymentMethod}</p>
              <p><strong>Montant total:</strong> {totalPrice}€</p>
            </div>
            <div className="invoice-actions">
              <button onClick={handlePrint}>Imprimer la facture</button>
              <button onClick={() => navigate('/')}>Retour à l'accueil</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage; 