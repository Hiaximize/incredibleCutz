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

// NEED TO FINISH UPDATE PASSWORD /////////////////
// UPDATE USER
users.put('/:id', (req, resp)=>{

    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, foundUser)=>{
        if(error){
            resp.send(error)
        } else {
            resp.json(foundUser)
        }
    })
})
///////////////////////////////////////////

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

// DELETE USER

users.delete('/:id', (req, resp)=>{
    User.findByIdAndRemove(req.params.id, (error, deletedUser)=>{
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

module.exports = users