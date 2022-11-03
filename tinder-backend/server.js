const express = require('express')
const app = express()

const PORT = process.env.PORT || 8001

app.get('/', (req, res) => {
    res.send("Backend Server It is.")
})

app.listen(PORT, (req, res) => {
    console.log(`SERVER HAS STARTED AT PORT ${PORT}!`)
})