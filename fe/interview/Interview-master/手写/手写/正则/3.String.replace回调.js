let str = "a1b2c3d4";
const newStr = str.replace(/\d/g, (matchVal) => matchVal * 2); // 'a2b4c6d8'

console.log(newStr);
