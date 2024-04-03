### 1.样式布局
**python主要结构，三栏布局**

* left描述区域: width:20%
* middle代码编辑器区域: flex: 1；=> flex-grow: 1 flex-shrink:1 flex-basis:0
* right结果区域: width:30%

**舞台区固定宽高比:**

```
height: 0;
padding-bottom: 75%; // height = fatherWidth * 75%
```
**canvas缩放 缩放舞台区：**
```javascript
// 在runcode时存clientWidth到localStorage里
localStorage.setItem('canvasWidth', String(canvas.current?.clientWidth));

// resize时设置canvas的transform控制缩放
const canvasBox = document.querySelector('#canvasBox');
if (canvasBox) {
    const {clientWidth} = canvasBox;
    const preCanvasWidth = localStorage.getItem('canvasWidth') || clientWidth;
    const canvasList = canvasBox.querySelectorAll('canvas');
    Array.from(canvasList).forEach(canvas => {
        canvas.style.transform = `scale(${clientWidth / Number(preCanvasWidth)}) translate(-50%, -50%)`;
    });
}
```

**光标拖动修改宽度：**

```
todo
```
**Rem方案**
小于1000时 fontsize = clientWidth / 10 + 'px'
1000 - 1600 fontsize = 100px
大于1600 fontsize = 150px

```javascript
const minWidth = 1000;
const maxWidth = 1600;
const setStyleFontSize = function () {
    const docWidth = document.documentElement.clientWidth;
    let fontSize = 100;
    const rem = docWidth / 10;
    if (docWidth <= minWidth) {
        fontSize = rem;
        if (rem < 100) {
            const editor = document.getElementById('editor');
            if (editor) {
                editor.style.fontSize = '18px';
            }
        }
    }
    else if (docWidth >= maxWidth) {
        fontSize = 150;
    }
    document.documentElement.style.fontSize = `${fontSize}px`;
    // 设置自定义属性
    document.documentElement.style.setProperty('--rem', `${rem}px`);
    // CSS3自定义属性的使用
    // line-height: calc(.15 * var(--rem));
};
```

### 2.Skulpt配置
#### 2.1[官方案例](http://skulpt.org/using.html)简单分析
```
function outf(text) {
    // output的text是Skulpt运行后输出的，这里要做的就是把text输入到终端(mypre)里。
    var mypre = document.getElementById("output");
    mypre.innerHTML = mypre.innerHTML + text;
}
// 读取import的相应的内容
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

Sk.configure({
    output:outf,
    read:builtinRead,
    // 这里还可以按需配置其他属性
    killableWhile: true,
    killableFor: true,
    __future__: Sk.python3,
});

// turtle画图渲染在mycanvas上
(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';

var code = document.getElementById("yourcode").value;
// 运行code的方法
var myPromise = Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody("<stdin>", false, code, true);
});

// html部分
<textarea id="yourcode" cols="40" rows="10">
    代码区域
</textarea><br />
<pre id="output" ></pre>
<!-- If you want turtle graphics include a canvas -->
<div id="mycanvas"></div>
```

#### 2.2python里的使用
1. ##### terminal终端内容
    textarea绑定store里的outputText，output(text)方法根据text参数去修改store里的里。python里的做法是：textarea绑定store里的outputText，output方法根据text参数去修改store里的outp
    ```
    Sk.configure({
        output(text: string) {
            if (!Sk.stop) {
                appendOutputText(text);
            }
        }
    }
    ```
2. ##### turtle画图dom的绑定
    ```
    const canvas = useRef<HTMLDivElement>(null);
    <div
        id="canvasBox"
        ref={canvas}
        styleName="canvas-box"
        style={{
            backgroundImage: bgImg ? `url(${bgImg})` : 'none'
        }}
    >
    Sk.TurtleGraphics.target = canvas.current;
    ```
