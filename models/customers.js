const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customer = Schema({
    firstName: String,
    lastName: String,
    email: String,
    birthday: Date,
    phoneNumber: {type: Number, min: 100000000, max: 9999999999},
    houseNumber: Number,
    streetAddress: String,
    city: String,
    state: String,
    zip: {type: Number, min: 10000, max: 99999},
    favoriteBarber: String
})

const Customer = mongoose.model('Customer', customer)

module.exports = Customer