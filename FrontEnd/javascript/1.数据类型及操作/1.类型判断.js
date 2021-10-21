


/* 

JS中有七种基本数据类型
六种基本数据类型 Boolean Null Undefined Number String Symbol
一种引用类型 object {} [] /^$/ new Date() Math


typeof 基本类型
instanceof 类的实例
constructor
Object.prototype.toString.call() 最强大
*/

console.log(typeof a);    // undefined
console.log(typeof 1);   // number
console.log(typeof 'lisi'); // string
console.log(typeof true);  // boolean
console.log(typeof Symbol('a'));  // symbol

console.log(typeof function () { });  //function

console.log(typeof [1, 2, 3]);  //object
console.log(typeof { name: 'lisi' });  //object
console.log(typeof null);  //object
console.log(typeof new Number(1));  //object

// 对象中有两个方法 valueOf toString()
let obj = {
    [Symbol.toPrimitive](){
        return 500
    },
    valueOf () {
        return 100
    },
    toString(){
        return 200
    }
}
console.log(true + obj); // 101 // 先调valueOf 如果不是原始类型再调用 toStirng  501

// + - 这个符号 ！
console.log(1 + + '123'); // 124
console.log(1+'123'); // 1123


// 比较运算 > = <
console.log('a' < 'b'); // ascii 比字符串的第一位
console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));

// 数字和字符串
console.log((1 < '123')); // 如果能转化成数字就转化，如果不能就返回false

//  == 
console.log(null == undefined); // true
console.log(null == 0); // null undefined 和其他类型比较都会返回false
// 类型转化
console.log({}=={});
console.log(NaN == 1); // NaN和任何类型比较都不相等
// 字符串和数字比较 将字符串转化成数字
console.log('1' == 1);
// 如果是boolean类型 会把boolean转化成数字
console.log(1 == true);
// 对象和对字符串 数字 symbol 比较时 会把对象转换成原始数据类型
console.log({} == '[object Object]'); 