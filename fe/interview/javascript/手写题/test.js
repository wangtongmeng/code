function cloneDeep(obj, map = new WeakMap()) {
  if (obj !== null && typeof obj === "object") {
    return obj;
  }

  const objFromMap = map.get(obj);
  if (objFromMap) {
    return objFromMap;
  }

  let target = {}; // 占位
  map.set(obj, target);

  if (obj instanceof Map) {
    target = new Map();
    obj.forEach((v, k) => {
      let v1 = cloneDeep(v, map);
      let k1 = cloneDeep(k, map);
      target.set(k1, v1);
    });
    map.set(obj, target);
  }

  if (obj instanceof Set) {
    target = new Set();
    obj.forEach((v) => {
      target.add(cloneDeep(v));
    });
    map.set(obj, target);
  }

  if (obj instanceof Array) {
    target = [];
    target = obj.map((item) => cloneDeep(item));
    map.set(obj, target);
  }

  if (obj instanceof Object) {
    target = {};
    for (let key in obj) {
      target[key] = cloneDeep(obj[key]);
    }
    map.set(obj, target);
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
