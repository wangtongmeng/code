// 实现x的n次方，n为整型

function power(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / power(x, -n);

  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(power(2, 3));
console.log(power(2, 2));
console.log(power(2, 1));
console.log(power(2, 0));
console.log(power(2, -2));
console.log(power(2, -3));

// 递归
// function power(x, n) {
//     if (n === 0) return 1; // x 的 0 次方为 1
//     if (n < 0) return 1 / power(x, -n); // 处理负指数的情况

//     if (n % 2 === 0) {
//       let half = power(x, n / 2);
//       return half * half;
//     } else {
//       return x * power(x, n - 1);
//     }
//   }

//   // 示例
//   console.log(power(2, 3)); // 8
//   console.log(power(2, -3)); // 0.125

// . 使用内置 Math.pow 方法
// function power(x, n) {
//     return Math.pow(x, n);
//   }

//   // 示例
//   console.log(power(2, 3)); // 8
//   console.log(power(2, -3)); // 0.125

// 使用 ES6 的箭头函数和三元运算符
// const power = (x, n) =>
//     n === 0 ? 1 :
//     n < 0 ? 1 / power(x, -n) :
//     n % 2 === 0 ? Math.pow(power(x, n / 2), 2) :
//     x * power(x, n - 1);

//   // 示例
//   console.log(power(2, 3)); // 8
//   console.log(power(2, -3)); // 0.125
