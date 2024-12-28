const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Car = require('../models/Car');


router.post('/', async (req, res) => {
  try {
    const car = await Car.findById(req.body.carId);
    if (!car) return res.status(404).json({ message: 'Voiture non trouvée' });
    if (!car.available) return res.status(400).json({ message: 'Voiture non disponible' });

    const booking = new Booking(req.body);
    const newBooking = await booking.save();
 
    car.available = false;
    await car.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/user/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate('carId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 