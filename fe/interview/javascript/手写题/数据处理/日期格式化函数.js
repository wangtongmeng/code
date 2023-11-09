const dateFormat = (dateInput, format) => {
  let day = dateInput.getDay()
  let month = dateInput.getMonth() + 1
  let year = dateInput.getFullYear()
  format = format.replace(/yyyy/, year)
  format = format.replace(/MM/, month)
  format = format.replace(/dd/, day)
  return  format
}

console.log(dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd')); // 2020/12/2
console.log(dateFormat(new Date('2020-12-01'), 'yyyy年MM月dd日')); // 2020年12月2日
