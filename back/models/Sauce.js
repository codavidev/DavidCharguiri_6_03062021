const mongoose = require('mongoose');

const sauceSchema = new mongoose.Schema({
    userId : {type: String}, // — l'identifiant MongoDB unique de l'utilisateur qui a créé la sauce
    name : {type: String, unique: true}, // — nom de la sauce
    manufacturer : {type: String}, // — fabricant de la sauce
    description : {type: String}, // — description de la sauce
    mainPepper : {type: String}, // — le principal ingrédient épicé de la sauce
    imageUrl : {type: String}, // — l'URL de l'image de la sauce téléchargée par l'utilisateur
    heat : {type: Number}, // — nombre entre 1 et 10 décrivant la sauce
    likes : {type: Number}, // — nombre d'utilisateurs qui aiment (= likent) la sauce
    dislikes : {type: Number}, // — nombre d'utilisateurs qui n'aiment pas (= dislike) la sauce
    usersLiked : [ "String <userId>" ], // — tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce
    usersDisliked : [ "String <userId>" ], // — tableau des identifiants des utilisateurs qui n'ont pas aimé (= disliked) la sauce
});


const Sauce = mongoose.model('Sauce', sauceSchema);
module.exports = Sauce;