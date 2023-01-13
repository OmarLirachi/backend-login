const { date } = require('@hapi/joi/lib/template')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    lastname:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        minLegth: 6
    },
    date: {
        type: date,
        default: Date.now
    }
})
module.exports = mongoose.model('User', userSchema)