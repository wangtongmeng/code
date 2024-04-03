## [前端路由](https://danielxuuuuu.github.io/2020/02/23/%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86/)
前端路由的产生就是为了解决SPA只有一个URL所带来的导航问题。
前端路由的实现原理简单来说，就是在不跳转或者刷新页面的前提下，为SPA应用中的每个视图匹配一个特殊的URL，之后的刷新、前进、后退等操作均通过这个特殊的URL实现。为实现上述要求，需要满足：
* 改变URL且不会向服务器发起请求；
* 可以监听到URL的变化，并渲染与之匹配的视图。

主要有Hash路由和History路由两种实现方式。下文对两者的基本原理进行简单介绍，并分别实现了一个简易的路由Demo。

### hash路由
Hash即URL中#号及其后面的字符，由于URL中Hash值的改变并不会向服务器发起请求，并且我们也可以通过hashchange事件对其改变进行监听，因此我们就可以通过改变页面的Hash来实现不同视图的匹配与切换。
```
// 设置hash
window.location.hash = 'xxxx';
// 获取hash
let hash = window.location.hash;
// 监听hash变化
window.addEventListener('hashchange', function(event){
	let newURL = event.newURL;
  let oldURL = event.oldURL;
}, false);
```
##### 创建路由类
原理就是通过键值对的形式保存路由及对应要执行的回调函数，当监听到页面hash发生改变时，根据最新的hash值调用注册好的回调函数，即改变页面。
```
class Routers{
  constructor(){
    // 保存路由信息
    this.routes = {};
    this.currentUrl = '';
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }

  // 用于注册路由的函数
  route = (path, callback) => {
    this.routes[path] = callback || function(){};
  }

  // 监听事件的回调，负责当页面hash改变时执行对应hash值的回调函数
  refresh = () => {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
  }
}

window.Router = new Routers();
```
##### 注册路由
使用route方法添加对应的路由及其回调函数即可。以下代码实现了一个根据不同hash改变页面颜色的路由，模拟了页面的切换，在实际的SPA应用中，对应的就是页面内容的变化了。
```
var content = document.querySelector('body');

function changeBgColor(color){
  content.style.background = color;
}

// 添加路由
Router.route('/', () => {
  changeBgColor('yellow');
});
Router.route('/red', () => {
  changeBgColor('red');
});
Router.route('/green', () => {
  changeBgColor('green');
});
Router.route('/blue', () => {
  changeBgColor('blue');
});
```
### History路由
在H5之前，浏览器的history仅支持页面之前的跳转，包括前进和后退等功能。
在HTML5中，新增以下API：
```
history.pushState();			// 添加新状态到历史状态栈
history.replaceState();		// 用新状态代替当前状态
history.state;						// 获取当前状态对象
```
history.pushState()和history.replaceState()均接收三个参数：
state：一个与指定网址相关的状态对象，popstate事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填null。
title：新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null。
url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址

popstate事件：每当同一个文档的浏览历史（即history对象）出现变化时，就会触发popstate事件。但仅仅调用history.pushState()或者history.replaceState()并不会触发改事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用history的back、forward、go方法时才会触发。

由于history.pushState()和 history.replaceState()都具有在改变页面URL的同时，不刷新页面的能力，因此也可以用来实现前端路由。

##### 创建路由类
```
class Routers{
  constructor(){
    this.routes = {};
    window.addEventListener('popstate', e => {
      const path = e.state && e.state.path;
      this.routes[path] && this.routes[path]();
    })
  }

  init(path){
    history.replaceState({path: path}, null, path);
    this.routes[path] && this.routes[path]();
  }

  route(path, callback){
    this.routes[path] = callback || function(){};
  }

  go(path){
    history.pushState({path: path}, null, path);
    this.routes[path] && this.routes[path]();
  }
}

window.Router = new Routers();
```
##### 编写触发事件
在使用hash实现的路由中，我们通过hashchange事件来监听hash的变化，但是上述代码中history的改变本身不会触发任何事件，因此无法直接监听history的改变来改变页面。因此，对于不同的情况，我们选择不同的解决方案：
* 点击浏览器的前进或者后退按钮：监听popstate事件，获取相应路径并执行回调函数
* 点击a标签：阻止其默认行为，获取其href属性，手动调用history.pushState()，并执行相应回调。
```
const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
  if(e.target.tagName === 'A'){
    e.preventDefault();
    Router.go(e.target.getAttribute('href'));
  }
})
```

