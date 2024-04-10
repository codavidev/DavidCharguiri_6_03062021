# Documentation détaillée - Piiquante

🌐 *Read this in [English](DOCUMENTATION.en.md)*

## Table des matières

- [Introduction](#introduction)
- [Structure du projet](#structure-du-projet)
- [Modèles de données](#modèles-de-données)
  - [Sauce](#sauce)
  - [User](#user)
- [Fonctionnalités](#fonctionnalités)
  - [Sauces](#sauces)
  - [Authentification](#authentification)
- [Middlewares](#middlewares)
  - [Authentification](#authentification-1)
  - [Gestion des fichiers](#gestion-des-fichiers)
- [Contrôleurs](#contrôleurs)
- [Sécurité](#sécurité)
- [Technologies utilisées](#technologies-utilisées)

## Introduction

Piiquante est une application Node.js qui fournit une API RESTful pour une application de notation de sauces piquantes. L'API permet aux utilisateurs de créer, lire, mettre à jour et supprimer des sauces, ainsi que de les noter.

## Structure du projet

- `app.js` : Fichier principal qui configure et démarre le serveur Express.
- `routes/` : Répertoire contenant les fichiers de routage pour les différentes fonctionnalités de l'API.
  - `sauce.js` : Définit les routes pour les opérations CRUD sur les sauces.
  - `user.js` : Définit les routes pour l'inscription et la connexion des utilisateurs.
- `models/` : Répertoire contenant les modèles de données pour les sauces et les utilisateurs.
  - `Sauce.js` : Modèle de données pour les sauces, basé sur Mongoose.
  - `User.js` : Modèle de données pour les utilisateurs, basé sur Mongoose.
- `middleware/` : Répertoire contenant les middlewares pour la gestion des fichiers et l'authentification.
  - `auth.js` : Middleware pour l'authentification des utilisateurs à l'aide de JSON Web Tokens (JWT).
  - `multer-config.js` : Middleware pour la gestion des fichiers entrants (images de sauces) à l'aide de Multer.
- `controllers/` : Répertoire contenant les contrôleurs pour les opérations CRUD sur les sauces.
  - `sauce.js` : Contrôleur pour les opérations CRUD sur les sauces.

## Modèles de données

### Sauce

Le modèle `Sauce` est défini dans le fichier `models/Sauce.js`. Il contient les champs suivants :

- `userId` (String, requis) : L'ID de l'utilisateur qui a créé la sauce.
- `name` (String, requis, unique) : Le nom de la sauce.
- `manufacturer` (String, requis) : Le fabricant de la sauce.
- `description` (String, requis) : La description de la sauce.
- `mainPepper` (String, requis) : Le principal ingrédient épicé de la sauce.
- `imageUrl` (String, requis) : L'URL de l'image de la sauce téléchargée par l'utilisateur.
- `heat` (Number, requis) : Le niveau de piquant de la sauce (entre 1 et 10).
- `likes` (Number) : Le nombre d'utilisateurs qui aiment la sauce.
- `dislikes` (Number) : Le nombre d'utilisateurs qui n'aiment pas la sauce.
- `usersLiked` (Array de String) : Tableau des identifiants des utilisateurs qui ont aimé la sauce.
- `usersDisliked` (Array de String) : Tableau des identifiants des utilisateurs qui n'ont pas aimé la sauce.

### User

Le modèle `User` est défini dans le fichier `models/User.js`. Il contient les champs suivants :

- `email` (String, requis, unique) : L'adresse email de l'utilisateur.
- `password` (String, requis) : Le mot de passe haché de l'utilisateur.

## Fonctionnalités

### Sauces

- `GET /api/sauces` : Récupère toutes les sauces.
- `GET /api/sauces/:id` : Récupère une sauce spécifique.
- `POST /api/sauces` : Crée une nouvelle sauce.
- `PUT /api/sauces/:id` : Met à jour une sauce existante.
- `DELETE /api/sauces/:id` : Supprime une sauce.
- `POST /api/sauces/:id/like` : Permet à un utilisateur d'aimer ou de ne plus aimer une sauce.

### Authentification

- `POST /api/auth/signup` : Inscription d'un nouvel utilisateur.
- `POST /api/auth/login` : Connexion d'un utilisateur existant.

## Middlewares

### Authentification

Le middleware `auth.js` est utilisé pour vérifier l'authentification des utilisateurs à l'aide de JSON Web Tokens (JWT). Lorsqu'un utilisateur s'inscrit ou se connecte, un token JWT est généré et renvoyé. Ce token doit être inclus dans l'en-tête `Authorization` des requêtes nécessitant une authentification.

### Gestion des fichiers

Le middleware `multer-config.js` est utilisé pour gérer le téléchargement des images de sauces. Il configure Multer pour stocker les fichiers entrants dans le répertoire `images/`.

## Contrôleurs

Le répertoire `controllers/` contient les contrôleurs pour les opérations CRUD sur les sauces. Le fichier `sauce.js` définit les fonctions de contrôleur pour chaque route liée aux sauces.

## Sécurité

- Les mots de passe des utilisateurs sont hashés à l'aide de `bcrypt` avant d'être stockés dans la base de données.
- L'authentification des utilisateurs est gérée à l'aide de JSON Web Tokens (JWT).
- Les opérations CRUD sur les sauces nécessitent une authentification pour empêcher les accès non autorisés.
- Les images de sauces sont stockées sur le serveur et non dans la base de données pour des raisons de sécurité.

## Technologies utilisées

- Node.js
- Express.js
- MongoDB (avec Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt
- Multer

N'hésitez pas à me contacter si vous avez d'autres questions ou si vous avez besoin d'informations supplémentaires sur une partie spécifique du projet.