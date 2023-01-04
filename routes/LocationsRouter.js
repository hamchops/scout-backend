const Router = require('express').Router()
const controller = require('../controllers/LocationsController')

Router.get('/', controller.GetLocation)
Router.get('/location', controller.GetGeolocation)

module.exports = Router
