// seedData.js
require('dotenv').config()

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Sauce = require('./models/Sauce');

// Connexion à la base de données MongoDB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Données fictives pour les utilisateurs
const users = [
    {
        email: 'user1@example.com',
        password: 'password1',
    },
    {
        email: 'user2@example.com',
        password: 'password2',
    },
];

// Suppression des utilisateurs et sauces existants dans la base de données
User.deleteMany({})
  .then(() => Sauce.deleteMany({}))
  .then(() => {
    // Hashage des mots de passe des utilisateurs
    return Promise.all(users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return { ...user, password: hashedPassword };
    }));
  })
  .then((hashedUsers) => {
    // Insertion des nouveaux utilisateurs dans la base de données
    return User.insertMany(hashedUsers);
  })
    .then((createdUsers) => {
        // Création de sauces pour chaque utilisateur
        const sauces = [
            {
                userId: createdUsers[0]._id,
                name: 'Sauce au Chipotle Fumé',
                manufacturer: 'Fuego Auténtico',
                description: 'Une sauce onctueuse et légèrement fumée, préparée avec des chipotles fumés et une touche de jalapeños frais. Parfaite pour accompagner vos plats mexicains préférés.',
                mainPepper: 'Chipotles fumés',
                imageUrl: 'https://example.com/chipotle-sauce.jpg',
                heat: 6,
                likes: 0,
                dislikes: 0,
                usersLiked: [],
                usersDisliked: []
            },
            {
                userId: createdUsers[1]._id,
                name: 'Sauce au Piment Serrano',
                manufacturer: 'Chili Artisanal',
                description: 'Une sauce crémeuse et piquante, préparée avec des piments serrano verts frais. Idéale pour relever vos plats asiatiques ou pour une sauce à trempette épicée.',
                mainPepper: 'Piments serrano verts',
                imageUrl: 'https://example.com/serrano-sauce.jpg',
                heat: 7,
                likes: 0,
                dislikes: 0,
                usersLiked: [],
                usersDisliked: []
            },
            {
                userId: createdUsers[0]._id,
                name: 'Sauce au Piment de l\'Arbre',
                manufacturer: 'Sabor Picante',
                description: 'Une sauce rouge vibrante et épicée, préparée avec des piments de l\'arbre frais. Apportera une touche de chaleur authentique à vos plats mexicains.',
                mainPepper: 'Piments de l\'arbre',
                imageUrl: 'https://example.com/arbol-sauce.jpg',
                heat: 8,
                likes: 0,
                dislikes: 0,
                usersLiked: [],
                usersDisliked: []
            },
            {
                userId: createdUsers[1]._id,
                name: 'Sauce Peri-Peri',
                manufacturer: 'Sabor do Sul',
                description: 'Une sauce piquante et légèrement fumée, inspirée des traditions culinaires portugaises. Idéale pour les grillades et les plats de viande.',
                mainPepper: 'Piments peri-peri',
                imageUrl: 'https://example.com/peri-peri-sauce.jpg',
                heat: 7,
                likes: 0,
                dislikes: 0,
                usersLiked: [],
                usersDisliked: []
            },
            {
                userId: createdUsers[0]._id,
                name: 'Sauce au Jalapeño Verte',
                manufacturer: 'Spicy Sombrero',
                description: 'Une sauce verte crémeuse et piquante, préparée avec des jalapeños frais et de la crème fraîche. Parfaite pour les nachos et les tacos.',
                mainPepper: 'Jalapeños verts',
                imageUrl: 'https://example.com/jalapeno-sauce.jpg',
                heat: 4,
                likes: 0,
                dislikes: 0,
                usersLiked: [],
                usersDisliked: []
            }
        ];

        // Insertion des nouvelles sauces dans la base de données
        return Sauce.insertMany(sauces);
    })
    .then(() => {
        console.log('Données fictives insérées avec succès !');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Erreur lors de l'insertion des données fictives :", err);
        mongoose.connection.close();
    });