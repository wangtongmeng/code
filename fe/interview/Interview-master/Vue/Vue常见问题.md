<details>
  <summary>1、为什么 data 是个函数</summary>

http://gaocarri.top/post/vue%E5%85%B3%E4%BA%8Edata%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0%E8%BF%99%E4%BB%B6%E4%BA%8B/
怕重复创建实例造成多实例共享一个数据对象。
官方已经解释了，一个 vue 组件就是一个 vue 实例。

在 JS 当中实例是通过构造函数来创建的，每个构造函数可以 new 出很多个实例，那么每个实例都会继承原型上的方法或属性。

vue 的 data 数据其实是 vue 组件原型上的属性，数据存在于内存当中

vue 组件为了保证每个实例上的 data 数据的独立性，规定了必须使用函数，而不是对象。

因为使用对象的话，每个实例（组件）上使用的 data 数据是相互影响的，这当然就不是我们想要的了。对象是对于内存地址的引用，直接定义个对象的话组件之间都会使用这个对象，这样会造成组件之间数据相互影响。
使用函数后，使用的是 data()函数，data()函数中的 this 指向的是当前实例本身

</details>

<details>
  <summary>2、双向绑定的原理</summary>

Vue.js 的双向绑定原理是通过其核心特性之一——Vue 响应式系统来实现的。下面是 Vue 双向绑定的基本原理：

1. 数据劫持：Vue 通过使用 Object.defineProperty()方法来劫持（或监听）数据对象的属性。当一个 Vue 实例被创建时，它会遍历数据对象的所有属性，并使用 Object.defineProperty()将它们转换为 getter 和 setter。这样，当属性值被读取或修改时，Vue 能够捕获到并做出相应的响应。

2. Getter 和 Setter：在数据劫持过程中，Vue 为每个属性创建了一个 getter 和 setter。当属性被读取时，getter 会被触发，而当属性被修改时，setter 会被触发。在 setter 中，Vue 能够执行一些额外的操作，例如更新视图、通知相关依赖等。

3. 依赖追踪：Vue 在内部维护了一个依赖追踪系统，用于跟踪属性与视图之间的依赖关系。当模板中的表达式依赖于响应式数据时，Vue 会建立起这种依赖关系。这样，当响应式数据发生变化时，Vue 能够精确地知道哪些依赖需要被更新，从而更新相应的视图。

4. 发布-订阅模式：Vue 使用发布-订阅模式来实现依赖的更新通知。每个响应式属性都有一个对应的依赖收集器（Dep），它维护了所有依赖于该属性的 Watcher 对象。当属性发生变化时，它会通知依赖收集器，然后依赖收集器会遍历所有的 Watcher 对象，并通知它们进行更新。

5. Watcher：Watcher 是一个观察者对象，它订阅了一个或多个响应式属性的变化。当属性变化时，Watcher 会接收到通知，并执行相应的更新操作，例如重新渲染视图。每个组件实例都有一个或多个 Watcher 对象与之关联，用于监听组件所依赖的响应式数据的变化。

通过上述原理，Vue 实现了双向绑定。当数据发生变化时，视图会自动更新；同时，当用户与视图进行交互，修改了视图上的数据时，数据对象中对应的属性也会相应地进行更新。这种双向的数据绑定使得开发者能够更方便地处理数据和视图之间的同步，提高了开发效率和用户体验。

</details>

<details>
  <summary>3、Object.defineProperty有什么缺点</summary>

Vue2 中使用`Object.defineProperty`来实现数据劫持，虽然这种方式在一定程度上实现了双向绑定，但也存在一些缺点：

1. 无法监听数组变化：`Object.defineProperty`只能监听对象属性的变化，而无法直接监听数组的变化。当直接修改数组的某个元素或调用数组的变异方法（如 push、pop、splice 等）时，Vue 无法自动捕获到变化。为了解决这个问题，Vue2 通过重写数组的原型方法来实现对数组的监听，但这也导致了一些性能上的开销。

2. 初始化时的递归遍历：Vue 在初始化时需要对数据对象进行递归遍历，将对象的所有属性转换为 getter 和 setter。这个过程对于大型的数据对象来说，可能会比较耗时，影响页面的初始加载性能。

