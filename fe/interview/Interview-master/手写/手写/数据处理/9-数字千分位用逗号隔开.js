function format(num) {
  const str = num.toString().split("").reverse();
  const resArr = [];
  for (let i = 0; i < str.length; i++) {
    resArr.push(str[i]);
    if ((i + 1) % 3 === 0) {
      resArr.push(",");
    }
  }
  return resArr.reverse().join("");
}

console.log(format(23456));
