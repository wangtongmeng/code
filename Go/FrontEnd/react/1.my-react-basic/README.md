10:47
Potter
type 方法不是没写吗？ 
Tony
在看一下函数实现 


props是在哪里传入的呢？ 
守志
这样的写法在哪里转换的 

刚才运行的时候 babel  怎么编译 jsx  的 

vdom 是babel编译出来的吗 

难怪那个函数组件没看懂，瞬间就编程虚拟dom了。现在才回过神来，是在编译的时候自动转了。
createElement中的参数 是编译的时候提供 的


jsx 原材料 活鱼
babel 厨师
React.createElement(type,props)   红烧鱼 调料

端给用户/顾客
运行createElement  吃鱼
运行的结果虚拟DOM   shit



小白
new? 
Potter
改成render  
细北
new一个 执行render  
shadowhunter
index里还是函数组件 
Potter
编译的时候，也会把类组件的render方法，改成createElement形式把 
小白
这个还是function 组件？ 


不需要保存dom吗 
Tony
为以后diff做准备 
雪之樱
classInstance好像没用上？ 


Potter
编译的时候，也会把类组件的render方法，改成createElement形式吧？ 
类组件   和  函数式组件  有啥区别 
是还是不是？
继承怎么不调用super 



细北
对喔  你这是箭头函数  
热带么
setState不一定是异步的  也不一定是同步的  分情况 
细北
我是说你这个handleClick  
Tony
click方法可以传参吧 
细北
我看到了 你这handleClick是箭头函数 自动指向this了。 

ny
click里面可以直接传参吗 
细北
源码这里 setState不是还有回调么 



findDOM 什么时候没有，需要递归？ 
Potter
partialState 和 callback 直接放到一个对象里，然后push到数组，用的时候也更方便一点 
雪之樱
好像一调setState就更新了 
Potter
搞两个数组还麻烦一些，还得遍历2次。 



为什么 react 选择这种方法 不和vue一样用 promise.resolve 
Tony
你这个代码是通过切片编程实现的吧 
热带么
事件处理里面封装起来吧 
细北
老师源码是1比1的么 
14:26
细北
这里不是会覆盖么 


14:45
小白
老师刚才运行原生的是react17不？ 
原生 React17
手写实现React15
热带么
react 15的  你听课认真点 
细北
gation 
小白
我看package.json里是17 
14:51
细北
过一下 这个合成事件的流程   

15事件17有所不同的
1.最大不同点，15的事件都是代理到document,17之后都代理给了容器 div#root
因为React希望一个页面可以运行多个react版本 
div#root1 react17
div#root2 react18

React
context
ref



细北
 不是同一个vdom吗 怎么2个type不一样  
小白
type默认有render吗 


function/class component，dom元素都可以用forward ref吗
不能，只针对function 组件



这个是babel做的吧 
小白
先去判断&typeof，如果是classComponent也会进入这个逻辑了，这样dom和函数/类组件都可以用forwardRef了 


细北
可以写多个生命周期吧 
16:18
热带么
Mount里面的componentDiMount可能会多次触发吧 只会触发一次
小白撤回了一条消息



16:46
小白
compareTwoVdom里也有个parentDOM，可以用吗？ 其实是可以的
小白
findDOM时候还需要这个old吧？ 
16:53
Tony
有问题吧 
Tony撤回了一条消息
Tony
位置不对 
Tony
应该插在旧节点的位置吧 
是的
热带么
不执行会怎么样，前面不是已经绑定了吗 
热带么
前面dom绑定的load事件绑定的是谁来着？ 
Tony
appendChild是在最后添加，感觉问题很大 


unMount这个函数可以直接用parentDOM 
小白
这个讲过了，没问题了 
11
如果他弟弟也销毁了呢 

插入的时候要找下一个存在的弟弟


20:03
细北
上面不是判断过 类型了么 
细北
老师 文本 这里不是应该比对content么  
等无此人。
文本内容应该是newVdom.props.content 



function App(){
    return null;
}
老师我一直没懂  如果数组有2级，代码该怎么写，怎么进行同级比较第一层和第二层 
守志
递归啦 

let children = [['A'],['B']]



