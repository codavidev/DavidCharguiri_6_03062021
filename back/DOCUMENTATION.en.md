# Detailed Documentation - Piiquante

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Data Models](#data-models)
  - [Sauce](#sauce)
  - [User](#user)
- [Features](#features)
  - [Sauces](#sauces)
  - [Authentication](#authentication)
- [Middlewares](#middlewares)
  - [Authentication](#authentication-1)
  - [File Management](#file-management)
- [Controllers](#controllers)
- [Security](#security)
- [Technologies Used](#technologies-used)

## Introduction

Piiquante is a Node.js application that provides a RESTful API for a hot sauce rating application. The API allows users to create, read, update, and delete sauces, as well as rate them.

## Project Structure

- `app.js`: Main file that configures and starts the Express server.
- `routes/`: Directory containing routing files for the different API features.
  - `sauce.js`: Defines routes for CRUD operations on sauces.
  - `user.js`: Defines routes for user signup and login.
- `models/`: Directory containing data models for sauces and users.
  - `Sauce.js`: Data model for sauces, based on Mongoose.
  - `User.js`: Data model for users, based on Mongoose.
- `middleware/`: Directory containing middlewares for file management and authentication.
  - `auth.js`: Middleware for user authentication using JSON Web Tokens (JWT).
  - `multer-config.js`: Middleware for handling incoming files (sauce images) using Multer.
- `controllers/`: Directory containing controllers for CRUD operations on sauces.
  - `sauce.js`: Controller for CRUD operations on sauces.

## Data Models

### Sauce

The `Sauce` model is defined in the `models/Sauce.js` file. It contains the following fields:

- `userId` (String, required): ID of the user who created the sauce.
- `name` (String, required, unique): Name of the sauce.
- `manufacturer` (String, required): Manufacturer of the sauce.
- `description` (String, required): Description of the sauce.
- `mainPepper` (String, required): Main spicy ingredient of the sauce.
- `imageUrl` (String, required): URL of the sauce image uploaded by the user.
- `heat` (Number, required): Heat level of the sauce (between 1 and 10).
- `likes` (Number): Number of users who like the sauce.
- `dislikes` (Number): Number of users who dislike the sauce.
- `usersLiked` (Array of String): Array of user IDs who liked the sauce.
- `usersDisliked` (Array of String): Array of user IDs who disliked the sauce.

### User

The `User` model is defined in the `models/User.js` file. It contains the following fields:

- `email` (String, required, unique): User's email address.
- `password` (String, required): User's hashed password.

## Features

### Sauces

- `GET /api/sauces`: Retrieve all sauces.
- `GET /api/sauces/:id`: Retrieve a specific sauce.
- `POST /api/sauces`: Create a new sauce.
- `PUT /api/sauces/:id`: Update an existing sauce.
- `DELETE /api/sauces/:id`: Delete a sauce.
- `POST /api/sauces/:id/like`: Allow a user to like or unlike a sauce.

### Authentication

- `POST /api/auth/signup`: Sign up a new user.
- `POST /api/auth/login`: Log in an existing user.

## Middlewares

### Authentication

The `auth.js` middleware is used to verify user authentication using JSON Web Tokens (JWT). When a user signs up or logs in, a JWT token is generated and returned. This token must be included in the `Authorization` header for requests that require authentication.

### File Management

The `multer-config.js` middleware is used to handle the upload of sauce images. It configures Multer to store incoming files in the `images/` directory.

## Controllers

The `controllers/` directory contains controllers for CRUD operations on sauces. The `sauce.js` file defines the controller functions for each route related to sauces.

## Security

- User passwords are hashed using `bcrypt` before being stored in the database.
- User authentication is handled using JSON Web Tokens (JWT).
- CRUD operations on sauces require authentication to prevent unauthorized access.
- Sauce images are stored on the server and not in the database for security reasons.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt
- Multer

Feel free to contact me if you have any further questions or need additional information about a specific part of the project.