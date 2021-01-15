function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt >');
}

module.exports = done;
process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  const cat = cmd[0];
  let arg = '';
  if (cmd.length > 1) {
    arg = cmd[1];
  }
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt >');
  switch (cat) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      funcCat(arg);
      break;
    case 'curl':
      curl(arg);
      break;

    case 'date':
      time();
      break;
    default:
      done(1);
  }
});
const pwd = require('./pwd');
const ls = require('./ls');
const funcCat = require('./cat');
const curl = require('./curl');
const time = require('./date');