### [面试版本](https://segmentfault.com/a/1190000020888923)
|  hash路由   | history路由  |
|  ----  | ----  |
| hash 值的变化不会导致浏览器像服务器发送请求  | 更新浏览器 URL 地址而不重新发起请求。 |
| location.hash可以获取hash值  | history.pushState(); history.replaceState(); popstate监听不到这两个变化，所以要单独去触发页面更新方法。	 |
| hashchange是hash值发生改变的调用的函数  | 单元格 |
| 兼容性好，不需要服务器端进行任何设置和开发| 可以使用history.state来获取当前url对应的状态信息,可以记录滚动条等信息 |
| 对于部分需要重定向的操作，后端无法获取hash部分内容，导致后台无法取得url中的数据，典型的例子就是微信公众号的oauth验证  | 浏览器会按照路径发送真实的资源请求，如果这个路径是前端通过 history API 设置的 URL，那么在服务端往往不存在这个资源，于是就返回 404。需要配置Nginx：try_files $uri /index.html; |

##### 前端hash路由实例
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li><a href="#/">/</a></li>
      <li><a href="#/page1">page1</a></li>
      <li><a href="#/page2">page2</a></li>
    </ul>
    <div class="content-div"></div>
  </body>
  <script>
    class RouterClass {
      constructor() {
        this.routes = {}; // 记录路径标识符对应的cb
        this.currentUrl = ""; // 记录hash只为方便执行cb
        window.addEventListener("load", () => this.render());
        window.addEventListener("hashchange", () => this.render());
      }

      /* 初始化 */
      static init() {
        window.Router = new RouterClass();
      }

      /* 注册路由和回调 */
      route(path, cb) {
        this.routes[path] = cb || function() {};
      }

      /* 记录当前hash，执行cb */
      render() {
        this.currentUrl = window.location.hash.slice(1) || "/";
        this.routes[this.currentUrl]();
      }
    }


    RouterClass.init();
    const ContentDom = document.querySelector(".content-div");
    const changeContent = content => (ContentDom.innerHTML = content);

    Router.route("/", () => changeContent("默认页面"));
    Router.route("/page1", () => changeContent("page1页面"));
    Router.route("/page2", () => changeContent("page2页面"));
  </script>
</html>
```

##### 前端history路由实例
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li><a href="/">/</a></li>
      <li><a href="/page1">page1</a></li>
      <li><a href="/page2">page2</a></li>
    </ul>
    <div class="content-div"></div>
  </body>
  <script>
    class RouterClass {
      constructor(path) {
        this.routes = {}; // 记录路径标识符对应的cb
        history.replaceState({ path }, null, path); // 进入状态
        this.routes[path] && this.routes[path]();
        window.addEventListener("popstate", e => {// 当用户点击浏览器的前进或者后退触发
            console.log(e.state)
          const path = e.state && e.state.path;
          this.routes[path] && this.routes[path]();
        });
      }

      /* 初始化 */
      static init() {
        window.Router = new RouterClass(location.pathname);
      }

      /* 注册路由和回调 */
      route(path, cb) {
        this.routes[path] = cb || function() {};
      }

      /* 跳转路由，并触发路由对应回调 */
      go(path) {

        history.pushState({ path }, null, path);
        console.log(history);
        this.routes[path] && this.routes[path]();
      }
    }

    RouterClass.init();
    const ul = document.querySelector("ul");
    const ContentDom = document.querySelector(".content-div");
    const changeContent = content => (ContentDom.innerHTML = content);

    Router.route("/", () => changeContent("默认页面"));
    Router.route("/page1", () => changeContent("page1页面"));
    Router.route("/page2", () => changeContent("page2页面"));

    ul.addEventListener("click", e => {
      console.log(e.target.tagName);
      if (e.target.tagName === "A") {
        e.preventDefault();
        Router.go(e.target.getAttribute("href"));
      }
    });
  </script>
</html>
```