const express = require('express')
const customers = express.Router()
const Customer = require('../models/customers.js')

customers.get('/', (req, resp)=>{
    resp.render('customers/new/index.ejs')
})

customers.post('/', (req, resp)=>{
    Customer.create(req.body, (error, createdUser)=>{
        if(error){
            console.log(error)
        } else {
        console.log(req.body)
        console.log(createdUser)
        resp.redirect('/')
        }
    })
})

module.exports = customers