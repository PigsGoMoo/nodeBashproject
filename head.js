const fs = require('fs');
module.exports = function (arg) {
  fs.readFile(arg, 'utf8', (err, files) => {
    if (err) {
      done('Something has gone wrong');
    } else {
      const tenLines = files.split('\n').slice(0, 10).join('\n');

      done(tenLines);
    }
  });
};
const done = require('./bash');
