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

    money:{
        type: Number,
        required: false

    },
    exp:{
        type: Number,
        required: false
    },

    abilities: {

        strength:{
            type: Number
        },
        attack:{
            type: Number
        },
        defense:{
            type: Number
        },
        hp:{
            type: Number
        },
        required: false

    },
    inventory:{
        type:Array,
        required: false
    },

    helm_equip:{
        type: Object,
        required: false

    },

    weapon_equip:{
        type: Object,
        required: false
    },

    armor_equip:{
        type: Object,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    },
    total_count_of_excercies: {
        type: Number,
        required: false
    },

    success_rate: {
        //in %
        type: Number,
        required: false
    },

    daily_limit_excercies: {
        type: Number,
        required: false,
        max: 6
    },

    defeated_oponents: {
        type: Array,
        required: false
    }



});

module.exports = User = mongoose.model('User', UserSchema, 'users');
