const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router()
const env = require('dotenv')


app.get("/", (req, resp)=>{
    resp.json({
        message: "hello"
    })
})



app.listen(port,()=>{
    console.log("Listening on port: ", port)
})