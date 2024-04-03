// 深拷贝考察递归相关的
// hasOwnProperty() 方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。


// 1.简易深拷贝
function deepClone(obj) {
  // 检查是否为基本数据类型
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const res = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key]);
    }
  }

  return res;
}



// 2.相对完善版
//使用Map函数
function deepCopy(obj,map = new Map()){
  if (typeof obj != 'object') return 
  var newObj = Array.isArray(obj)?[]:{}
  if(map.get(obj)){ 
    return map.get(obj); 
  } 
  map.set(obj,newObj);
  for(var key in obj){
      if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] == 'object') {
              newObj[key] = deepCopy(obj[key],map);
          } else {
              newObj[key] = obj[key];
          }
      }
  }
  return newObj;
}




// WeakMap 是一种特殊类型的集合，它允许将对象作为键存储和检索对应的值。与 Map 不同，WeakMap 中的键只能是对象，并且键对象是弱引用的，这意味着如果键对象没有其他引用，它将被垃圾回收。
function deepClone(target, hash = new WeakMap()) {
  if (typeof target !== 'object' || target === null) {
      throw new Error('sdfasdf');
  }
  if (hash.has(target)) {
      return hash.get(target);
  }
  // 开始
  let newData;
  if (Array.isArray(target)) {
      newData = [...target];
  } else if (target instanceof Set) {
      newData = new Set([...target]);
  } else if (target instanceof Map) {
      newData = new Map([...target]);
  } else if (target instanceof RegExp) {
      newData = new RegExp(target.source, target.flags);
  } else if (target instanceof Function) {
      newData = function() {
          target.apply(this, arguments);
      }
  } else if (Object.prototype.toString.call(target) = '[object Object]') {
      hash.set(target, target);
      newData = {};
      const keys = Object.keys(target);
      keys.forEach(key => {
          newData[key] = deepClone(target[key]);
      });
  }
  return newData;
}
