declare const a: number;
declare function sum(a: string, b: string): string;
declare class Person {}
declare interface Person {
  a: string;
}
declare type Person2 = { a: number };

// declare 1
interface JQuery {
  height(num: number): this;
  width(num: number): this;
  extend(obj: object): this;
}
declare const $: {
  (selector: string): JQuery;
  ajax(url: string, options: Record<string, any>): void;
  fn: JQuery;
};

// 模块的声明，特定模块
declare module "mitt" {
  type Type = string;
  type Listener = (...args: any[]) => void;
  const on: (type: Type, listener: Listener) => void;
  const off: (type: Type, listener: Listener) => void;
  const emit: (type: Type, listener: Listener) => void;
  // 可以自己选择哪些导出
  // export { Type, Listener };
}

// 以.vue结尾的模块
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const comp: DefineComponent;
  export default comp;
}

declare module "*.jpg" {
  const str: string;
  export default str;
}

declare module "*.css" {
  const str: string;
  export default str;
}

declare interface String {
  my(prefix: string): this;
}

declare interface Window {
  store: object;
}
