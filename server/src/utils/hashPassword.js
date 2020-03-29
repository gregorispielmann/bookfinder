const CryptoJS = require('crypto-js');
require('dotenv/config');

module.exports = {
  hashPassword(pass) {
    const newPass = CryptoJS.MD5(pass, process.env.APP_SECRET).toString();
    return newPass;
  },
};
