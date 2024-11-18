const mongoose = require('mongoose');

const local = "mongodb+srv://hai123:UNhnHi7mlo47q8jW@cluster0.0wmav.mongodb.net/Book";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success'); 
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
