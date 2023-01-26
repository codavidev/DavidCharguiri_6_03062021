const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// utilisé pour hasher le mot de passe avant de sauvegarder l'utilisateur dans la base de données
userSchema.pre('save', function(next) {
    const user = this;
    // si le mot de passe n'a pas été modifié, passer à la prochaine étape
    if (!user.isModified('password')) {
        return next();
    }

    // hasher le mot de passe avec bcrypt
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', userSchema);
module.exports = User;

