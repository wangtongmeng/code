<details>
   <summary>
   ts 中 extends 和 implements
   </summary>

1.  ts 中 extends 和 implements
    ts 中 extends 可以理解为 es6 class 对应的 extends
    可以实现类的继承 `class Son extends Father {}`
    可以实现和接口的继承

```
interface ISon extends IFather {
  sonValue: number;
}
```

2. implements 理解为实现，A implements B，A 上要有 B 对应的属性和方法
   不能用于两个 interface 之间
   类和类之间
   `class Son implements Father {} // 用于类之间，此时没有继承的效果，而是要求Son上要有定义Father的属性方法`
   类和接口之间：
   `class Son implements IFather {} // 用接口去规范class， 要求Son的属性和方法等要按照IFather接口中定义的来`

</details>

<details>
   <summary>
    TypeScript 相对于 JavaScript 的优势是什么？
   </summary>

增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。
优势:

1. 杜绝手误导致的变量名写错;
2. 类型可以一定程度上充当文档;
3. IDE 自动填充，自动联想;
</details>

<details>
   <summary>
      TypeScript 中如何联合枚举类型的 Key?
   </summary>

```typescript
enum str {
  A,
  B,
  C,
}
type strUnion = keyof typeof str; // 'A' | 'B' | 'C'
```

</details>

<details>
   <summary>
   <a href="https://juejin.cn/post/6844903749501059085">TypeScript 中 type 和 interface 的区别?</a>
   </summary>
虽然类型别名（Type Aliases）和接口（Interfaces）在某些方面可以实现相似的功能，但它们之间存在一些区别。

下面是类型别名和接口之间的主要区别：

1. **语法：** 类型别名使用`type`关键字进行定义，而接口使用`interface`关键字进行定义。

2. **可重用性：** 类型别名可以用于任何类型，包括基本类型、联合类型、交叉类型、函数类型等。它们可以给现有类型创建一个新的名称。接口主要用于定义对象的结构和类型，并且只能用于对象类型。

3. **扩展性：** 接口支持扩展和继承，可以通过`extends`关键字扩展其他接口。类型别名本身不支持扩展或继承其他类型别名或接口。type 可以通过 &实现交叉类型，将多个类型的属性合并到一个类型中；

4. **对象字面量检查：** 当使用接口定义对象时，TypeScript 会进行对象字面量的额外属性检查，即确保对象具有接口定义的所有属性。类型别名不会进行这种额外属性检查。

5. **可读性和可维护性：** 类型别名可以使用任意的名称来提高代码的可读性和可维护性，从而更好地描述类型。接口通常用于描述对象的结构和行为，具有更明确的语义。

6. 多次声明的同名 interface 会进行声明合并，type 则不允许多次声明；

综上所述，类型别名适用于对类型进行重命名或创建更复杂的类型组合，而接口适用于定义对象的结构和行为。

</details>

<details>
   <summary>
      基础类型：
   </summary>

- number string boolean array object undefined void
- enum 枚举
- type interface
- 联合类型 | （联合类型一次只能用一种类型）
- 交叉类型 & （交叉类型每次都是多个类型的合并类型）
- typeof 可以用来获取一个变量声明或者对象的类型
- keyof 获取 key
- in 遍历枚举类型
- extends 用来约束泛型
- Partial<> 将<>中的参数都变成可选项
- Required<> 将<>中的参数都变成必选项

```typescript
// 枚举
enum ActionType {
   Run,
   eat
}

// type
type Action = 'eat' | 'run'
const a:Action = ''; //会报错，只能在上面的两个值中选择一个
interface BaiduResponse{
    name:string;
    height:number;
}
axios.get<BaiduResponse>().then();

// interface接口
interface A{
    name:string;
}
interface B{
    sex:number;
}
function test(a:A|B){
}
test(sex:0, name:'aaa')

// extends拓展
interface ILengthwise{
    length:number
}
function loggingIdentity<T extends ILengthwise>(arg:T):T{
    return arg;
}
loggingIdentity({length:10,value:1})//必须要传这种类型的值

```

</details>

<details>
   <summary>
      111111
   </summary>
</details>

<details>
   <summary>
      111111
   </summary>
</details>

<details>
   <summary>
      111111
   </summary>
</details>

<details>
   <summary>
      111111
   </summary>
</details>

<details>
   <summary>
      111111
   </summary>
</details>

<details>
   <summary>
      111111
   </summary>
</details>

<details>
   <summary>
      111111
   </summary>
</details>

<details>
   <summary>
      111111
   </summary>
</details>