热带么
vue的diff是用while循环 和双指针 
小白
mountedIndex的更新可以再说一次吗 
等无此人。
去越南买一个吧 
细北
老师总结一下呗 这个是面试题吧 
热带么
react这个实现咋完全不一样哦 



这里只是在数组里删除掉，dom会保持不变 
小白
就是不知道前面有node删除的时候，移动，mountedIndex还能正确吗？最后新vdom的index还是连续的吗 


getSnapshotBeforeUpdate是react哪个版本的生命方法  没用过 
React17


老师讲下颜色变化 ，然后值的传递和改变 谁先谁后 

热带么
老师讲下颜色变化 ，然后值的传递和改变 谁先谁后 
热带么
main content header title 
热带么
谁先变色 
小白
Page吧 
m c h t

main header content title

深度优先

盖房子 最里面的先完成 
等无此人。
这个是属性更新，应该是先父再子吧 
热带么
子的颜色是从父亲那里拿来的吧 
小白
属性更新，但是渲染呢 
守望
最终都要渲染成dom





现在说的是属性更新吗 
守望
哈哈 执行这样 但是我觉得最后渲染完 不一定吧 额。。。。 
小白
还是说最后的渲染完成？ 
热带么
之前将生命周期的时候，不是说等子组件渲染和挂载完成了  父组件才会渲染和挂载完成么 
21:15
小白
可以再看一次类里面传context的例子吗 

21:23
热带么
好的 
守志
他和事件绑定有关系吗？ 
Tony
跟渲染流程有关系吧 


还是不太理解那个类，怎么静态属性赋值完，直接就是this.context了



antd-design 中的Form组件好像是这样写 
热带么
不改变原有逻辑  只是去包一层 ；所以可以复用原来的逻辑，这块儿逻辑不用更改，但是又可以增加新的逻辑 



button不是只有展示name和title吗？count为什么会渲染呢？ 
22:04
Tony
typeof 是 字符串 



哦，明白了。 
热带么
还有别的高阶组件例字么 
Tony
之前的高阶组件也可以添加新的事件吗 
热带么
这个有点平常 
热带么
业务场景强一点的 


//react-router V6.0 react 性能优化和react hook



为什么叫render props?

 <MouseTracker render={
    (props) => (
      <div>
        <h1>移动一下鼠标</h1>
        <p>当前鼠标的位置是{props.x},{props.y}</p>
      </div>
    )
  }>



  问题是这个属性没变化  为啥会render,react内部没做这种最基础的优化么？ 
小白
你还没改成0 

dom-diff就是用新渲染出来的虚拟DOM和老渲染出来的虚拟DOM进行对比，然后把不同的部分更新到真实的DOM中。

不是有dom-diff么 
小白
dom diff是不是就比较了类型，类型一致就复用老节点，好像没有判断完全相同？ 

还没解释清楚，值没变它怎么就触发render 
父组件更新了，比如说调用了父组件setState方法


只比较了一层 
M
是先render 再diff  
热带么
嗯嗯 缕一下render和diff执行的时机 

1.初次渲染
渲染App
App.render
返回这一样的虚拟DOM
<div>
  <p>0</p>
  <ClassCounter> {count:0} 创建ClassCounter实例进行挂载
  <FunctionCounter/> count={0} 
  <input />
  <button>+</button>
</div>

2.更新的时候
App.setState
App.updater.updateComponent
shouldComponentUpdate 返回true就继续更新，返回了false就不更新了
App.forceUpdate
let oldRenderVdom 
let newRenderVdom
<div>
  <p>0</p>
  <ClassCounter> {count:0} 创建ClassCounter实例进行挂载
  <FunctionCounter/> count={0} 
  <input />
  <button>+</button>
</div>
执行新老虚拟DOM的DOM-DIFF
compareTwoVdom(oldRenderVdom, newRenderVdom);
更新ClassCounter
ClassCounter.emitUpdate()
shouldComponentUpdate
oldProps = {count:0}  newProps={count:0}
比较新的和老的属性是否相同，如果相同就不更新了，不相同才更新


还是不理解，我们页面state有很多属性，但是我每个属性都需要手动去做这个比较判断吗 
ヾ淺色年華
这个优化看自已了 
热带么
我写的几年react项目  只有少部分属性会这么玩啊 



只能不去触发render 
ヾ淺色年華
它在render中判断了吗？ 
10:35
雪之樱
newVdom和newRenderVdom有什么区别 ?


