const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

sessions.get('/new', (req, resp)=>{
    resp.render('sessions/new.ejs')
})

sessions.post('/', (req, resp)=>{
    User.findOne({username: req.body.username}, (error, foundUser)=>{
        console.log(foundUser)
        if(error){
            console.log("something went wrong")
        } else if (!foundUser) {
           resp.send("User not found")
        } else {
                if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser
                resp.redirect('/app/')
            } else {
                resp.send('<a href="/">Wrong password</a>')
            }
        }
    })

    sessions.delete('/', (req, resp)=>{
        req.session.destroy(()=>{
            resp.redirect('/')
        })
    })
})

module.exports = sessions