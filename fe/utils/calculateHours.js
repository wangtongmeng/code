
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
  return data.map(({start, end}) => getDiffHours(start, end))
}


// 每天的起始时间
const data = [
  { start: "8:41", end: "19:30" },
  { start: "9:00", end: "20:30" },
  { start: "8:41", end: "19:30" },
  { start: "8:41", end: "19:30" },
  { start: "8:41", end: "19:30" },
];


console.log(workHours(data));


