const express = require('express');
const cors = require('cors');

const app = express();

// Utilisez (express.json()) pour analyser le corps de la requête. 
app.use(express.json());

// CORS - Headers
app.use(cors());

// Routes
app.post("/api/auth/signup", (req, res, next) => {
    console.log("Sign up request: ", req.body);
})

module.exports = app;
