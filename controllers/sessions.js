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
            console.log('////////////////////////')
            console.log(error)
            console.log('////////////////////////')
        } else if (!foundUser) {
           resp.render("wrongInfo.ejs")
        } else {
                if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser
                resp.redirect('/app/')
            } else {
                resp.render('wrongInfo.ejs')
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