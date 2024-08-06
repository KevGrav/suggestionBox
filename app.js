const express = require('express')
//other packages
const logger = require('morgan')
const cors = require('cors')
const suggestionRouter = require('./routes/suggestions/suggestionRouter')


//start express app
const app = express()

//use middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/user', suggestionRouter)

module.exports = app