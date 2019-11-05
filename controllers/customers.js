const express = require('express')
const customer = express.Router()
const Customer = require('../models/customers.js')

customer.get('/', (req, resp)=>{
    resp.render('customers/new/index.ejs')
})

// customer.post('/', (req, resp)=>{
//     Customer.create(req.body, (error, createdUser)=>{
//         if(error){
//             console.log(error)
//         } else {
//         // console.log(createdUser)
//         resp.redirect('/')
//         }
//     })
// })

module.exports = customer