const express = require('express')
const customers = express.Router()
const Customer = require('../models/customers.js')
require('dotenv').config()
const sessionController = require('../controllers/sessions.js')
const session = require('express-session')


customers.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

// INDEX ROUTE
customers.get('/', (req, resp)=>{
    if(req.session.currentUser){
    Customer.find({}, (error, foundCustomers)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(foundCustomers)
        }
    })
    }
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
    Customer.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedCustomer)=>{
        if (error){
            resp.send(error)
        } else {
            resp.json(updatedCustomer)
        }
    })
})

// DELETE ROUTE
customers.delete('/:id', (req, resp)=>{
    Customer.findByIdAndRemove(req.params.id, (error, deletedUser)=>{
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

customers.use('/sessions', sessionController)

module.exports = customers