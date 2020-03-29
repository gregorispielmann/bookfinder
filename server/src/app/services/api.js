const axios = require('axios');

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

module.exports = api;
