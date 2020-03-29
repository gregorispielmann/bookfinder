const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./config/database');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {
    // this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
    this.server.use(cors());
  }
}

module.exports = new App().server;
