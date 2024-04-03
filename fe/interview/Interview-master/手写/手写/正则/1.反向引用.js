// 反向引用 1993-03-23 => 23/03/1993

const str = "1993-03-23";

const newStr = str.replace(/(\d{4})-(\d{2})-(\d{2})/g, "$3/$2/$1");

console.log(newStr);
