const Router = require('express').Router()
const SkateparksRouter = require('./SkateparksRouter')
const LocationsRouter = require('./LocationsRouter')


Router.use('./skateparks', SkateparksRouter)
Router.use('./locations', LocationsRouter)

module.exports = Router