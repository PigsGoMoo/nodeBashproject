const fs = require('fs');
module.exports = function (arg) {
  fs.readFile(arg, 'utf8', (err, files) => {
    if (err) {
      done('Something has gone wrong');
    } else {
      const filesArray = files.split('\n');
      let preAns = filesArray.sort();
      let ans = preAns.join('\n');
      done(ans);
    }
  });
};
const done = require('./bash');
