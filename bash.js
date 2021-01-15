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
    arg = cmd.slice(1).join(' ');
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
    case 'echo':
      done(arg);
      break;
    case 'head':
      head(arg);
      break;
    case 'tail':
      tail(arg);
      break;
    case 'sort':
      sort(arg);
      break;
    case 'wc':
      wc(arg);
      break;
    case 'uniq':
      uniq(arg);
      break;
    default:
      done(`This is not a valid command.`);
  }
});
const pwd = require('./pwd');
const ls = require('./ls');
const funcCat = require('./cat');
const curl = require('./curl');
const time = require('./date');
const head = require('./head');
const tail = require('./tail');
const sort = require('./sort');
const wc = require('./wc');
const uniq = require('./uniq');
