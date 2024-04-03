
// 计算工时函数，精确到 0.1 小时

const getDiffHours = (start, end) => {
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);
  // 将时间转换为分钟
  const startTimeInMinutes = startHour * 60 + startMinute;
  const endTimeInMinutes = endHour * 60 + endMinute;

  // 计算分钟差
  const minuteDiff = endTimeInMinutes - startTimeInMinutes;

  // 将分钟差转换为小时
  let hourDiff = minuteDiff / 60;

  // 默认减去中午的一小时休息时间
  hourDiff = hourDiff - 1

  return hourDiff.toFixed(1)
};

function workHours(data) {
  return data.map(({ start, end }) => getDiffHours(start, end))
}


// 每天的起始时间
const data = [
  // 12.25~12.29 [ '10.4', '9.4', '10.6', '12.9', '8.3' ]
  // { start: "8:41", end: "20:05" },
  // { start: "8:47", end: "19:10" },
  // { start: "8:37", end: "20:13" },
  // { start: "8:40", end: "22:33" },
  // { start: "8:44", end: "18:00" },
  // 1.2 ~1.5 [ '10.4', '10.5', '9.7', '9.5' ]
  // { start: "8:38", end: "20:02" },
  // { start: "8:44", end: "20:12" },
  // { start: "8:34", end: "19:13" },
  // { start: "8:38", end: "19:10" },
  // 1.08~1.12  [ '9.5', '9.6', '10.5', '9.6', '10.6' ]
  // { start: "8:43", end: "19:12" },
  // { start: "8:38", end: "19:12" },
  // { start: "8:43", end: "20:14" },
  // { start: "8:40", end: "19:14" },
  // { start: "8:38", end: "20:14" },
  // 1.15~1.19 [ '9.6', '10.5', '9.5', '8.5', '8.2' ]
  // { start: "8:37", end: "19:14" },
  // { start: "8:44", end: "20:13" },
  // { start: "8:38", end: "19:08" },
  // { start: "8:38", end: "18:07" },
  // { start: "8:49", end: "18:01" },
  // 1.15~1.19 [ '9.5', '9.5', '9.7', '9.6', '8.8' ]
  // { start: "8:43", end: "19:14" },
  // { start: "8:35", end: "19:06" },
  // { start: "8:31", end: "19:13" },
  // { start: "8:37", end: "19:13" },
  // { start: "8:26", end: "18:13" },
  // 1.29-2.4 [ '9.4', '9.4', '9.2', '9.4', '8.5', '9.3' ]
  //  { start: "8:38", end: "19:04" },
  //  { start: "8:40", end: "19:06" },
  //  { start: "8:59", end: "19:13" },
  //  { start: "8:44", end: "19:09" },
  //  { start: "8:37", end: "18:07" },
  //  { start: "8:57", end: "19:13" },

  //  2.17 2.18 [ '9.3', '8.4' ]
  // { start: "8:51", end: "19:10" },
  //  { start: "8:47", end: "18:10" },
  // 2.19~2.25 [ '9.2', '9.4', '9.2', '8.4', '9.4', '9.0' ]
  //  { start: "8:48", end: "18:58" },
  //  { start: "8:47", end: "19:09" },
  //  { start: "8:59", end: "19:13" },
  //  { start: "8:51", end: "18:13" },
  //  { start: "8:48", end: "19:13" },
  //  // 周日
  //  { start: "8:58", end: "19:00" },

  // 2.26~3.02 [ '9.6', '9.5', '9.5', '10.3', '8.4', '8.4' ]
  // { start: "8:40", end: "19:14" },
  //  { start: "8:45", end: "19:14" },
  //  { start: "8:40", end: "19:10" },
  //  { start: "8:41", end: "20:02" },
  //  { start: "8:44", end: "18:06" },
  // 周日 
  //  { start: "8:51", end: "18:15" },

  // 3.3~3.8 [ '9.6', '10.2', '8.4', '10.4', '10.3' ]
  // { start: "8:40", end: "19:13" },
  //  { start: "8:50", end: "20:00" },
  //  { start: "8:37", end: "18:00" },
  //  { start: "8:43", end: "20:10" },
  //  { start: "8:50", end: "20:10" },
  //  3.11~3.15 [ '8.5', '10.4', '9.3', '10.3', '10.2' ]
  // { start: "8:40", end: "18:11" },
  // { start: "8:44", end: "20:10" },
  // { start: "8:55", end: "19:10" },
  // { start: "8:44", end: "20:00" },
  // { start: "8:50", end: "20:00" },
    //  3.18~3.22 [ '10.4', '8.3', '8.4', '10.2', '8.2' ]
    { start: "8:50", end: "20:12" },
    { start: "8:51", end: "18:06" },
    { start: "8:51", end: "18:13" },
    { start: "8:51", end: "20:03" },
    { start: "8:53", end: "18:04" },
];


console.log(workHours(data));


