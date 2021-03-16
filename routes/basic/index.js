const Router = require('express').Router()
const cntrl = require('../../controllers/basic')


Router.get('/loop', cntrl.loop)


module.exports = Router