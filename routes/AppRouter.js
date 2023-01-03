const Router = require('express').Router()
const SkateparksRouter = require('./SkateparksRouter')


Router.use('./skateparks', SkateparksRouter)

module.exports = Router