//using mongoose we can able to create schemas !
const mongoose = require('mongoose');

const myschema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trime: true
    },
    Age: {
        type: Number,
        required: true,
        trime: true
    },
    City: {
        type: String,
        required: true,
        trime: true
    },
    CreateAt: {
        type: Date,
        default: Date.now
    }   
})

module.exports = mongoose.model('Users', myschema)