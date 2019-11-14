const express = require('express')
const customers = express.Router()
const Customer = require('../models/customers.js')

customers.get('/new', (req, resp)=>{
    resp.render('customers/new/index.ejs')
})

customers.get('/', (req, resp)=>{
    Customer.find({}, (error, foundCustomers)=>{
        if(error){
            console.log(error)
        } else {
            resp.json(foundCustomers)
        }
    })
})

customers.post('/', (req, resp)=>{
    Customer.create(req.body, (error, createdUser)=>{
        if(error){
            console.log(error)
        } else {
            resp.send(createdUser)
        console.log(req.body)
        console.log(createdUser)
        // resp.redirect('/')
        }
    })
})

module.exports = customers