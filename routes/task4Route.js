const express = require('express')
const route = express.Router()
const controller = require('../controllers/task4Controller')

route.get('/', controller.showList)
route.get('/:name', controller.showDetails)

module.exports = route