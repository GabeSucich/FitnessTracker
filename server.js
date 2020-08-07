var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')


const PORT = process.env.port || 3000

const app = express()

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

require("./apiRoutes")(app)
require("./htmlRoutes")(app)


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerdb", { useNewUrlParser: true })

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  