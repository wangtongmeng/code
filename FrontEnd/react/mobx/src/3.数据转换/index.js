import * as mobx from "mobx";
// 1. toJS() 用于将 ”可观察数据“ 转化为普通 JS 数据类型
const a = mobx.observable(["aaa", "bbb"]);
console.log(a, mobx.toJS(a)); // Proxy    Array(2)
// 2. observable 数据类型判断
const arr = mobx.observable(["aaa", "bbb"]);
const obj = mobx.observable({ a: "aaa" });
const box = mobx.observable.box("string");
const map = mobx.observable.map({ a: "aaa" });
const set = mobx.observable.set(["aaa", "bbb"]);
const computed = mobx.computed(() => arr.join(", "));

console.log("isObservable", mobx.isObservable(arr), mobx.isObservable([]));
console.log(
  "isObservableArray",
  mobx.isObservableArray(arr),
  mobx.isObservableArray(["aaa"])
);
console.log(
  "isObservableObject",
  mobx.isObservableObject(obj),
  mobx.isObservableObject({ a: "aaa" })
);
console.log(
  "isObservableMap",
  mobx.isObservableMap(map),
  mobx.isObservableMap(new Map())
);
console.log(
  "isObservableSet",
  mobx.isObservableSet(set),
  mobx.isObservableSet(new Set())
);
console.log("isBoxedObservable", mobx.isBoxedObservable(box));
console.log("isComputed", mobx.isComputed(computed), mobx.isComputed(obj));

/* 
isObservable true false
isObservableArray true false
isObservableObject true false
isObservableMap true false
isObservableSet true false
isBoxedObservable true
isComputed true false
*/

// 2.1 深层比较两个 observable 数据的值是否相等
const obj3 = mobx.observable({ a: { aa: "aaa" } });
const obj4 = mobx.observable({ a: { aa: "aaa" } });
console.log("comparer", mobx.comparer.structural(obj3, obj4)); // true
//  2.2 可观察的对象，怎么获取 key值
const originObj = { key: "sss" };
const observableObj = mobx.observable({ a: "aaa" });

// 对标原生对象的一些使用，获取 observableObject key数组 value数组等
console.log(mobx.keys(observableObj), Object.keys(originObj)); // ['a'] ['key']
console.log(mobx.values(observableObj), Object.values(originObj)); // ['aaa'] ['sss']
console.log(mobx.entries(observableObj), Object.entries(originObj)); // [Array(2)] [Array(2)]
mobx.autorun(() => {
  // 注意在 set 前 'b' 还不存在，但是这里不会报错,
  console.log(mobx.get(observableObj, "b")); // undefined 后面修改b的值，触发 bbb
});
// 给可观察数据设置值，可以设置没有初始化的key,同样会引起观察者更新
mobx.set(observableObj, "b", "bbb"); // warning derivation.ts:140 [MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. 完了触发autorun
// 判断 observableObject 是否有某个 key
console.log(mobx.has(observableObj, "b")); // true
// 移除 observableObject 的某一项
mobx.remove(observableObj, "a");

{
  /**
    3. 数组，对象、Map、Set 被转换成 observable 后有那些 api 上的变化？
    这些内置对象的基本 Api 都还保留，除了类型判断尽量使用上边 api 外，observable 还追加了一些 api
    */
  console.log(3 + "--------------------");

  // 3.1 数组追加三个方法 clear() replace() remove() 禁用 _.isArray | Array.isArray
  const arr = mobx.observable(["aaa", "bbb"]);
  arr.clear(); // 删除数组中所有当前条目
  console.log(mobx.toJS(arr)); // []
  arr.replace(["kkk"]); // 替换所有现有条目为 ...
  console.log(mobx.toJS(arr)); // ["kkk"]
  const arr2 = mobx.observable([
    { a: "aaa", del: false },
    { b: "bbb", del: true },
  ]);
  arr2.forEach((item) => {
    if (item.del) {
      // 删除指定项目, 返回 boolean 表示是否有指定值被删除
      console.log(arr2.remove(item)); // ture
    }
  });
  console.log(mobx.toJS(arr2)); // [{a: 'aaa', del: false}]
}
// 3.2 Map 追加三个方法 toJSON() merge() replace() 
const map2 = mobx.observable.map({ a: { aa: 'aaa' } });
console.log(map2.toJSON()); // 返回此Map的浅表普通对象表示形式,(没啥用)
console.log(mobx.toJS(map2)); // 返回 ES6 Map
map2.merge({ a: { bb: 'bbb' } }); // 合并 Map 可以传普通对象或者 Map
console.log(mobx.toJS(map2)); // 例中： a 的值会被覆盖
map2.replace({ n: 'nnn' }); // 替换 Map 全部内容
console.log(mobx.toJS(map2));