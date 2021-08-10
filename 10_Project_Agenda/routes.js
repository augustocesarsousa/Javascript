const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// route index
route.get('/', homeController.index);

// route login
route.get('/login/index', loginController.index)

module.exports = route;