const express = require('express')
const app = express()
const router = express.Router()

router.get("/", (req, resp) => {
    resp.render('index.ejs')
})

module.exports = router

