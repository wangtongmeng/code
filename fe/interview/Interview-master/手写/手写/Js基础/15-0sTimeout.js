// setTimeout 为什么最小只能设置 4ms，如何实现一个 0ms 的 setTimeout
// 利用发布订阅、postMessage

let timeouts = [];
const messageName = "zero-timeout";

function setTimeoutZero(fn) {
  timeouts.push(fn);
  window.postMessage(messageName, "*");
}

function handleMessage(evt) {
  if (evt.source === window && evt.data === messageName) {
    if (timeouts.length > 0) {
      const f = timeouts.shift();
      f();
    }
  }
}

window.addEventListener("message", handleMessage);
setTimeoutZero(() => {
  console.log(666666);
});
