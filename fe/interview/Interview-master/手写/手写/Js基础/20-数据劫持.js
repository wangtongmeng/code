// 双向绑定

// defineProperty 版本

// 数据
const data = {
  text: "default",
};

const input = document.getElementById("input");
const span = document.getElementById("span");
// 数据劫持
Object.defineProperty(data, "text", {
  // 数据变化 --> 修改视图
  set(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  },
});

// 视图更改 --> 数据变化
input.addEventListener("keyup", function (e) {
  data.text = e.target.value;
});

// proxy 版本=========>

// 数据
const data = {
  text: "default",
};

const input = document.getElementById("input");
const span = document.getElementById("span");

// 数据劫持
const handler = {
  set(target, key, value) {
    target[key] = value;
    // 数据变化 --> 修改视图
    input.value = value;
    span.innerHTML = value;
    return value;
  },
};
const proxy = new Proxy(data, handler);

// 视图更改 --> 数据变化
input.addEventListener("keyup", function (e) {
  proxy.text = e.target.value;
});
