const mongoose = require('mongoose');
//const {itemsConnections} = require("../connections");


let Task = new mongoose.Schema({
    text_of_task: String,
    for_year: Number,
    result: Number,
    student_result: Number,
    reward: Number,
});

module.exports = mongoose.model('Task', Task);