3. ##### input的输入
```
// python中input语法的定义
Sk.configure({
    inputfun() {
        return new Promise(resolve => {
            setReadOnly(false);
            if (!isIOS()) {
                const node:any = terminal.current?.childNodes[0];
                node.blur();
                node.focus();
            }
            bus.once('terminal-input-complete', value => {
                setReadOnly(true);
                resolve(value);
            });
        });
    }
});
```
```
// terminal里的输入，<textarea onKeyDown={onKeyDown}></textarea>
function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    const terminal = e.currentTarget;
    if (terminal.selectionStart < outputLength) {
        e.preventDefault();
        e.stopPropagation();
    }
    // 删除键
    else if (e.key === 'Backspace') {
        if (terminal.value.length <= outputLength) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    // 回车
    else if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        appendOutputText('\n');
        bus.emit('terminal-input-complete', outputText.substring(outputLength));
    }
}
```
#### 2.3.py-module的使用
import模块时先判断pymodule里有没有，有的话走pymodule
match方法，匹配非/g正则时，返回数组，数组第一项是匹配的完整值，数组第二项及之后依次为正则括号里的内容。
([^./]+)匹配非.和非/的内容且长度>=1。
```
import pyModules from '@/py-modules';

// python中，import语句，读取模块时执行
function readModule(path: string) {
    // import gt, path => 'src/builtin/gt.js'
    const moduleName = path.match(/src\/builtin\/([^./]+)\.js/)?.[1];
    if (moduleName && pyModules[moduleName]) {
        return pyModules[moduleName];
    }
    if (!Sk.builtinFiles || !Sk.builtinFiles.files[path]) {
        throw new Error(`File not found: '${path}'`);
    }
    return Sk.builtinFiles.files[path];
}

// skulpt预设
Sk.configure({
    read: readModule,
});
```
### 3.自编库（模块开发）
#### 3.1 Sk.dependencie
```
/**
 * $builtinmodule函数内部读取不到外部变量
 * 1. 不能使用import，外部依赖库挂载到Sk.dependencies中使用
 * 2. 部分es6语法不能使用。。因为[1]
 */
```
```
// 自编库里可以通过Sk.denpendencies调用外部引入的方法
Sk.dependencies = {
    tutu: require('@/assets/imgs/robot.png'),
    mouth: require('@/assets/imgs/mouth.gif'),
    Solar,
    bus,
    createdQRCode,
    fetchAi,
    print
};
```
#### 3.2 新增模块(自编库)
##### 新建一个模块，可以通过import xx, xx.func调用模块上的方法。
```
const $builtinmodule = function (name) {
    // const gt = {};
	const gt = {__name__: new Sk.builtin.str("mod")};
    // 使用Sk.builtin.func能让python理解这是个函数！！
	gt.add = new Sk.builtin.func(function(a, b) {
        return Sk.ffi.remapToJs(a) + Sk.ffi.remapToJs(b);
    });
	return gt;
}
```
#####1.类型转换
在上面的这段函数声明里，参数a和b都是从python传进来的，可能会存在与js语言数据类型不一致导致的错乱，所以需要通过Sk.ffi.remapToJs将python的参数转成js再来进行js的运算.
而js的逻辑想要给python用的话最好也要用Sk.ffi.remapToPy转一下：
```
mod.add = new Sk.builtin.func(function(a, b) {
	 const result = Sk.ffi.remapToJs(a) + Sk.ffi.remapToJs(b)
    return Sk.ffi.remapToPy(result);
});
```
new Sk.builtin.str("mod") 也是创建一个python能理解的str类型。gt里面的函数返回的js字符串也都要用这个处理一下再给python用。
#####2.类的声明和使用
```
import gt
tt = gt.robot()
tt.speak('中秋快乐')
```
类的声明:
```
// 使用Sk.misceval.buildClass声明class
gt.robot = Sk.misceval.buildClass(gt, function($gbl, $loc) {
    // $loc.__init__就是构造器函数类似constructor，tt = gt.robot()就会执行
    $loc.__init__ = new Sk.builtin.func(function(self) {
        window.console.log('创建了robot类');
        // self就是当前上下文
        // self.xxx扩展私有成员变量
        self.voiceType = 1;
    });

    // $loc.xx 扩展外部成员变量，在类里的函数声明第一个参数被self保留，第二个参数开始才算参数
    $loc.voice = new Sk.builtin.func((self, ...args) => {
        if (args.length !== 1) {
            throw new Sk.builtin.TypeError('voice方法有且只有一个参数');
        }
        const value = args[0].v;
        if (!Number.isInteger(value)) {
            throw new Sk.builtin.TypeError('voice方法参数类型是整型数字');
        }
        if (value < 1 || value > 4) {
            throw new Sk.builtin.ValueError('voice方法只接受1-4以内的整型数字');
        }
        const voiceMap = {
            1: '标准男声',
            2: '标准女声',
            3: '可爱男童声',
            4: '机器人声音'
        };
        // 重点是这
        self.voiceType = value;
        Sk.dependencies.bus.emit('gt-speak-voiceChange', {
            voiceType: value,
            voiceName: voiceMap[value]
        });
    });
    $loc.makeqr = new Sk.builtin.func((self, value) => {
        if (!value) {
            throw new Sk.builtin.ValueError('makeqr方法参数不为空');
        }
        // 插入qr
        Sk.gtlib.qrcode = appendImg(target, createdQRCode(value.v));
    });
}, 'robot', []);
```
PS: 类声明里的函数声明第一个参数($gbl)被self保留，注意是第二个参数开始才是真的参数，与正常的函数声明有所不同

