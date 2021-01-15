const fs = require('fs');
module.exports = function (arg) {
  fs.readFile(arg, 'utf8', (err, files) => {
    if (err) {
      done('Something has gone wrong');
    } else {
      const filesArray = files.split('\n');
      const lineCount = filesArray.length;
      const wordsArray = files.split(' ');
      const wordCount = wordsArray.length;
      const fileSize = fs.statSync(arg);

      done(
        `Line count: ${lineCount} lines.\nWord count: ${wordCount} words\nFile size: ${
          fileSize.size
        } bytes. \n(or ${
          fileSize.size / 1024
        } kB cuz Viral doesn't understand bytes)`
      );
    }
  });
};
const done = require('./bash');