function FunctionCounter(props) {
  console.log('FunctionCounter render');
  return (
    <div>FunctionCounter:{props.count}</div>
  )
}

ReactDOM.render(<FunctionCounter>);
newVdom
{type:FunctionCounter}


newRenderVdom
{type:'div'}

Symbol代表一个唯 一的不可以重复的值


let react_element = 'react_element';


compare   方法在哪里实现的呢？ 



值得 
热带么
useState是写在react-dom里面的吗 
水星
22 setState不用传参数吗 
Tony
每次渲染App 都会执行一遍吧 
是的
Tony
我感觉会造成大量的闭包 
是的
水星
哦，明白了 
M
hookindex要加1干嘛 


热带么
数组的下标加一 
热带么
老师讲一讲react里面很多闭包可能会有什么问题不？useMemo, useCallback也会产生闭包吧 
今天晚上8点讲闭包
小白
不知道那个render什么时候触发，和之前渲染过程的区别？ 

不知道那个render什么时候触发，和之前渲染过程的区别？ 
在初始挂载的时候 或者在更新的时候 
就会执行render方法

ink
默认值传函数有啥好处 
给个默认值，保证参数值不为null
compare 想实现深度对比就可以传递一个deepEquals
如果没有传，给一个默认实现shallowEqual



render这个问题，是之前写useEffect时候写的那个函数 
小白
useState 
小白
react-dom.js里面的render，useState旁边那个 
ink
这个是问useState的 


每个hook实例都有自己的hookIndex
热带么
useMemo
useMemo
也不能类型

useMemo和useCallback能共用一个hookIndex吗 
奋斗ing
app render没打印呢 


这里没看到有缓存组件 
小小
useMemo用来缓存实例或者说对象
useCallback 缓存函数
useMemo和useCallback的使用场景有什么区别呢 
热带么
那老师你前面的代码就不能这么示范 
ink
只是===比较吗 
源码里这么做的


hookIndex放在全局不就是所有组件共用了吗 
其实在现在的React源码里。hookIndex 并不是一个全局变量，而是每个组件自己有一个hookState数组
存在自己的fiber
火神的光芒
什么叫hook 
热带么
你前面是共用了一个hookIndex吧 



热带么
那些条件判断就没有条件重复的情况吗？ 
热带么
看到都是if else  if else 



不是重复 是一个条件也在另外一个条件下面 
不可以
if(){
  if(){
    if(){
      
    }
  }
}
奋斗ing
  
人生若只如初见
 scheduleUpdate里为什么要把 hookIndex 设置为0？ 



14:33
135****5238
react-dom.js  的21行的setTimeout执行后不用清除定时器吗 
热带么
deps和oldDeps怎么会不一样呢 


小白
如果有reducer就忽略了那个action了吗 
15:00
小白
老师还有useReducer的dispatch那里，
let newState = typeof action === 'function' ? action(hookStates[currentIndex]) : action; 



15:16
热带么
老师我前面有个问题：比较deps和oldDeps里面每一项一不一样是什么意思？ 

比较 新数组中的每一项和老数组中的每一项是否完全相同
如果有一项不同，就返回false
滕小好
cleartimeout 



15:20
热带么
怎么会不相同呢 
热带么
我们写的依赖项不会变的啊 
杨涛
不会变你依赖干啥 
热带么
这个Number会变  
热带么
我们的依赖项里面到底是依赖的一个值，还是一个值的属性名呢 
let a =1;
let obj = {};

// a obj




schelley
forwordref如果还要包裹memo组件怎么用呢 

React.forward(React.memo(FunctionComponent));
杨涛
React.strictnode是干啥用的 
StrictMode
如果启动了，会进行更严格的检查 
梦想荣耀撤回了一条消息
小白
<></>这样和fragment有什么区别呢 
一样
滕小好
不是有<></>这个么？ 
React.Fragment
张斐
fragment好像能用ref吧 
Fragment没有dom元素
小白
也可以加key是不 


16:00
schelley
现在用memo嵌套子组件，接着forword再包裹memo
，子组件更新的时候父组件还是会更新，变量只是子组件使用，这种情况怎么解决 
React里面不管在哪里更新，永远都从根节开始更新的

