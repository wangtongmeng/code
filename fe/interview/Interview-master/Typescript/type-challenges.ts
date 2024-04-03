namespace myPick {
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  // 实现MyPick 
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  }
}


// =====================

namespace myReadonly {
  interface Todo {
    title: string
    description: string
  }

  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
}

// ==========================

namespace tupleToObject {
  // The "as const" keyword is used to ensure that the tuple's values are read-only and cannot be modified.
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type TupleToObject<T extends readonly string[]> = {
    [P in T[number]]: P
  }

  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
}

// ========================

namespace firstElement {
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
  // answer2
  // type First<T extends any[]> = T extends [] ? never : T[0] 

  type head1 = First<arr1> // 应推导出 'a'
  type head2 = First<arr2> // 应推导出 3
}

// ========================

namespace arrayLength {
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type Length<T extends any[]> = T['length']

  type teslaLength = Length<tesla> // expected 4
  type spaceXLength = Length<spaceX> // expected 5
}

// ========================
// ? extends这里的作用不是很清晰
namespace myExclude {
  type MyExclude<T, U> = T extends U ? never : T
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
}

// ========================
namespace awaited {
  // 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
  // 在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

  type UnboxPromise<T> = T extends Promise<infer U> ? U : T;

  // 使用示例
  type Unboxed = UnboxPromise<Promise<string>>;
  // 这里的 Unboxed 将推断为 string

}

// ========================

namespace getTulpeType {
  type ElementType<T> = T extends (infer U)[] ? U : never;

  // 使用示例
  type TupleElement = ElementType<[number, string, boolean]>;
  // 这里的 TupleElement 将推断为 number | string | boolean

}

// ========================
namespace exg {
  // 获取value构成的联合类型
  interface TTest { a: number, b: string, c: boolean, d: string }
  type TTest2 = TTest[keyof TTest]

  type PickProperties<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
  type P1 = PickProperties<{ a: number, b: string, c: boolean }, string | number>; // "a" | "b"
}

