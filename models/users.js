const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    username: {type: String, require: true},
    password: {type: String, require: true}
})

module.exports = mongoose.model('user', user)