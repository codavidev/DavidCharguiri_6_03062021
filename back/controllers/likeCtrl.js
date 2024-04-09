// Importation du modèle Sauce
const Sauce = require('../models/Sauce');

// Fonction pour gérer les likes et dislikes
exports.handleLike = (req, res, next) => {
  // Récupérer l'id de la sauce
  let sauceId = req.params.id;
  // Récupérer l'userId et le like depuis le corps de la requête
  let userId = req.body.userId;
  let like = req.body.like;

  // Trouver la sauce avec l'id spécifié
  Sauce.findOne({ _id: sauceId })
    .then(sauce => {
      // Mettre à jour les tableaux de likes et de dislikes en fonction de la valeur de 'like'
      switch (like) {
        case 1: // Cas où l'utilisateur aime la sauce
          Sauce.updateOne({ _id: sauceId }, { $push: { usersLiked: userId }, $inc: { likes: +1 }})
            .then(() => res.status(200).json({ message: 'Sauce liked!' }))
            .catch(error => res.status(400).json({ error }));
          break;
        case -1: // Cas où l'utilisateur n'aime pas la sauce
          Sauce.updateOne({ _id: sauceId }, { $push: { usersDisliked: userId }, $inc: { dislikes: +1 }})
            .then(() => res.status(200).json({ message: 'Sauce disliked!' }))
            .catch(error => res.status(400).json({ error }));
          break;
        case 0: // Cas où l'utilisateur annule son like ou dislike
          if (sauce.usersLiked.includes(userId)) { // Si l'utilisateur avait aimé la sauce
            Sauce.updateOne({ _id: sauceId }, { $pull: { usersLiked: userId }, $inc: { likes: -1 }})
              .then(() => res.status(200).json({ message: 'Like removed!' }))
              .catch(error => res.status(400).json({ error }));
          } else { // Si l'utilisateur n'avait pas aimé la sauce
            Sauce.updateOne({ _id: sauceId }, { $pull: { usersDisliked: userId }, $inc: { dislikes: -1 }})
              .then(() => res.status(200).json({ message: 'Dislike removed!' }))
              .catch(error => res.status(400).json({ error }));
          }
          break;
        default:
          res.status(500).json({ error });
      }
    })
    .catch(error => res.status(500).json({ error }));
};
