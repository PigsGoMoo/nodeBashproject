const fs = require('fs');
module.exports = function (arg) {
  fs.readFile(arg, 'utf8', (err, files) => {
    if (err) {
      done('Something has gone wrong');
    } else {
      const linesArray = files.split('\n');
      const linesSet = new Set();
      linesArray.forEach((val) => {
        linesSet.add(val);
      });
      let ans = [];
      linesSet.forEach((val) => {
        ans.push(val);
      });
      done(ans.join('\n'));
    }
  });
};
const done = require('./bash');
