const fs = require('fs');
module.exports = function (arg) {
  fs.readFile(arg, 'utf8', (err, files) => {
    if (err) {
      done('Something has gone wrong');
    } else {
      let tenLines = files.split('\n');
      const lengthOfLines = tenLines.length - 1;
      let tenLinesOutput = tenLines.slice(lengthOfLines - 10, lengthOfLines);
      let ans = tenLinesOutput.join('\n');
      done(ans);
    }
  });
};
const done = require('./bash');
