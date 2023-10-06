const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {

    mongoose.connect(process.env.MONGODB_URI)
        .then((resp) => console.log("Connected with Database"))
        .catch((err) => console.log("Error While Connecting", err))
}

module.exports= connectDB;