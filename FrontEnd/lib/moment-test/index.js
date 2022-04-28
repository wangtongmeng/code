var moment = require("moment");
// 今天

moment.calendarFormat = function (myMoment, now) {
  var diff = myMoment.diff(now, "days", true);
  console.log(diff,'2')
  if (0 <= diff && diff < 1) {
    console.log(diff,'1')
    // 今天
    return "sameDay";
  } else if (-1 <= diff && diff < 0) {
    // 昨天
    return "lastDay";
  } else if (-2 <= diff && diff < -1) {
    // 前天
    return "lastLastDay";
  } else {
    // 其他
    return "sameElse";
  }
};

var result = moment(Date.now()).calendar(null, {
  sameDay: "[今天] HH:mm:ss",
  lastDay: "[昨天] HH:mm:ss",
  lastLastDay: "[前天] HH:mm:ss",
  sameElse: "YYYY-MM HH:mm:ss",
});

console.log(" result", result);



moment().startOf('day').format('YYYY-MM-DD HH:mm:ss') // 当天0点的时间格式
 moment().startOf('day').format('X') // 当天0点的时间缀，以10位Unix时间戳输出(秒）
 moment().endOf('day').format('YYYY-MM-DD HH:mm:ss') // 当天23点59分59秒的时间格式
 moment().endOf('day').format('x') //当天23点59分59秒以13位Unix时间戳输出（毫秒）

 moment('2020-06-30').startOf('day').format('x') // 2020-06-30当天0点的以13位Unix时间戳输出（毫秒）
 moment('2020-06-30').endOf('day').format('x') //  2020-06-30当天24点的以13位Unix时间戳输出（毫秒）