const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const homeContact = require('./src/controllers/contactController')

route.get('/', homeController.homePage);
route.post('/', homeController.setPost);

route.get('/contact', homeContact.homePage);

module.exports = route;