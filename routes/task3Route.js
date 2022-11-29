const express = require('express');
const route = express.Router();
const controller = require('../controllers/task3Controller');
const { products } = require('../models/data');

route.get('/', (req, res) =>{
    controller.showList(req, res);
})


module.exports = route;