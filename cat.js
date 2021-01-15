const fs = require('fs');
module.exports = function (arg) {
  fs.readFile(arg, (err, files) => {
    if (err) {
      done('Something has gone wrong');
    } else {
      done(files);
    }
  });
};
const done = require('./bash');
