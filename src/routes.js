const express = require('express');
const SessionController = require('./controllers/SessionController');
const DeviceController = require('./controllers/DeviceController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/devices', DeviceController.store);
routes.get('/devices', DeviceController.index);
routes.put('/devices/:id', DeviceController.update);
routes.delete('/devices/:id', DeviceController.destroy);



module.exports = routes;