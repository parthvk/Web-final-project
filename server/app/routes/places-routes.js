const express = require('express');
const routes = express.Router();
const placesController = require('../controllers/places-controller');

routes.route('/places')
    .get(placesController.get)
    .post(placesController.add);

routes.route('/places/:id')
    .put(placesController.update)
    .delete(placesController.remove);

// module.exports = routes;

module.exports = (app) => {
    app.use('/',routes);
}
