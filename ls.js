const fs = require('fs');
module.exports = function () {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done('Something has gone wrong');
    } else {
      done(files.join('\n'));
    }
  });
};
const done = require('./bash');
