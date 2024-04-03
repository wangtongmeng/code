##### 0、[闭包(文章)](https://juejin.cn/post/6937469222251560990)

什么是闭包？就是一个 function 里面 return 了一个子函数，子函数访问了外面那个函数的变量。
闭包是如何产生的？当前作用域产产生了对父作用域的引用。

一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

```
for (var i = 0; i < 5; i++) {

    (function(n) {
        setTimeout(() => {
            console.log(n);
        });
    })(i)
}
```

```
for (var i = 0; i < 5; i++) {
  setTimeout((function(i) {
    return function() {
        console.log(i);
    }
  })(i), i * 1000);
}
```

##### 1、怎么判断一个对象是不是对象

<details>
  <summary>instanceof</summary>
  <pre><code>
a instanceof A 判断a是不是A创建的实例或A的祖先创建的实例
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
假定o是对象实例、c是构造函数： 如果o继承自c.prototype，则o instanceof c的值为true。这里的继承可以是直接继承，也可以是间接继承.
let array = new Array()
array instanceof Array // true
array instanceof Object // true

instanceof 的缺陷

多窗体中（比如嵌套了 iframe），每一个窗体有独立的上下文，在一个 iframe 中的 Array 实例，在父窗口中使用 instanceof Array 的结果是 false，因为两者上下文独立，两个 Array 是相互独立的。（解释一，同源的 iframe 是可以通过 dom 访问到的，能够拿到 iframe 里面的对象，当要处理跨文档的类型判断时，instanceof 就会出现问题）

只能判断某一个实例是不是某一个构造函数的实例，不能取到具体的类型。如果我要拿到 obj 的类型字符串例如'object'，instanceof 就无能为力了。
</code></pre>

</details>

<details>
  <summary>typeof</summary>
  <pre><code>
typeof 操作符返回一个字符串，表示未经计算的操作数的类型。
typeof undefined       'undefined'
typeof null               'object'
typeof true               'boolean'
typeof 123               'number'
typeof "abc"           'string'
typeof function() {}   'function'
typeof {}               'object'
typeof []               'object'
typeof的缺陷
typeof主要为了区分对象类型和原生类型，所以只能用于判断一个变量是不是对象或者是不是字符串等。涉及到对象的具体细节，比如这个对象是哪个构造函数的实例，typeof就无能为力了。
  </code></pre>
</details>

<details>
  <summary>Object.prototype.toString.call</summary>
  <pre><code>
console.log(Object.prototype.toString.call(new Date)) // [object Date]
console.log(Object.prototype.toString.call(JSON)) // [object JSON]
console.log(Object.prototype.toString.call(Math)) // [object Math]
console.log(Object.prototype.toString.call(new f)) // [object Object]
console.log(Object.prototype.toString.call(f)) // [object Function]
console.log(Object.prototype.toString.call([])) // [object Array]
对于大部分的内置类型，我们都可以通过Object.prototype.toString获取到类型字符串。
但是我们不能通过获取到自定义构造函数的具体的类型，在上例中，我们获取new f的类型字符串，返回的是[object Object]。解决这个问题，一种方式是重写f.prototype.toString，让其返回[object f]。但是当我们的toString另有他用的时候（参考Date的toString），这种方式就行不通了，而且每个新的构造函数都要重写toString，很麻烦。
  </code></pre>
</details>

##### 2、for of 能遍历对象吗？面试并没有人问过

