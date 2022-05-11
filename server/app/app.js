'use strict';

module.exports = (app) => {
    const models = require('./models');
    const routes = require('./routes');
    routes(app);
};
