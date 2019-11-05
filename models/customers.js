const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customer = Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    birthday: Date,
    phoneNumber: {type: Number, min: 100000000, max: 999999999},
    houseNumber: Number,
    streetAddress: String,
    city: String,
    state: String,
    zip: {type: Number, min: 10000, max: 99999}
})

module.exports = mongoose.model('customer', customer)