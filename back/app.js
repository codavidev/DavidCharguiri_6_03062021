require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const path = require('path');

const auth = require('./middleware/auth');
const userRoutes = require('./routes/userRoutes');
const sauceRoutes = require('./routes/sauceRoutes');
const likeRoutes = require('./routes/likeRoutes');

const db = require('./config/db.config');


const app = express();

// Utilisez (express.json()) pour analyser le corps de la requête. 
app.use(express.json());

// CORS 
const corsOptions = {
  origin: process.env.CLIENT_URL
};

app.use(cors(corsOptions));

// Configurer Helmet avec CSP
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
  }
}));



// Routes
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
app.use('/api/sauces/', likeRoutes);

// Middleware pour servir les images
app.use('/images', express.static(path.join(__dirname, 'images')));


// app.listen(3000, () => console.log("Server started"));
module.exports = app;