3. 对象新增或删除属性的监听问题：`Object.defineProperty`只能对已存在的属性进行监听，对于新增或删除的属性，Vue 无法直接监听。为了解决这个问题，Vue 提供了`Vue.set`或`this.$set`方法来手动添加响应式属性，以确保其能够被监听到。

4. 无法监听深层嵌套的属性变化：`Object.defineProperty`只能监听对象属性的改变，而无法深度递归地监听嵌套对象内部属性的变化。对于嵌套层级较深的数据对象，需要通过递归或使用深度监听工具进行处理。

5. 性能问题：由于`Object.defineProperty`是直接在属性上添加 getter 和 setter，因此在访问或修改属性时会有一定的性能开销。特别是在大规模数据或频繁操作的情况下，可能会对性能产生一定的影响。

需要注意的是，Vue2 中的`Object.defineProperty`是一种妥协的解决方案，它在实现双向绑定的同时也存在一些局限性和性能问题。为了解决这些问题，Vue3 采用了基于 Proxy 的响应式系统，提供了更好的性能和更广泛的功能。

</details>

<details>
  <summary>4、Vue3使用proxy的提升有哪些</summary>

Vue3 采用基于 Proxy 的响应式系统，相比 Vue2 中使用的 Object.defineProperty，带来了一些优势：

1. 更强大的响应能力：Proxy 相比 Object.defineProperty 具有更强大的拦截和反射能力。通过 Proxy，可以对整个对象进行代理，而不仅仅是对象的属性。这意味着在 Vue3 中可以实现对对象、数组、Map、Set 等各种数据结构的监听和拦截，实现更全面的响应式能力。

2. 可直接监听数组变化：Vue3 的 Proxy 响应式系统可以直接监听数组的变化，无需通过重写原型方法来实现。当修改数组的元素、调用数组的变异方法或者使用扩展运算符等操作时，Proxy 能够捕获并触发相应的更新。

3. 更好的性能：由于 Proxy 是在目标对象上建立代理，并且可以对整个对象或数组进行监听，相比 Vue2 中的递归遍历，Proxy 可以更高效地捕获到属性的访问和修改。这在初始化时和大规模数据操作时能够带来更好的性能。

4. 解决新增和删除属性的监听问题：Proxy 可以捕获到对象的新增和删除操作，而不像 Vue2 中的 Object.defineProperty 只能监听已存在的属性。这意味着在 Vue3 中，无论是初始化时还是运行时，新增或删除的属性都能够被响应式系统监听到。

5. 深层嵌套属性的监听：Proxy 可以递归地对对象进行代理，因此可以轻松地实现对深层嵌套属性的监听。无论是对象内部的属性还是嵌套对象的属性，都能够被 Proxy 捕获到并触发更新。

6. 更好的 TypeScript 支持：Proxy 提供了更好的 TypeScript 类型推断，能够更准确地推断对象的类型和属性。这使得在使用 Vue3 时，结合 TypeScript 进行开发更加友好和可靠。

总的来说，Vue3 的基于 Proxy 的响应式系统在功能和性能上都相对于 Vue2 的 Object.defineProperty 有所改进，使得 Vue3 能够更好地处理各种复杂的数据结构和场景，提供更强大和灵活的响应式能力。

</details>

<details>
  <summary>4、Computed和Watch的区别</summary>

Vue 中的 Computed 和 Watch 都是用于响应式地监听数据变化并执行相应操作的功能，但它们在使用方式和适用场景上有一些区别：

Computed（计算属性）：

1. 定义方式：Computed 是通过在 Vue 组件中定义一个计算属性来实现的，可以使用`computed`选项或在组件中定义以`get`和`set`方法组成的计算属性。
2. 实时响应：Computed 会根据其依赖的响应式数据进行缓存，只有依赖的数据发生变化时，才会重新计算 Computed 的值。在多个地方多次使用相同的 Computed 属性时，只会计算一次，提高了性能。
3. Getter 和 Setter：Computed 属性可以定义 getter（获取属性值）和 setter（设置属性值），当对 Computed 属性进行赋值时，会触发 setter 函数，从而影响其他相关的响应式数据。
4. 使用场景：适用于需要根据已有的数据计算得出的衍生数据，例如对列表数据进行筛选、对时间进行格式化等。

