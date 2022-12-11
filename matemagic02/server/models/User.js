const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: false
    },
    year:{
        type: String,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = User = mongoose.model('User', UserSchema, 'users');
