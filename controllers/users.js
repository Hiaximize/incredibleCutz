const express = require('express')
const users = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

// ADD A NEW USER
// users.get('/new', (req, resp)=>{
//     resp.render('app/users/new.ejs')
// })

// SHOW ALL USERS
users.get('/', (req, resp)=>{
    User.find({}, (error, foundUsers)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(foundUsers)
        }
    })
})

// SHOW SPECIFIC USER
users.get('/:id', (req, resp)=>{
    User.findById(req.params.id, (error, foundUser)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(foundUser)
        }
    })
})

// UPDATE USER
users.put('/:id', (req, resp)=>{
    User.findById(req.params.id, req.body, {new: true}, (error, foundUser)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(foundUser)
        }
    })
})

// CREATE USER
users.post('/', (req, resp)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser)=>{
        if(error){
            resp.send(error)
        } else {
            console.log(createdUser)
            resp.redirect('/')
        }
    })
    
})

module.exports = users