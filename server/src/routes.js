const express = require('express');

const routes = express.Router();

/** CONTROLLERS */
const AuthController = require('./app/controllers/AuthController');
const BookController = require('./app/controllers/BookController');
const FavoriteController = require('./app/controllers/FavoriteController');

/** AUTH CONTROLLER */
routes.post('/login', AuthController.index);

/** AUTHENTICATION CHECK */
routes.use(AuthController.show);

/** INDEX */
routes.get('/', (req, res) => res.json({ message: 'Welcome to Book Finder' }));

/** BOOK CONTROLLER */
routes.post('/books', BookController.index);

/** FAVORITE CONTROLLER */
routes.get('/favorites', FavoriteController.index);
routes.post('/favorites/:bookId', FavoriteController.create);
routes.delete('/favorites/:bookId', FavoriteController.delete);

module.exports = routes;
