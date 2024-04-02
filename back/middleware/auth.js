// Importation des modules nécessaires
require('dotenv').config()
const express = require("express");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];

       const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

	   console.log(process.env.JWT_SECRET);
	   console.log("token :", token);
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};
