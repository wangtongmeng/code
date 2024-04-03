// requestAnimationFrame 是一个用于优化动画效果的 JavaScript 方法。
// 它的作用是告诉浏览器在下一次重绘之前调用指定的回调函数，以保持动画的流畅性并降低性能消耗。

let count = 0;
let prevTimestamp = performance.now();

function loop(timestamp) {
  count++;
  // 间隔超过 1s，将之前计算的 count 输出
  if (timestamp - prevTimestamp >= 1000) {
    console.log(count);
    prevTimestamp = timestamp;
    count = 0;
  }

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
