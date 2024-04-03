(function f() {
  console.log(a)
  a = 1
})()
console.log(a) 

// ❎
var a, b
(function () {
 console.log(a);
 console.log(b);
 var a = (b = 3);
 console.log(a);
 console.log(b);
})()
console.log(a);
console.log(b);


var a = 10
var obj = {
a: 20,
say: () => {
  console.log(this.a)
}
}
obj.say()  // 10

var anotherObj = { a: 30 } 
obj.say.apply(anotherObj)  // 10


var F = function() {};
Object.prototype.a = function() {
console.log('a');
};
Function.prototype.b = function() {
console.log('b');
}
var f = new F();
F.a(); // 
F.b(); // 
f.a(); //
f.b(); // 


const promise = new Promise((resolve, reject) => {
console.log(1);
console.log(2);
});
promise.then(() => {
console.log(3);
});
console.log(4);
// 1 2 4


题目：数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
  例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。 
function test(arr) {
···
}
let arr1 = [1,2,1,7,7,7,7,8,7,7], arr2 = [1,2,1,3,3,3,3,8,3,7];
test(arr1) // 7
test(arr2) // 0
