const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Barbers = new Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    hometown: {type: String, require: true},
    favCut: {type: String, require: true},
    whatMadeYouCutHair: {type: String, require: true}
})

module.exports = mongoose.model('Barbers', Barbers)