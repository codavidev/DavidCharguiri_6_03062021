require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const authUser = require('./routes/auth');
const routerUser = require('./routes/user.routes');


const db = require('./config/db.config');

const app = express();

// Utilisez (express.json()) pour analyser le corps de la requête. 
app.use(express.json());

// CORS 
app.use(cors());

// Headers
app.use(helmet());

// Routes
app.use("/api/auth", authUser);

app.listen(3000, () => console.log("Server started"));
module.exports = app;
