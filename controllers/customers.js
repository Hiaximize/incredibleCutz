const express = require('express')
const customer = express.Router()

customer.get('/', (req, resp)=>{
    resp.render('customers/new/index.ejs')
})

module.exports = customer