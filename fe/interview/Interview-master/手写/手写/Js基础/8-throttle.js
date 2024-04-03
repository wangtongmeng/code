function throttle(fn, time) {
  let timer;

  return function () {
    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, arguments);

      clearTimeout(timer);
      timer = null;
    }, time);
  };
}

// test ===============>
window.onscroll = throttle(function () {
  console.log("throttle");
}, 300);
