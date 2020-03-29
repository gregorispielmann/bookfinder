const crypto = require('crypto');
const { hashPassword } = require('../../utils/hashPassword');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: crypto.randomBytes(5).toString('HEX'),
          name: 'Administrador',
          email: 'admin@bookfinder.com',
          password: hashPassword('123456'),
        },
      ]);
    });
};