[但我居然不知](https://www.cnblogs.com/rogerwu/p/10738776.html)

##### 3、Object.create（）

<details>
  <summary>Object.create()怎么用</summary>
  <pre><code>
方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

// 关键就是 me.\_ _proto_ \_ === person;
const me = Object.create(person);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction();
</code></pre>

</details>

##### 4、实现 Object.create（）

<details>
  <summary>手写Object.create()</summary>
  <pre><code>
function  myCreate(target) {
    function  F() {}
    F.prototype = target;
    return new F();
}
  </code></pre>
</details>

##### 5、[关于 this 极其指向的面试题，包括箭头函数](https://juejin.cn/post/6844904083707396109)

<details>
  <summary>一道经典的this题</summary>
普通函数的this就看是谁调用了这个函数！！！<br>
对于obj.foo1()函数的调用，它的外层作用域是window，对象obj当然不属于作用域了(我们知道作用域只有全局作用域window和局部作用域函数)。所以会打印出window<br>
obj.foo2()()，首先会执行obj.foo2()，这不是个箭头函数，所以它里面的this是调用它的obj对象，因此打印出obj，而返回的匿名函数是一个箭头函数，它的this由外层作用域决定，那也就是函数foo2咯，那也就是它的this会和foo2函数里的this一样，就也打印出了obj。
  <pre><code>
var obj = {
  name: 'obj',
  foo1: () => {
    console.log(this.name)
  },
  foo2: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var name = 'window'
obj.foo1()
obj.foo2()()
  </code></pre>
</details>
<details>
  <summary>箭头函数this总结</summary>
它里面的this是由外层作用域来决定的，且指向函数定义时的this而非执行时<br>
字面量创建的对象，作用域是window，如果里面有箭头函数属性的话，this指向的是window<br>
构造函数创建的对象，作用域是可以理解为是这个构造函数，且这个构造函数的this是指向新建的对象的，因此this指向这个对象。<br>
箭头函数的this是无法通过bind、call、apply来直接修改，但是可以通过改变作用域中this的指向来间接修改。
</details>

</details>

##### 6、Map 和 object 的区别

<details>
  <summary>Map和object的区别</summary>
1、Map实现了迭代器，可用for...of遍历，而Object不行。<br>
2、Map可以直接拿到长度，而Object不行。 m.size<br>
3、填入Map的元素，会保持原有的顺序，而Object无法做到。<br>
4、Map可以使用省略号语法展开，而Object不行。<br>
let m = new Map()<br>
m.set({a:1}, 'hello,world')//dom对象作为键<br>
m.set(['username'],'jack')//数组作为键<br>
m.set(true,1)//boolean类型作为键<br>

console.log([...m])//可以展开为二维数组

</details>
##### 7、commonJS 和es6的module的区别

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用；
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- 因为两个模块加载机制的不同，所以在对待循环加载的时候，它们会有不同的表现。CommonJS 遇到循环依赖的时候，只会输出已经执行的部分，后续的输出或者变化，是不会影响已经输出的变量。而 ES6 模块相反，使用 import 加载一个变量，变量不会被缓存，真正取值的时候就能取到最终的值；
- 因为 CommonJS 的 require 语法是同步的，所以就导致了 CommonJS 模块规范只适合用在服务端，而 ES6 模块无论是在浏览器端还是服务端都是可以使用的，但是在服务端中，还需要遵循一些特殊的规则才能使用 ；

##### 8、箭头函数和普通函数什么区别

- 箭头函数是匿名函数，不能作为构造函数，不能使用 new
- 箭头函数不绑定 arguments
- 箭头函数不绑定 this，会捕获其所在的上下文的 this 值，作为自己的 this 值
- 箭头函数通过 call() 或 apply() 方法调用一个函数时，只传入了一个参数，对 this 并没有影响
- 箭头函数没有 prototype

##### 9、Object.assign()

<details>
  <summary>Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。</summary>
<pre><code>
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

深拷贝问题
针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是（可枚举第一层）属性值.
假如源值是一个对象的引用，它仅仅会复制其引用值。
</code></pre>

</details>

##### 10、为什么 await 后面的代码会进入到 promise 队列中的微任务？

<details>
  <summary>async/await 只是操作 promise 的语法糖，最后的本质还是promise。这么理解的话，async里的普通语句和普通函数是一样的。
  举一个小栗子：</summary>
  <pre><code>
async function async1() { 
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
// 上面的代码等价于 ==>
async function async1() {
    console.log('async1 start');
    Promise.resolve(async2()).then(() => {
        console.log('async1 end')
    })
}
  </code></pre>
</details>

##### 11、判断数组的方式

- Object.prototype.toString.call(a)
- Array.isArray(a)
- a instanceof Array
- a.\_\_proto.\_\_ === Array.prototype

##### 12、遍历一个对象中所有属性有哪些方法

- for (let key in obj)
- const keys = Object.keys(obj);方法返回一个包含对象自身可枚举属性的数组。然后可以使用
- const propertyNames = Object.getOwnPropertyNames(obj);方法返回一个包含对象自身所有属性（包括不可枚举属性）的数组。面的
- const keys = Reflect.ownKeys(obj);方法返回一个包含对象自身所有属性（包括可枚举和不可枚举属性）的数组。
- const entries = Object.entries(obj);方法返回一个包含对象自身可枚举属性的 `[key, value]` 数组的二维数组。

<details>
  <summary>13、requestIdleCallback 和 requestAnimationFrame区别</summary>

requestIdleCallback

- requestIdleCallback 是一个兼容性不那么好的功能，所以我们使用前得判断它是否支持
- 我们可以使用 window.requestIdleCallback() 方法来插入一个函数，这个函数将在浏览器空闲时被调用；requestIdleCallback
- 它的参数为 callback 和 可选的 timeout；如果指定了 timeout 且为正值；则回调在 timeout 毫秒后还没调用时，回调任务就会被放入事件循环里排队，这样做可能会影响性能；
- 因为它发生在一帧的最后，此时页面布局已经完成，所以不建议在 requestIdleCallback 里再操作 DOM，这样会导致页面再次重绘。

requestAnimationFrame

- window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
- 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

</details>

<details>
  <summary>14、let var const 有什么区别</summary>

`let`, `var`, 和 `const` 是 JavaScript 中用于声明变量的关键字，它们有一些区别。

1. **作用域：**

- `var`: 使用 `var` 声明的变量具有函数作用域或全局作用域。在函数内部声明的 `var` 变量在整个函数内部都是可见的，而在函数外部是不可见的。在全局范围内声明的 `var` 变量则在整个代码文件中都是可见的。

- `let` 和 `const`: 使用 `let` 和 `const` 声明的变量具有块级作用域。块级作用域是指在 `if` 语句、循环语句、函数内部等花括号 `{}` 内部声明的变量只在该块级作用域内可见，出了这个范围就不可访问。这个特性使得 `let` 和 `const` 更加灵活和可控。

2. **变量提升：**

- `var`: 使用 `var` 声明的变量存在变量提升。这意味着在变量声明之前就可以访问变量，但其值为 `undefined`。变量的实际赋值操作会在代码中的声明语句处执行。

- `let` 和 `const`: 使用 `let` 和 `const` 声明的变量不存在变量提升。在声明之前访问变量会导致引用错误（ReferenceError）。

3. **重复声明：**

- `var`: 允许重复声明同一个变量，而后续的声明会覆盖之前的声明。

- `let` 和 `const`: 不允许在同一个作用域内重复声明同一个变量。如果在同一作用域内再次声明已存在的变量，将会抛出语法错误（SyntaxError）。

4. **可变性：**

- `var` 和 `let`: 声明的变量可以重新赋值。

- `const`: 声明的变量是常量，一旦赋值后就不能再修改。如果尝试修改 `const` 声明的变量，会抛出错误（TypeError）。

综上所述，`let` 和 `const` 是 ES6 新增的关键字，引入了块级作用域，具有更好的作用域控制和变量声明的规范性。推荐在大多数情况下使用 `let` 和 `const`，只有在特定的情况下需要使用 `var`，比如需要兼容旧版本的 JavaScript 环境。另外，对于不会被修改的变量，应该使用 `const` 来声明，以增加代码的可读性和可维护性。

</details>

<details>
  <summary>15、Es6 symbol</summary>

ES6 中的 Symbol 是一种新的原始数据类型，用于创建唯一的、不可变的标识符。Symbol 的值可以用作对象的属性键，提供一种保证属性名不冲突的机制。

Symbol 的创建方式是通过调用全局 Symbol 函数，并可选地传入一个描述符作为参数。每个通过 Symbol 函数创建的 Symbol 值都是唯一的，即使描述符相同也不相等。

下面是创建 Symbol 的示例：

```javascript
const sym1 = Symbol();
const sym2 = Symbol("description");

console.log(typeof sym1); // "symbol"
console.log(sym1 !== sym2); // true
```

Symbol 值可以用作对象的属性键，通过使用方括号或点符号进行访问：

```javascript
const obj = {};

const sym = Symbol("key");
obj[sym] = "value";
 
console.log(obj[sym]); // "value"
```

使用 Symbol 作为属性键时，这些属性是无法通过常规的遍历方法（如 `for...in` 循环）访问的，这是因为 Symbol 属性不属于常规的可枚举属性。为了访问 Symbol 属性，可以使用 `Object.getOwnPropertySymbols` 或 `Reflect.ownKeys` 方法。

Symbol 还有一些内置的预定义值，称为 Symbol 值的内置属性，用于表示对象的内部行为和特性。例如：

- `Symbol.iterator`：表示对象是否可迭代。
- `Symbol.toStringTag`：用于自定义对象的 `toString()` 方法的标签。
- `Symbol.hasInstance`：用于确定对象是否为特定构造函数的实例。

Symbol 的主要用途是创建唯一的属性键，用于解决属性名冲突的问题。它在一些特定的 JavaScript 内部机制中也有应用，例如在实现迭代器和自定义对象行为时。

</details>

<details>
  <summary>16、Babel原理</summary>

Babel 是一个广泛使用的 JavaScript 编译器，它主要用于将新版本的 JavaScript 代码转换为向后兼容的旧版本 JavaScript 代码，以便在不支持新特性的浏览器或环境中运行。

1. 解析（Parsing）：Babel 首先使用解析器将输入的源代码解析为抽象语法树（AST）。AST 是源代码的结构化表示，它将代码分解为一系列的节点，每个节点代表代码的不同部分，如函数、变量、表达式等。

2. 转换（Transformation）：在转换阶段，Babel 使用一系列的插件或转换规则来操作 AST 并对其进行修改。这些插件可以添加、修改或删除 AST 中的节点，实现对代码的转换。例如，一个转换规则可以将箭头函数转换为普通函数，或者将新的语法特性转换为等效的旧版本代码。

3. 生成（Code Generation）：在生成阶段，Babel 使用代码生成器将修改后的 AST 转换回可执行的 JavaScript 代码。代码生成器遍历修改后的 AST，并根据每个节点生成相应的代码字符串。

Babel 还提供了插件系统，允许开发者根据自己的需求自定义转换规则或使用第三方插件来处理特定的转换。通过配置 Babel 和选择适当的插件，开发者可以根据目标环境或项目需求进行定制化的转换。

总结起来，Babel 的工作原理是通过解析源代码生成 AST，然后使用插件基于 AST 进行转换，最后再将修改后的 AST 重新生成为转换后的 JavaScript 代码。这个过程使得开发者可以使用最新的 JavaScript 特性，同时保持代码的向后兼容性。

</details>

<details>
  <summary>16、Babel parsing过程</summary>

在 Babel 的 Parsing 过程中，源代码被解析为抽象语法树（AST），这是实现语义分析和代码转换的关键步骤。下面是 Parsing 过程的主要步骤：

1. 词法分析（Lexical Analysis）：在词法分析阶段，Babel 的解析器将源代码作为输入，并将其分解为一个个的词法单元（tokens）。词法单元可以是关键字、标识符、运算符、分隔符、字符串等。这个过程涉及到扫描源代码字符流，并根据语法规则识别和构建词法单元。词法分析过程通常使用正则表达式来进行匹配和识别词法单元。

2. 语法分析（Syntactic Analysis）：在语法分析阶段，词法单元被组织成一个抽象语法树（AST）。语法分析器使用词法单元流作为输入，并根据语法规则构建一个层次结构的 AST。这个过程涉及到应用语法规则、解析上下文和构建 AST 节点的过程。

3. AST 构建（AST Construction）：在 AST 构建阶段，Babel 的解析器将词法单元转换为 AST 的节点。每个节点代表代码中的一个特定部分，如函数、变量、表达式等。Babel 解析器根据语法规则和节点类型构建 AST，确保 AST 的结构正确反映源代码的语义。

Babel 使用了一个称为 "babylon" 的解析器作为其默认解析器，它实现了 ECMAScript 2015+ 版本的语法规范。该解析器可以处理最新版本的 JavaScript 语法，包括箭头函数、模板字符串、解构赋值等。此外，Babel 还支持插件系统，允许开发者根据需要选择其他解析器或自定义解析规则。

通过 Parsing 过程，Babel 能够将源代码转换为 AST，为后续的代码转换和生成阶段提供了基础。

</details>
