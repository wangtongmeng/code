### 1、CSS 中的以下几个属性能触发硬件加速：

transform
opacity
filter
will-change

### 2、flex: 1 是设置了什么

flex: 1 1 0;
flex-grow: 1 flex-shrink:1 flex-basis:0

### 3、吸顶布局

基本上，sticky 可以看出是 position:relative 和 position:fixed 的结合体——当元素在屏幕内，表现为 relative，就要滚出显示器屏幕的时候，表现为 fixed。
父和祖先元素的 overflow 不能是 hidden, scroll, auto, 或 overlay
nav {
position: -webkit-sticky;
position: sticky;
top: 0;
}

### 4、使用自定义属性实现换肤 css var()

https://blog.csdn.net/u010730897/article/details/81116958

```
//现在全局定义
:root{
   --theme-color:red;
}

//使用的时候
#app{
    background-color:var(--theme-color);
}

//假如我们没有指定--theme-color这个属性，则可以在使用的时候加上替代值
#app{
    background-color:var(--theme-color,black);//没有指定--theme-color则会由black代替
}
```

```
//js中获取--theme-color的值
var styles = getComputedStyle(document.documentElement);
var value = styles.getPropertyValue("--theme-color");
console.log(value);//red

//js中更改--theme-color的值
document.documentElement.style.setProperty("--theme-color","black");
```

### 4、常见伪类

##### 状态：

```
 :link 选择未访问的链接

 :visited  选择已访问的链接

 :hover  选择鼠标指针浮动在其上的元素

 :active  选择活动的链接

 :focus   选择获取焦点的输入字段
```

##### 结构化：

:not 一个否定伪类，用于匹配不符合参数选择器的元素

```
<ul>
  <li class="first-item">一些文本</li>
  <li>一些文本</li>
  <li>一些文本</li>
  <li>一些文本</li>
</ul>

li:not(.first-item) {
  color: orange;
}
```

:first-child 匹配元素的第一个子元素

```
// 如下例，第一个<li> 元素的文本会变为橙色。

<ul>
  <li>这里的文本是橙色的</li>
  <li>一些文本</li>
  <li>一些文本</li>
</ul>

li:first-child {
  color: orange;
}
```

::before/:before 匹配元素的最后一个子元素

:before 在被选元素前插入内容。需要使用 content 属性来指定要插入的内容。被插入的内容实际上不在文档树中。

### 5、居中

```
// 1 flex
.parent {
  display: flex;
  justify-conetent: center;
  align-items: center;
}
// 2 transform
.parent {
  postion: relative;
}
.son {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
// 2 负的margin
.parent {
  postion: relative;
}
.son {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -自身高度/2;
  margin-left: -自身宽度/2
}
```

### 6、float 和清除浮动

### 7、transition 和 animation

```
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    -webkit-transition:width 2s, height 2s,
        background-color 2s, -webkit-transform 2s;
    transition:width 2s, height 2s, background-color 2s, transform 2s;
}
.box:hover {
    background-color: #FFCCCC;
    width:200px;
    height:200px;
    -webkit-transform:rotate(180deg);
    transform:rotate(180deg);
}

div {
    transition: <property> <duration> <timing-function> <delay>;
}
```

animation:

```
{
	width:100px;
	height:100px;
	background:red;
	position:relative;
	animation:mymove 5s infinite;
	-webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
}

@keyframes mymove
{
	from {left:0px;}
	to {left:200px;}
}
```

### 8、Css 选择器

### 9、Css 选择器优先级

第一优先级：!important 会覆盖页面内任何位置的元素样式 1.内联样式，如 style="color: green"，权值为 1000
2.ID 选择器，如#app，权值为 0100 3.类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为 0010 4.标签、伪元素选择器，如 div::first-line，权值为 0001 5.通配符、子类选择器、兄弟选择器，如\*, >, +，权值为 0000 6.继承的样式没有权值

### 10、display: none; visibility: hidden; opacity: 0; 的区别

{ display: none; /\* 不占据空间，无法点击 / } 脱离了文档流，但是 dom 结构依然在，document.getElementByxx 仍能获取到。会引发重排。
{ visibility: hidden; / 占据空间，无法点击 / } 只会引发重绘
{ opacity: 0; filter:Alpha(opacity=0); / 占据空间，可以点击 / }

### 11、css 选择器-child 和-of-type 的使用差异

https://juejin.cn/post/6969766147457548301

:first-child 选择器用于选取属于其父元素的首个子元素的指定选择器
:first-of-type 选择器匹配属于其父元素的特定类型的首个子元素的每个元素

p:first-child 可以理解为查找 p 元素的父元素中第一个子元素，如果为 p 元素则应用，否则不应用。
p:first-of-type 可以理解为查找 p 元素的父元素中第一个为 p 的元素，找到并应用。

### 12、选择器优先级

id 选择器 100
类选择器 10
属性选择器 a[ref=“eee”] 10
伪类选择器 li:last-child 10
标签选择器 div 1
伪类选择器 li:after 1
相邻兄弟选择器 h1+p 0
子选择器 ul>li 0
后代选择器 li a 0
通配符选择器\*0

### 13、BFC

BFC 格式化上下文，它是一个独立的渲染区域，让处于 BFC 内部的元素和外部的元素相互隔离，使内外元素的定位不会相互影响

如何产生 BFC?
position: absolute/fixed：绝对定位
display: inline-block / table / flex
float 设置除 none 以外的值；（只要设置了浮动，当前元素就创建了 BFC）
ovevflow !== visible (可为：hidden、auto、scroll)

特性和应用

阻止 margin 重叠：同一个 BFC 下外边距（margin(边缘)）会发生折叠
清除浮动 ：清除内部浮动(清除浮动的原理是两个 div 都位于同一个 BFC 区域之中)
自适应两栏布局：左 float+右 BFC，是利用了 BFC 的区域不会与 float 的元素区域重叠的机制

### 14、清除浮动的几种方式，各自的优缺点

给父级 div 定义 height 属性
最后一个浮动元素之后添加一个空的 div 标签，并添加 clear:both 样式
包含浮动元素的父级标签添加 overflow:hidden 或者 overflow:auto
使用 ::after 伪元素。由于 IE6-7 不支持 :after，使用 zoom:1 触发 hasLayout\*\*

```
.clearFix::after{
    content: "\200B";
    display: table;
    height: 0;
    clear: both;
  }
  .clearFix{
    *zoom: 1;
  }

```

<detail>
<summary>
15、less,sass 它们的作用是什么
</summary>

Less 和 Sass 是两种 CSS 预处理器，它们的作用是简化和改进 CSS 的编写过程。
无论是 Less 还是 Sass，它们都提供了一些类似的功能，如变量、嵌套规则、混合等，以及更高级的功能，如函数、继承、条件语句等。它们都旨在帮助开发者更高效地编写 CSS，减少重复的代码，提高代码的可维护性和可重用性。同时，它们还提供了工具和命令行编译器，将 Less 或 Sass 代码编译为普通的 CSS 文件，以供浏览器解析和渲染。
</detail>
