const Router = require('express').Router()
const controller = require('../controllers/SkateparksController')

Router.get('/', controller.GetParks)
Router.get('/skateparks', controller.GetAllParksLocation)

Router.get('/',controller)