console.log(2 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log('str' instanceof String); // false
console.log(new Number(2) instanceof Number); // true
console.log(new Boolean(true) instanceof Boolean); // true
console.log(new String('str') instanceof String); // true

console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true