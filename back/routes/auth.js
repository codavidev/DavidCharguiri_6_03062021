// Importation des modules nécessaires
require('dotenv').config()
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// Inscription d'un utilisateur
router.post("/signup", (req, res) => {
	// Vérification des données d'inscription
	const { email, password } = req.body;
		console.log("Sign up request: ", req.body)
	if (!email || !password) {
		return res
			.status(400)
			.json({ msg: "Veuillez entrer tous les champs requis" });
	}

	// Vérifie si l'utilisateur existe déjà
	User.findOne({ email }).then((user) => {
		if (user)
			return res.status(400).json({ msg: "Cet utilisateur existe déjà" });

		// Création d'un nouvel utilisateur
		const newUser = new User({
			email,
			password,
		});

		// Hashage du mot de passe
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser.save().then((user) => {
					jwt.sign(
						{ id: user.id },
						process.env.JWT_SECRET,
						{ expiresIn: 3600 },
						(err, token) => {
							if (err) throw err;
							res.json({
								token,
								user: {
									id: user.id,
									email: user.email,
								},
							});
						}
					);
				});
			});
		});
	});
});

// module.exports = router;

// Connexion de l'utilisateur
router.post("/login", (req, res) => {
	const { email, password } = req.body;

	// Vérification des données de connexion
	if (!email || !password) {
		return res
			.status(400)
			.json({ msg: "Veuillez entrer tous les champs requis" });
	}

	// Vérifie si l'utilisateur existe
	User.findOne({ email }).then((user) => {
		if (!user)
			return res.status(400).json({ msg: "L'utilisateur n'existe pas" });

		// Vérification du mot de passe
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch)
				return res.status(400).json({ msg: "Mot de passe incorrect" });

			jwt.sign(
				{ id: user.id },
				process.env.JWT_SECRET,
				{ expiresIn: 3600 },
				(err, token) => {
					if (err) throw err;
					res.json({
						token,
						user: {
							id: user.id,
							email: user.email,
						},
					});
				}
			);
		});
	});
});

module.exports = router;
