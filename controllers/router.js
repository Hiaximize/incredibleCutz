const express = require('express')
const app = express()
const router = express.Router()

router.get("/", (req, resp) => {
    resp.send({
        message: "hello"
    })
})

module.exports = router

