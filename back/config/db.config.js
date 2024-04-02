require('dotenv').config()
const mongoose = require('mongoose');
const mongoDB = require('mongodb');
const User = require('../models/User');

// [MONGOOSE] DeprecationWarning suppress
mongoose.set('strictQuery', false);

// Connexion à Mongoose
mongoose.connect(process.env.DB_URI, { 
    useNewUrlParser: true, useUnifiedTopology: true 
},
(err)=>{
    if(err)
    {
        console.log(err);
    }else{
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    }
});

module.exports = mongoose.connection;

