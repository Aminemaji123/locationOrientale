const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/car_rental')
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur de connexion à MongoDB:', err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const commentRoutes = require('./routes/comments');
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Le port ${PORT} est déjà utilisé. Tentative avec le port ${PORT + 1}`);
        server.listen(PORT + 1);
    } else {
        console.error('Erreur serveur:', err);
    }
}); 