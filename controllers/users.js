const express = require('express')
const users = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

users.get('/new', (req, resp)=>[
    resp.render('users/new.ejs')
])

users.get('/', (req, resp)=>{
    User.find({}, (error, foundUsers)=>{
        if(error){
            console.log(error)
        } else {
            resp.json(foundUsers)
        }
    })
})

users.post('/', (req, resp)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser)=>{
        if(error){
            console.log(error)
        } else {
            console.log(createdUser)
            resp.redirect('/')
        }
    })
    
})

module.exports = users