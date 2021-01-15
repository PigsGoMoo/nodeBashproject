module.exports = function () {
  const time = new Date();
  const day = time.getDate().toString();
  let month = time.getMonth();
  switch (month) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  }
  let weekday = time.getDay();
  switch (weekday) {
    case 0:
      weekday = 'Sunday';
      break;
    case 1:
      weekday = 'Monday';
      break;
    case 2:
      weekday = 'Tuesday';
      break;
    case 3:
      weekday = 'Wednesdau';
      break;
    case 4:
      weekday = 'Thursday';
      break;
    case 5:
      weekday = 'Friday';
      break;
    case 6:
      weekday = 'Saturday';
      break;
  }
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  let year = time.getFullYear().toString();

  done(`${weekday}: ${month} ${day}, ${year}, ${hours}:${minutes}:${seconds} `);
};
const done = require('./bash');