##### 3.实例对象属性监听
我们的robot里没有对voiceType进行属性监听，
ide里执行以下code，第三行报错 => 属性错误:'robot'没有'voiceType'属性或方法,第3行
```
import gt
tt = gt.robot()
print(tt.voiceType)
```
我们加上如下的属性监听即可拿到voiceType
```
const voiceTypeGetter = new Sk.builtin.func(function(self) {
    return Sk.ffi.remapToPy(self.voiceType);
});
// setter
const voiceTypeSetter = new Sk.builtin.func(function (self, val) {
    const newVoiceType = Sk.ffi.remapToJs(val);
    self.voiceType = newVoiceType;
});
// 对属性voiceType进行监听，相当于js的defineProperty的作用
$robot.voiceType = Sk.misceval.callsim(Sk.builtins.property, voiceTypeGetter, voiceTypeSetter);
```
再次执行python代码：
```
import gt
tt = gt.robot()
print(tt.voiceType) #输出 __init__里设置的默认值1
tt.voice(3)
print(tt.voiceType) #输出3
```
##### 4.异步任务
当python需要等待js的异步任务完成才继续的时候可以用Sk.misceval.promiseToSuspension来实现
```
return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
    Sk.setTimeout(function() {
        resolve(Sk.builtin.none.none$);
        // fetchApi.then(res => resolve(Sk.ffi.remapToPy(res));
    }, Sk.ffi.remapToJs(delay)*1000);
}));
```
### 4.错误提示
python运行报错后抛出runError，执行setAnnotations，ace拿到annotation会将相应的报错显示出来。
```
setAnnotations({
    row: runError.traceback?.[0].lineno - 1,
    column: runError.traceback?.[0].colno || 0,
    type: 'error',
    text: errorText
});
```
```
const editorOptions = {
    // 左侧错误提示
    annotations: [annotations]
}
// ... 即可显示错误提示
<AceEditor {...editorOptions} />
```
### 5.Skulpt源码分析(misceval)
#### 5.1 对异步的封装
```
Sk.misceval.Suspension = function Suspension(resume, child, data) {
    this.$isSuspension = true;
    if (resume !== undefined && child !== undefined) {
        this.resume = function() { return resume(child.resume()); };
    }
    this.child = child;
    this.optional = child !== undefined && child.optional;
    if (data === undefined && child !== undefined) {
        this.data = child.data;
    } else {
        this.data = data;
    }
};

Sk.misceval.promiseToSuspension = function(promise) {
    // 注意Sk.misceval.Suspension();参数为空
    var suspension = new Sk.misceval.Suspension();

    suspension.resume = function() {
        if (suspension.data["error"]) {
            throw suspension.data["error"];
        }

        return suspension.data["result"];
    };

    suspension.data = {
        type: "Sk.promise",
        promise: promise
    };
```
promiseToSuspension定义的时候，Sk.misceval.Suspension()参数为空，查看Suspension可知，相当于只做了this.\$isSuspension = true。我们去看哪里用到了\$isSuspension。
在compile.js里有一段如下。compile.js里做了python=>js的parse、输出js等。在解析代码时会根据$isSuspension去输出相应的js代码。
```
Compiler.prototype._checkSuspension = function(e) {
    var retblk;
    if (this.u.canSuspend) {

        retblk = this.newBlock("function return or resume suspension");
        this._jump(retblk);
        this.setBlock(retblk);

        e = e || {lineno: "$currLineNo", col_offset: "$currColNo"};

        out ("if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'"+this.filename+"',"+e.lineno+","+e.col_offset+"); }");

        this.u.doesSuspend = true;
        this.u.tempsToSave = this.u.tempsToSave.concat(this.u.localtemps);

    } else {
        out ("if ($ret && $ret.$isSuspension) { $ret = Sk.misceval.retryOptionalSuspensionOrThrow($ret); }");
    }
};
```