Watch（侦听器）：

1. 定义方式：Watch 是通过在 Vue 组件中定义一个侦听器来实现的，可以使用`watch`选项或在组件中定义以属性名为键、值为处理函数的 watch 对象。
2. 实时响应：Watch 会监听指定的响应式数据的变化，并在数据变化时执行相应的操作。每当被侦听的数据发生变化时，都会触发处理函数。
3. 监听方式：Watch 可以监听单个数据、对象的属性或嵌套数据的变化，也可以监听多个数据或深度嵌套数据的变化。
4. 异步操作：Watch 的处理函数可以是异步的，可以进行异步操作，例如发送网络请求或执行耗时任务。
5. 使用场景：适用于需要在数据变化时执行异步或复杂操作的场景，例如监听输入框的输入变化并发送网络请求、监听数据的深层嵌套属性变化等。

总的来说，Computed 适用于基于已有数据计算衍生数据的场景，可以使用 getter 和 setter 来对计算属性进行读取和修改。而 Watch 适用于监听数据变化并执行相应的操作，尤其适用于需要进行异步操作或监听深层嵌套数据变化的情况。在实际使用中，根据具体需求选择 Computed 或 Watch 可以更好地管理和响应数据变化。

</details>

<details>
  <summary>5、slot</summary>

slot 又名插槽，是 vue 的内容分发机制，组件内部的模板引擎使用 slot 元素作为承载分发内容的出口。插槽 slot 是豆子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。slot 又分三类，默认插槽，具名插槽和作用域插槽。

- 默认插槽：又名匿名插槽，当 slot 没有指定 name 属性值的时候一个默认显示插槽，一个组件内只有有一个匿名插槽。
- 具名插槽：带有具体名宇的插槽，也就是带有 name 属性的 slot，一个组件可以出现多个具名插槽。
- 作用域插槽：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据
决定如何渲染该插槽。
</details>

<details>
  <summary>6、Vue $nextTick原理及作用</summary>

$nextTick 是 Vue 实例和组件中的一个方法，它的作用是在下次 DOM 更新循环结束之后执行一段回调函数或者操作。它的原理和作用如下：

原理：

当 Vue 更新 DOM 时，它会进行异步渲染。即使在 Vue 实例或组件中修改了数据，DOM 并不会立即更新，而是在下一个 DOM 更新循环时才会进行更新。
在 Vue 异步更新 DOM 的过程中，如果想要在 DOM 更新后执行一些操作（例如操作更新后的 DOM 元素），直接在修改数据后立即执行操作可能会导致操作的时机不准确，因为 DOM 可能还没有更新。
$nextTick 方法的原理就是利用 Vue 的异步更新机制，在 DOM 更新完成后执行回调函数或操作。

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

作用：

在 Vue 中，当需要在数据修改后对 DOM 进行操作时，使用$nextTick可以确保操作在DOM更新后执行，避免操作时机不准确的问题。
例如，当修改数据后需要获取更新后的DOM元素的尺寸、位置等信息时，可以将获取DOM元素的操作放在$nextTick 的回调函数中，以确保操作在 DOM 更新后执行。

</details>

<details>
  <summary>7、keep-alive原理</summary>
  <a href="https://www.yuque.com/cuggz/interview/hswu8g#fc2237b593d0e795a2ebbf2dc3cb0904">
  参考此文章
  </a>
</details>

<details>
  <summary>8、Vue template到render的过程</summary>

  <a href="https://www.yuque.com/cuggz/interview/hswu8g#fc2237b593d0e795a2ebbf2dc3cb0904">
  参考此文章
  </a>

</details>

<details>
  <summary>9、keep-alive原理</summary>
    <a href="https://www.yuque.com/cuggz/interview/hswu8g#fc2237b593d0e795a2ebbf2dc3cb0904">
  参考此文章
  </a>
</details>

<details>
  <summary>10、Vue是如何收集依赖的</summary>
      <a href="https://www.yuque.com/cuggz/interview/hswu8g#fc2237b593d0e795a2ebbf2dc3cb0904">
  参考此文章
  </a>
</details>

