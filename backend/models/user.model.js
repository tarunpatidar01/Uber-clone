const mongoose = require('mongoose');



const useSchema = new mongoose.Schema({
    fullname:{
        fistname: {
            type: String,
            require: true,
            minlength:[3,'first name mist be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength:[3,'last name mist be at least 3 characters long'],
        }
    },
    email:{
        type: String,
        require: true,
        unique: true,
        minlength:[5,'Email name mist be at least 5 characters long'],
    },
    password: {
        type: String,
        require: true,
    },
    socketId: {
        typr: String
    }
})