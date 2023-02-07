// Importation des modules nécessaires
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Salam world")
})

router.post('/', (req, res) => {
    
})

module.exports = router