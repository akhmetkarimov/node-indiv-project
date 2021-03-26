const Router = require('express').Router()
const cntrl = require('../../controllers/basic')


Router.get('/loop', cntrl.loop)
Router.get('/array', cntrl.arrays)


module.exports = Router