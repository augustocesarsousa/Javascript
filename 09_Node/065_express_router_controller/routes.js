const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const homeContact = require('./controllers/contactController')

route.get('/', homeController.homePage);
route.post('/', homeController.setPost);

route.get('/contact', homeContact.homePage);

module.exports = route;