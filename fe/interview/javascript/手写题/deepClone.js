// 实现深拷贝

const obj1 = {
  age: 20,
  name: "xxx",
  address: {
    city: "beijing",
  },
  arr: ["a", "b", { d: 1 }],
};

// 简版 只考虑数组、对象
// function deepClone(obj = {}) {
//   if (typeof obj !== "object" || obj == null) {
//     return obj;
//   }
//   let result = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = deepClone(obj[key]);
//     }
//   }
//   return result;
// }

// console.log(deepClone(obj1));

function cloneDeep(obj, map = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) return obj;

  // 避免循环引用
  const objFromMap = map.get(obj);
  if (objFromMap) return objFromMap;

  let target = {};
  map.set(obj, target);

  // Map
  if (obj instanceof Map) {
    target = new Map();
    map.set(obj, target);
    obj.forEach((v, k) => {
      const v1 = cloneDeep(v, map);
      const k1 = cloneDeep(k, map);
      target.set(k1, v1);
    });
  }

  // Set
  if (obj instanceof Set) {
    target = new Set();
    map.set(obj, target);
    obj.forEach((v) => {
      const v1 = cloneDeep(v, map);
      target.add(v1);
    });
  }

  // Array
  if (obj instanceof Array) {
    target = obj.map((item) => cloneDeep(item, map));
    map.set(obj, target);
  }

  // Object
  for (const key in obj) {
    const val = obj[key];
    const val1 = cloneDeep(val, map);
    target[key] = val1;
  }

  return target;
}

const a = {
  set: new Set([10, 20, 30]),
  map: new Map([
    ["x", 10],
    ["y", 20],
  ]),
  info: {
    city: "北京",
  },
  fn: () => {
    console.info(100);
  },
};
a.self = a;
console.log(cloneDeep(a));

const m = new Map();
m.set("x", m);

const m1 = cloneDeep(m);
console.log("m1", m1.get("x"));
