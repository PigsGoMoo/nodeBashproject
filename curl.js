const request = require('request');
module.exports = function (arg) {
  request(arg, (err, status, body) => {
    if (err) {
      done('Something has gone wrong');
    } else {
      done(body);
    }
  });
};
const done = require('./bash');
