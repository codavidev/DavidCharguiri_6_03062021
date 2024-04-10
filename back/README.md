# Piiquante - API de notation de sauces piquantes

🌐 *Read this in [English](README.en.md)*

Voici les instructions d'installation et de démarrage en utilisant le fichier `.env` et le fichier `exampleDataInsertion.js` pour ajouter les données de démonstration :

## Installation

1. Clonez le dépôt GitHub : `git clone https://github.com/codavidev/DavidCharguiri_6_03062021.git`
2. Accédez au répertoire backend : `cd DavidCharguiri_6_03062021/back`
3. Installez les dépendances : `npm install`

## Configuration

1. Copiez le fichier `.env.example` en `.env` :

```
cp .env.example .env
```

2. Ouvrez le fichier `.env` et remplacez les valeurs des variables d'environnement par les vôtres :

```
DB_USER=<votre_nom_utilisateur_mongodb>
DB_PASSWORD=<votre_mot_de_passe_mongodb>
DB_CLUSTER=<votre_cluster_mongodb>
TOKEN_KEY=<votre_clé_de_token_secrète>
```

## Démarrage

1. Démarrez le serveur : `npm start`

2. L'API sera accessible à l'adresse `http://localhost:3000/`

### Données de démonstration (facultatif)

Une fois le serveur démarré, vous pouvez exécuter le script `exampleDataInsertion.js` pour ajouter des données de démonstration (utilisateurs et sauces) :

```
node exampleDataInsertion.js
```

Le fichier `.env` contient les variables d'environnement nécessaires pour se connecter à la base de données MongoDB et configurer la clé de token secrète pour l'authentification JWT.

Le fichier `exampleDataInsertion.js` est un script qui insère des données fictives dans la base de données, comme des utilisateurs et des sauces, pour permettre de tester l'API avec des données de démonstration.



