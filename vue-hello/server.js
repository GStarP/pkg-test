const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

const port = 8088

var server = app.listen(port, function () {
    console.log(`server start on http://localhost:${port}`)
})