process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt >');
  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
  }
});
const pwd = require('./pwd');
const ls = require('./ls');
