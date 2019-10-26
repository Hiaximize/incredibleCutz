const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

app.use("/customer", router)

app.get("/", (req, resp)=>{
    resp.json({
        message: "hello"
    })
})



app.listen(port,()=>{
    console.log("Listening on port: ", port)
})