const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customer = Schema({
    dateCreated: {type: Date, default: Date.now},
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number
})

module.exports = mongoose.model("customer", customer);