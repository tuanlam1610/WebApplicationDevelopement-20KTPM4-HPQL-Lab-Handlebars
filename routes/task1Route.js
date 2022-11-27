const express = require('express');
const route = express.Router();
const controller = require('../controllers/task1Controller')

route.get('/', (req, res) =>{
    controller.showDefault(req, res);
})


module.exports = route;