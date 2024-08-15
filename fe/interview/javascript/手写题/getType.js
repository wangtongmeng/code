function getType(x) {
  const originType = Object.prototype.toString.call(x); // '[object String]'
  const spaceIndex = originType.indexOf(" ");
  const type = originType.slice(spaceIndex + 1, -1); // 'String'
  return type.toLowerCase(); // 'string'
}

// null undefined
console.log(getType(null) === "null");
console.log(getType(undefined) === "undefined");
// number
console.log(getType(100) === "number");
console.log(getType(NaN) === "number");
console.log(getType(Infinity) === "number");
console.log(getType(-Infinity) === "number");
// string
console.log(getType("abc") === "string");
// boolean
console.log(getType(true) === "boolean");
// symbol
console.log(getType(Symbol()) === "symbol");
// bigint
console.log(getType(BigInt(100)) === "bigint");
// object
console.log(getType({}) === "object");
// array
console.log(getType([]) === "array");
// function
console.log(getType(() => {}) === "function");
console.log(getType(class Foo {}) === "function");
// map
console.log(getType(new Map()) === "map");
// weakmap
console.log(getType(new WeakMap()) === "weakmap");
// set
console.log(getType(new Set()) === "set");
// weakset
console.log(getType(new WeakSet()) === "weakset");
// date
console.log(getType(new Date()) === "date");
// regexp
console.log(getType(new RegExp("")) === "regexp");
// error
console.log(getType(new Error()) === "error");
// promise
console.log(getType(Promise.resolve()) === "promise");
