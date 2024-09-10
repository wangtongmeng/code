function cloneDeep(obj, map = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) return obj;

  // 避免循环引用
  const objFromMap = map.get(obj);
  if (objFromMap) return objFromMap;

  let target;

  if (obj instanceof Date) {
    target = new Date(obj);
    map.set(obj, target);
    return target;
  }

  if (obj instanceof RegExp) {
    target = new RegExp(obj);
    map.set(obj, target);
    return target;
  }

  // Map
  if (obj instanceof Map) {
    target = new Map();
    map.set(obj, target);
    obj.forEach((v, k) => {
      const v1 = cloneDeep(v, map);
      const k1 = cloneDeep(k, map);
      target.set(k1, v1);
    });
    return target;
  }

  // Set
  if (obj instanceof Set) {
    target = new Set();
    map.set(obj, target);
    obj.forEach((v) => {
      const v1 = cloneDeep(v, map);
      target.add(v1);
    });
    return target;
  }

  // Array
  if (Array.isArray(obj)) {
    target = [];
    map.set(obj, target);
    obj.forEach((item, index) => {
      target[index] = cloneDeep(item, map);
    });
    return target;
  }

  // Object
  target = {};
  map.set(obj, target);
  Object.keys(obj).forEach((key) => {
    target[key] = cloneDeep(obj[key], map);
  });

  return target;
}

// Example usage
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
