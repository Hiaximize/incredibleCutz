const express = require('express')
const customers = express.Router()
const Customer = require('../models/customers.js')

customers.get('/new', (req, resp)=>{
    resp.render('customers/new/index.ejs')
})

customers.get('/', (req, resp)=>{
    Customer.find({}, (error, foundCustomers)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(foundCustomers)
        }
    })
})

customers.put('/:id', (req, resp)=>{
    Customer.findOneAndUpdate(req.params.id, req.body, {new: true}, (error, updatedCustomer)=>{
        if (error){
            resp.send(error)
        } else {
            resp.json(updatedCustomer)
        }
    })
})

customers.post('/', (req, resp)=>{
    Customer.create(req.body, (error, createdUser)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(req.body)
        // resp.redirect('/')
        }
    })
})

module.exports = customers