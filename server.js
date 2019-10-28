const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router()
const env = require('dotenv')
env.config()

// DATABASE CODE
const Customer = require('./models/customer.js')
const mongoose = require('mongoose')
const db = mongoose.connection
mongoURI = process.env.MONGOURI
mongoose.connect(mongoURI, {useNewUrlParser:true})
mongoose.Promise = global.Promise

db.on("error", ()=>{
    console.log(error.message + "is Mongo running?")
})

db.on("connected", ()=>{
    console.log("successfully connected to:", mongoURI)
})

db.on("disconnect", ()=>{
    console.log("Disconnected from: ", mongoURI)
})

// const controller = './controllers/routers.js'

// app.use('/customer', router)

app.get("/", (req, resp)=>{
    resp.render('index.ejs')
})



app.listen(port,()=>{
    console.log("Listening on port: ", port)
})