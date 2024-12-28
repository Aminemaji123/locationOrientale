import React, { useState } from 'react';
import '../styles/BookingStyles.css';
import { FaCar, FaCalendarAlt, FaSearchLocation } from 'react-icons/fa';

const Booking = () => {
  const [formData, setFormData] = useState({
    carType: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    returnLocation: ''
  });
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const url = `/api/cars/check-availability?carId=${formData.carType}&startDate=${formData.pickupDate}&endDate=${formData.returnDate}`;
      console.log('URL appelée:', url);

      const response = await fetch(url);
      console.log('Status de la réponse:', response.status);
      
      const data = await response.json();
      console.log('Données reçues:', data);
      
      setSearchResult(data);
      if (data.available) {
        alert('La voiture est disponible pour ces dates !');
      } else {
        alert('Désolé, la voiture n\'est pas disponible pour ces dates.');
      }
    } catch (error) {
      console.error('Type d\'erreur:', error.name);
      console.error('Message d\'erreur:', error.message);
      console.error('Stack trace:', error.stack);
      alert('Une erreur est survenue lors de la vérification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='booking-section drop-shadow-xl max-w-[1920px]'>
      <div className='booking-card'>
        <div className='booking-phase'>
          <h2>Réservez une voiture</h2>
      
          <form className='form' onSubmit={handleSearch}>
            <div className='form-phase'>
              <div className='input'>
                <label><FaCar size={20} style={{color:'var(--primary-color)'}}/> Sélectionnez le type de voiture <span>*</span></label>
                <select 
                  className='select'
                  name="carType"
                  value={formData.carType}
                  onChange={handleInputChange}
                  required
                >
                  <option value=''>Sélectionnez le type de voiture</option>
                  <option value='64f5e8a1b852a123456789'>Mercedes CLS</option>
                  <option value='64f5e8a1b852a123456790'>BMW M4</option>
                  <option value='64f5e8a1b852a123456791'>Mercedes-Benz CLA</option>
                  <option value='cli 4 gt-Line'>Clio 4 GT-Line</option>
                  <option value='clio 5 Alpin'>Clio 5 Alpine</option>
                  <option value='Dacia duster'>Dacia Duster</option>
                  <option value='Dacia logan'>Dacia Logan</option>
                  <option value='VW GOLF'>GOLF 8</option>
                </select>
              </div>

              <div className='input'>
                <label><FaCalendarAlt size={20} style={{color:'var(--primary-color)'}}/> Date de prise en charge <span>*</span></label>
                <input 
                  type='date' 
                  className='select'
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className='form-phase'>

              <div className='input'>
                <label> <FaSearchLocation size={20} style={{color:'var(--primary-color)'}}/> Lieu de prise en charge <span>*</span></label>
                <select className='select'>
                  <option value=''>Sélectionnez votre localisation</option>
                  <option value='Oujda centre ville'>Oujda - Centre-ville</option>
                  <option value='Nador centre ville'>Nador - Centre-ville</option>
                  <option value='Berkane Orange'>Berkane - Orange</option>
                  <option value='Al Hoceima centre ville'>Al Hoceïma - Centre-ville</option>
                </select>
              </div>

              <div className='input'>
                <label><FaCalendarAlt size={20} style={{color:'var(--primary-color)'}}/> Date de retour <span>*</span></label>
                <input 
                  type='date' 
                  className='select'
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
          
            </div>
            <div className='form-phase'>

              <div className='input'>
                <label> <FaSearchLocation size={20} style={{color:'var(--primary-color)'}}/> Lieu de retour <span>*</span></label>
                <select className='select'>
                  <option value=''>Sélectionnez votre localisation</option>
                  <option value='Oujda centre ville'>Oujda - Centre-ville</option>
                  <option value='Nador centre ville'>Nador - Centre-ville</option>
                  <option value='Berkane Orange'>Berkane - Orange</option>
                  <option value='Al Hoceima centre ville'>Al Hoceïma - Centre-ville</option>
                </select>
              </div>

              <div className='input'>
                <button 
                  type='submit' 
                  className='select booking-btn'
                  disabled={loading}
                >
                  {loading ? 'Recherche...' : 'Rechercher'}
                </button>
              </div>
          
            </div>

          </form>

          {searchResult && (
            <div className="mt-4 p-4 bg-white rounded shadow">
              <h3 className="text-lg font-bold mb-2">Résultat de la recherche:</h3>
              <p>
                {searchResult.available 
                  ? "✅ La voiture est disponible pour ces dates !" 
                  : "❌ Désolé, la voiture n'est pas disponible pour ces dates."}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Booking;
