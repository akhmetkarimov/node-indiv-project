const Router = require('express').Router()
const basic = require('./basic')

Router.use('/basic', basic)

// Router.use('/basic', require('./basic'))

// /basic/loop
// /basic/array

module.exports = Router