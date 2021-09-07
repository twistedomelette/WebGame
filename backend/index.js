const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

async function start() {
    try {
        await mongoose.connect('mongodb+srv://twistedom:db000P@cluster0.bumru.mongodb.net/WebGame?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useFindAndModify: false
            })
            // .then(() => console.log('Connecting ...'))
            // .catch(err => err.message);
        app.listen(PORT, () => {
            console.log("Server has been started...");
        })
    } catch (e) {
        console.log('Error!');
    }
}

start()