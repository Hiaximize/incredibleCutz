const express = require('express')
const customers = express.Router()
const Customer = require('../models/customers.js')


// ADD CUSTOMERS 
customers.get('/new', (req, resp)=>{
    resp.render('customers/new/index.ejs')
})

// INDEX ROUTE
customers.get('/', (req, resp)=>{
    Customer.find({}, (error, foundCustomers)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(foundCustomers)
        }
    })
})

// SHOW ROUTE
customers.get('/:id', (req, resp)=>{
    Customer.findById(req.params.id, (error, foundUser)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(foundUser)
        }
    })
})

// UPDATE ROUTE
customers.put('/:id', (req, resp)=>{
    Customer.findOneAndUpdate(req.params.id, req.body, {new: true}, (error, updatedCustomer)=>{
        if (error){
            resp.send(error)
        } else {
            resp.json(updatedCustomer)
        }
    })
})

// DELETE ROUTE
customers.delete('/:id', (req, resp)=>{
    Customer.findByIdAndRemove(req,params.id, (error, deletedUser)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json({
                deleted: true,
                deletedUser: deletedUser
            })
        }
    })
})

// POST ROUTE
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