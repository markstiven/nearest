const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const nearest = require("./controller/nearest")

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = 3000


// route login
app.post('/nearest', (req, res) => {nearest.localization(req, res)})

// API
app.listen(port, () => {console.log('Listening on port '+ port)})