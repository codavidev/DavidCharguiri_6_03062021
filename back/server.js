
require('dotenv').config()
const http = require('http');
const app = require('./app');

const mongoose = require('mongoose');


// Fonction pour normaliser le port
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

// Utilisation du port spécifié ou 3000 par défaut
const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);
// Gestion des erreurs lors de l'écoute sur le port
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// Création du serveur avec l'application importée
const server = http.createServer(app);

// Enregistrement des gestionnaires d'erreurs et de connexion
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

// Ecoute sur le port
server.listen(port);
