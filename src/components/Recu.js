import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Recu.css';

const Recu = ({ reservationData, carDetails, formData, totalPrice }) => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="recu-container">
      <div className="recu">
        <div className="recu-header">
          <h2>Reçu de Location de Véhicule</h2>
          <p className="recu-number">N° {reservationData?._id || 'TEMP-' + Date.now()}</p>
          <p className="recu-date">Date: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="recu-content">
          {/* Détails du véhicule */}
          <div className="recu-section">
            <h3>Détails du Véhicule</h3>
            <div className="details-grid">
              <p><strong>Marque:</strong> {carDetails?.brand}</p>
              <p><strong>Modèle:</strong> {carDetails?.model}</p>
              <p><strong>Année:</strong> {carDetails?.year}</p>
              <p><strong>Couleur:</strong> {carDetails?.color}</p>
            </div>
          </div>

          {/* Informations client */}
          <div className="recu-section">
            <h3>Informations Client</h3>
            <div className="details-grid">
              <p><strong>Nom:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Téléphone:</strong> {formData.phone}</p>
            </div>
          </div>

          {/* Détails de la réservation */}
          <div className="recu-section">
            <h3>Détails de la Réservation</h3>
            <div className="details-grid">
              <p><strong>Date de début:</strong> {formData.startDate}</p>
              <p><strong>Date de fin:</strong> {formData.endDate}</p>
              <p><strong>Durée:</strong> {
                Math.ceil((new Date(formData.endDate) - new Date(formData.startDate)) / (1000 * 60 * 60 * 24))
              } jours</p>
            </div>
          </div>

          {/* Détails du paiement */}
          <div className="recu-section payment-section">
            <h3>Détails du Paiement</h3>
            <div className="payment-details">
              <div className="payment-row">
                <span>Prix par jour:</span>
                <span>{carDetails?.pricePerDay}€</span>
              </div>
              <div className="payment-row">
                <span>Nombre de jours:</span>
                <span>{Math.ceil((new Date(formData.endDate) - new Date(formData.startDate)) / (1000 * 60 * 60 * 24))}</span>
              </div>
              <div className="payment-row total">
                <span>Total:</span>
                <span>{totalPrice}€</span>
              </div>
              <p className="payment-method">
                <strong>Méthode de paiement:</strong> {formData.paymentMethod}
              </p>
            </div>
          </div>
        </div>

        <div className="recu-footer">
          <p>Merci de nous faire confiance pour votre location de véhicule!</p>
          <div className="recu-actions">
            <button onClick={handlePrint} className="print-button">
              Imprimer le reçu
            </button>
            <button onClick={() => navigate('/')} className="home-button">
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recu; 