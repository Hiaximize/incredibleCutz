const express = require('express')
const app = express()
const methodOverride = require('method-override')
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI || process.env.MONGOURI
const userController = require('./controllers/users.js')
const sessionController = require('./controllers/sessions.js')
const session = require('express-session')
const customerController = require('./controllers/customers.js')

// MIDDLEWARE
app.use(express.json())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

// DATABASE
mongoose.connect(mongoURI, {useNewUrlParser: true})
mongoose.connection.once('open', ()=>{
    console.log("connected to: ", mongoURI)
})

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

app.get('/', (req, resp)=>{
    resp.render('index.ejs',
    {currentUser: req.session.currentUser})
  
})

app.get('/app', (req, resp)=>{
    if(req.session.currentUser){
    resp.render('app/index.ejs', {currentUser: req.session.currentUser})
    } else {
        resp.redirect('/sessions/new')
    }
})

// PUTS THE ADD NEW CUSTOMER FORM ONTO THE SECURE PORTION OF THE PAGE

app.get('/app/customers', (req, resp)=>{
    if(req.session.currentUser){
        resp.render('app/new.ejs')
    } else {
        resp.redirect('/sessions/new')
    }
})

app.get('/app/user/new', (req, resp)=>{
    if(req.session.currentUser){
        resp.render('app/users/new.ejs')
    } else {
        resp.redirect("/sessions/new")
    }
})

app.use('/users', userController)
app.use('/sessions', sessionController)
app.use('/customers', customerController)

app.listen(port, ()=>{
    console.log("//////////")
    console.log("listening on port: ", port)
    console.log("//////////")
})
