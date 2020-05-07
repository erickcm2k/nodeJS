const mongoose = require('mongoose')

const Schema = mongoose.Schema
const mySchema = new Schema({
    user: String,
    message: String, 
    date: Date,
})

const Model = mongoose.model('Message', mySchema)

module.exports = Model