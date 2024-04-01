# vdom 和 diff

## 背景

基于组件化，数据驱动视图。只需关心数据，无需关系 DOM ，好事儿。

但是，JS 运行非常快，DOM 操作却非常慢，如何让“数据驱动视图”能快速响应？

------

## 引入 vdom

用 vnode 表示真实 DOM 结构

```html
<div id="div1" class="container">
    <p>vdom</p>
    <ul style="font-size: 20px">
        <li>a</li>
    </ul>
</div>
```

```js
{
    tag: 'div',
    props: {
        className: 'container',
        id: 'div1'
    }
    children: [
        {
            tag: 'p',
            children: 'vdom'
        },
        {
            tag: 'ul',
            props: { style: 'font-size: 20px' }
            children: [
                {
                    tag: 'li',
                    children: 'a'
                }
                // ....
            ]
        }
    ]
}
```

演示 vdom 的使用（对比不用 vdom 的情况）—— snabbdom 和 jquery

------

## 使用 vdom 能快速操作 DOM

- JS 执行很快
- DOM 操作很慢

如何让 DOM 操作最快？—— 尽可能减少 DOM 操作，只操作需要更新的，不做多余操作。

如何尽量减少 DOM 操作？—— 两个 vnode 进行 diff ，找出不同。diff 是 JS 执行，会很快。
（画图示例，两棵 vnode ，找出不同）

------

## diff 算法概述

diff 算法是一个很广泛的，前端常见的例如文本 diff ，json 对象 diff ，还有这里的“树 diff”。

- 文本 diff ，例如 linux 的 diff 命令
- json diff ，例如 https://github.com/cujojs/jiff
- 树 diff ，如 vdom diff

**diff 两棵树的时间复杂度是 `O(n^3)`**（不可用的复杂度），例如 `diff(Tree1, Tree2)`

- 遍历 Tree1 ，每个节点都要和 Tree2 对比
- 针对 Tree1 的节点，遍历 Tree2 每个节点和它对比
- 重新排序

但是，vdom diff 算法做了几个改进，**让复杂度变为 `O(n)`** 

- 只比较同一层级
- tag 或组件不相同的，直接删掉重建，不再继续深入比较
- tag 或组件 & key ，两个都相同的，即认为是相同节点

------

## diff 算法过程详解

snabbdom https://github.com/snabbdom/snabbdom 是一款比较简洁、高性能的 vdom lib
vue2.x 的 diff 算法完全参考它。
即了解 snabbdom 的 diff 算法，也就了解 vue2.x 的 diff 算法。**应该面试的 diff 算法问题足够了**。

基本流程

- 回顾一下它的基本使用，找出核心的 API `h` `patch`
- 下载 snabbdom 源码
- 查看源码

注意

- 解读源码，只看主干和要点，不要去扣细节
- 源码是 ts ，但不妨碍我们阅读，不要关注语法细节

### h 函数

【功能】h 函数是一个工厂函数，根据传入的参数，生成 vnode 结构。

源码在 `src/h.ts`

输入和输出 `function h(sel: string, data: VNodeData, children: VNodeChildren): VNode;`

返回 `return vnode(sel, data, children, text, undefined);`

### vnode 函数

源码在 `src/vnode.ts`

返回 `return {sel, data, children, text, elm, key};`

这里可以结合 demo 中的断点来看数据结构。此时的 `elem` 应该是 `undefined`

### text 和 children

一个元素或者有 contentText ，后者有 children ，两者不能共存
demo 中有示例

### patch 函数

【功能】patch 函数将 newVnode 更新到 vnode 或者 elem 上，patch 的过程也就是 diff 的过程。

源码 `src/snabbdom.ts` ，找到其中的 `init` 函数，最后返回的就是 `patch` 函数。

输入输出 `function patch(oldVnode: VNode | Element, vnode: VNode): VNode`

（画图：elem 和 oldVnode vnode 的关系）
（要考虑第一个参数是 VNode 和 Element 两种情况）

### patchVnode 函数

源码在 `src/snabbdom.ts`

先看 `addVnodes` 和 `removeVnodes` ，最后看 `updateChildren`

### updateChildren 函数

源码在 `src/snabbdom.ts`

以 todo list 的 items 变化，为例，图解演示即可

------

## 总结

diff 算法中，细节不是关键例如“头头 头尾 对比”等，核心概念才是关键，如 h vnode patch key 等。
所有的 diff 算法，以及无论如何做优化，都离不开这些核心概念