<details>
  <summary>11、Vue中data的值发生变化，视图会立即更新重新渲染吗</summary>
  在Vue中，当`data`的值发生变化时，视图会在下一个事件循环中异步更新并重新渲染。Vue使用了一种称为"响应式"的机制来实现这个行为。

当`data`中的某个属性被修改时，Vue 会捕获这个变化，并将其标记为"脏"，表示需要更新。然后，在下一个事件循环中，Vue 会对所有"脏"的数据进行重新计算和比对，确定需要更新的部分，并进行视图的重新渲染。

这种异步更新的机制有以下优势：

1. 性能优化：Vue 使用异步更新机制可以对多个数据的变化进行合并和批处理，减少不必要的计算和渲染操作，提高性能。

2. 避免不必要的更新：如果在同一个事件循环中多次修改了`data`的值，Vue 会将这些修改合并为一次更新，避免不必要的中间渲染。

3. 避免阻塞主线程：由于视图更新是在下一个事件循环中进行的，这可以避免长时间的计算或数据变化阻塞主线程，保持应用的响应性。

尽管视图的更新是异步的，但对于开发者来说，无需手动触发视图的更新。只需修改`data`中的属性，Vue 会自动处理视图的更新。

然而，有时候我们需要在修改数据后立即获取更新后的视图状态，例如在某个钩子函数中。为了确保获取到最新的视图状态，可以使用`Vue.nextTick`方法，它会在下一个视图更新周期后执行回调函数，保证回调函数执行时视图已经更新完毕。

```javascript
this.message = "New Message"; // 修改数据
Vue.nextTick(() => {
  // 在视图更新后执行回调函数
  // 可以获取到最新的视图状态
  // ...
});
```

总的来说，当`data`的值发生变化时，Vue 会在下一个事件循环中异步更新并重新渲染视图。这种异步更新机制能够提供性能优化和避免不必要的中间渲染，同时保持应用的响应性。

</details>

<details>
  <summary>12、Vue自定义指令</summary>
在Vue中，自定义指令（Custom Directive）是一种用于扩展Vue模板语法的方式。通过自定义指令，可以在DOM元素上绑定自定义的行为和交互逻辑。

自定义指令可以用于多种场景，例如操作 DOM、添加事件监听、动态样式绑定等。它们以 v-开头，并在 Vue 模板中通过指令绑定方式使用。

```
<template>
  <div>
    <p v-color="backgroundColor">This is a colored paragraph.</p>
    <button @click="changeColor">Change Color</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundColor: 'red',
    };
  },
  directives: {
    color: {
      mounted(el, binding) {
        el.style.backgroundColor = binding.value;
      },
      updated(el, binding) {
        el.style.backgroundColor = binding.value;
      },
    },
  },
  methods: {
    changeColor() {
      this.backgroundColor = 'blue';
    },
  },
};
</script>

```

</details>

<details>
  <summary>13、说一下Vue的生命周期</summary>
    <a href="https://www.yuque.com/cuggz/interview/hswu8g#fc2237b593d0e795a2ebbf2dc3cb0904" >

参考此文章
</a>

</details>

<details>
  <summary>4、Vue组件间通信</summary>
</details>

<details>
  <summary>1、keep-alive原理</summary>
</details>

<details>
  <summary>1、keep-alive原理</summary>
</details>

<details>
  <summary>1、keep-alive原理</summary>
</details>

<details>
  <summary>1、keep-alive原理</summary>
</details>

===============

#### 4、[mixins 点击访问链接](https://juejin.cn/post/7001746072649334798#heading-5)

#### 5、[插槽 slot](https://juejin.cn/post/6844903920037281805)

#### 6、[路由守卫](https://juejin.cn/post/6844903924760051725)

<details>
  <summary>1、keep-alive原理</summary>

</details>

<details>
  <summary>1、keep-alive原理</summary>

</details>

<details>
  <summary>1、keep-alive原理</summary>

</details>

<details>
  <summary>1、keep-alive原理</summary>

</details>

<details>
  <summary>1、keep-alive原理</summary>

</details>

<details>
  <summary>1、keep-alive原理</summary>

</details>

<details>
  <summary>1、keep-alive原理</summary>

</details>
