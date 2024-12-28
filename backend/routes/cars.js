const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Booking = require('../models/Booking');

// Get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single car
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Voiture non trouvée' });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const car = new Car(req.body);
  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/check-availability', async (req, res) => {
  try {
    const { startDate, endDate, carId } = req.query;
    console.log('Requête reçue:', { startDate, endDate, carId });

    if (!carId) {
      return res.status(400).json({ message: 'carId est requis' });
    }

    res.json({
      available: true,
      message: 'Test de connexion réussi',
      receivedData: { startDate, endDate, carId }
    });

  } catch (error) {
    console.error('Erreur serveur:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 