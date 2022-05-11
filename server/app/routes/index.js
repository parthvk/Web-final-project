"use strict";

const userRoute = require("./user-route");

module.exports = (app) => {
  userRoute(app);
};
