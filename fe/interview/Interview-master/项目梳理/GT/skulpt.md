# Skulpt

分享的内容主要包含:

1.skuplt简单介绍

2.Skulpt的使用以及skulpt是怎么将python代码在运行在浏览器的

3.skulpt的原理 包括怎么将python代码编译成js代码，以及会分析几个编译步骤: 

​	3.1 词法分析	(会分析)

​	3.2 语法分析

​	3.3 语义分析

​	3.4 目标代码生成	(会分析)

这期没有做ppt，讲的内容也会比较干燥，如果有问题随时提。

### Skulpt的介绍

​		浏览器只能运行`javascript`代码，如果要在浏览器上面运行`python`代码，浏览器目前是不支持的。如果要在浏览器运行python的代码，只能将python代码编译成js代码。

​		`skulpt`是`python`的`javascript`实现，可以在浏览器中运行python的代码。

#### Skulpt的使用

在`skulpt`中如果要执行`python`代码，需要调用`importMainWithBody`方法:

```javascript
// 执行python语句: print(1+2)
Sk.importMainWithBody('<stdin>', false, 'print(1+2)', false)
```

`skulpt`会将`print(1+2)`这段代码转换成`javascript`代码，这是转换之后的`javascript`代码

<details>
  <summary>点击javascript代码</summary>
  <pre>
    /*     1 */ Sk.execStart = Sk.lastYield = new Date();
    /*     2 */ var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname1,$binop4;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname1=susp.$tmps.$loadname1;$binop4=susp.$tmps.$binop4;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname1":$loadname1,"$binop4":$binop4};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: /* --- module entry --- */
    /*     3 */ //
    /*     4 */ // line 1:
    /*     5 */ // print(1+2)
    /*     6 */ // ^
    /*     7 */ //
    /*     8 */ $currLineNo = 1;
    /*     9 */ $currColNo = 0;
    /*    10 */
    /*    11 */ var $loadname1=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $binop4=Sk.abstr.numberBinOp($scope0.$const2,$scope0.$const3,'Add');$ret = ($loadname1.tp$call)?$loadname1.tp$call([$binop4],undefined) : Sk.misceval.applyOrSuspend($loadname1,undefined,undefined,undefined,[$binop4]);$blk=1;/* allowing case fallthrough */case 1: /* --- function return or resume suspension --- */if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $call5=$ret;
    /*    12 */ //
    /*    13 */ // line 1:
    /*    14 */ // print(1+2)
    /*    15 */ // ^
    /*    16 */ //
    /*    17 */ $currLineNo = 1;
    /*    18 */ $currColNo = 0;
    /*    19 */ 
    /*    20 */ return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.int_(1);$scope0.$const3 = new Sk.builtin.int_(2);
    /*    21 */ return $scope0;}();
    /*    22 */ $compiledmod;
  </pre>
</details>

生成后代码量看起来很多，但是大部分都是为了提前加载需要使用的方法，全局变量，局部变量和容错处理等代码。

执行`print(1+2)`这段代码在11行，下面是整理之后的代码: 

```javascript
var $scope0 = function($forcegbl, $forceloc) {
  var $loadname1 = Sk.misceval.loadname('print',$gbl);		// 获取print方法
  var $binop4 = Sk.abstr.numberBinOp($scope0.$const2, $scope0.$const3, 'Add')	// 计算1+2的结果
  $ret = $loadname1.tp$call([$binop4], undefined)	// 通过print方法打印$binop4 1+2的结果
  // 如果ret有结果，需要暂停执行
  if ($ret && $ret.$isSuspension) {
    // 先执行这段代码，然后往下执行，这段代码中先输出1+2的结果
    return $saveSuspension($ret,'<stdin>.py',1,0);	// 这个核心方法是new Sk.misceval.Suspension()
  }
}

$scope0.$const2 = new Sk.builtin.int_(1);
$scope0.$const3 = new Sk.builtin.int_(2);
```



### Skulpt程序执行的原理

### 一、入口程序

#### 1.importMainWithBody方法

`importMainWithBody`这个方法接收4个参数，下面是`skulpt`中的源码:

```javascript
/**
 * **在 Skulpt 中运行 Python 代码的函数**
 *
 * @param name {string} 这段代码的文件名称
 * @param dumpJS {boolean} 是否打印出编译好的javascript代码
 * @param body {string} Python的代码
 * @param canSuspend {boolean} 使用暂停异步执行，如果为false，无法使用input方法
 */
Sk.importMainWithBody = function (name, dumpJS, body, canSuspend) {
  	// 初始化Sk内部的变量和参数，清空副作用
    Sk.dateSet = false;
    Sk.filesLoaded = false;
    // 重置导入的模块
    Sk.sysmodules = new Sk.builtin.dict([]);
    Sk.realsyspath = undefined;
		// 重置编译器
    Sk.resetCompiler();

    // 调用Sk.importModuleInternal_方法，编译python代码和执行js代码
    return Sk.importModuleInternal_(name, dumpJS, "__main__", body, undefined, false, canSuspend);
};
```

#### 2.importModuleInternal_方法

`importModuleInternal_`方法是`skulpt`库最核心的方法。Skulpt大致可以分为两个阶段，编译阶段和运行阶段，这个方法相当于整个程序的中心，负责将`python`的代码编译成`javascript`，执行编译好的`javascript`代码，并且输出最后的执行结果。

```javascript
/**
 * @param {string} name 文件名称
 * @param {boolean} dumpJS 是否打印生成的js代码
 * @param {string} modname 模块导入后调用什么，如果没有会给个默认值（即 __main__）
 * @param {string} suppliedPyBody python 代码
 * @param {Object} relativeToPackage 执行相对于这个包的导入
 * @param {boolean} returnUndefinedOnTopLevelNotFound 如果第一次加载失败，返回 'undefined' 而不是抛出 ImportError 
 * @param {boolean} canSuspend 使用暂停异步执行，如果为false，无法使用input方法
 */
Sk.importModuleInternal_ = function (name, dumpJS, modname, suppliedPyBody, relativeToPackage, returnUndefinedOnTopLevelNotFound, canSuspend) {
  // ... 省略部分代码
  var ret = Sk.misceval.chain(topLevelModuleToReturn, function(topLevelModuleToReturn_) {
    var module;
    // ... 省略部分代码
    return Sk.misceval.chain(
      undefined, 
      // 将python代码编译成js的代码，编译阶段的核心代码
      function() {
        // ... 省略部分代码
      	if (typeof suppliedPyBody === "string") {
        		filename = name + ".py";
          	// 编译python的代码
        		co = Sk.compile(suppliedPyBody, filename, "exec", canSuspend);
        } else {
         		// ... 省略部分代码
        }
      	return co	// 返回编译好之后的代码
    	},
      // 执行编译好的js代码，运行节点的核心代码。
      function(co) {
        	// ... 省略部分代码
        
        	// 将这个模块添加到缓存中了
      		Sk.sysmodules.mp$ass_subscript(new Sk.builtin.str(modname), module);
        	// 最终要执行的代码
        	finalcode = co.code;
        
        	// 如果dumpJS为true，输出打印最终的js代码
       		if (dumpJS) {
              // ... 省略部分代码
              Sk.debugout(finalcode);
          }
        	
        	// 执行最终的代码，Sk.global等于window，最终调用的是window.eval(finalcode)这个方法
        	// eval方法是js自执行的方法，会将传入的字符串当做js代码执行 
        	// eval文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
        	modscope = Sk.global["eval"](finalcode);
          module["$d"] = {
              "__name__": new Sk.builtin.str(modname),
              "__doc__": Sk.builtin.none.none$,
              "__package__": co.packagePath ? new Sk.builtin.str(modname) :
              parentModName ? new Sk.builtin.str(absolutePackagePrefix + parentModName) :
              relativePackageName ? relativePackageName : Sk.builtin.none.none$
          };

          // ... 省略部分代码

          return modscope(module["$d"]);
      }
    )
  }
  // 如果可以暂停异步执行代码，返回ret，如果不可以，返回retryOptionalSuspensionOrThrow
  return canSuspend ? ret : Sk.misceval.retryOptionalSuspensionOrThrow(ret);
}
```



### 二、编译代码

#### 1.Sk.compile方法，编译python代码成javascript代码

`Sk.compile`方法将`python`代码编译成`JavaScript`代码。这个方法主要分为以下这几个步骤: 

​	1.词法分析 cst

​	2.语法分析 ast

​	3.语义分析 scope

​	4.目标代码生成

​	5.调用传入的js代码

```javascript
/**
 *@param {string} 源代码
 *@param {string} 带.py后缀的文件名 
 *@param {string} 'exec'、'eval' 或 'single' 模式之一
 *@param {boolean} canSuspend 生成的代码是否支持暂时挂起
 */
Sk.compile = function (source, filename, mode, canSuspend) {		
  	// 词法分析，解析python代码，生成cst树
    var parse = Sk.parse(filename, source);
  	// 语法分析，根据解析之后的python代码生成ast语法树
    var ast = Sk.astFromParse(parse.cst, filename, parse.flags);

    var flags = {};
    flags.cf_flags = parse.flags;
		// 语义分析，解析ast语法树，生成作用域链
    var st = Sk.symboltable(ast, filename);
  	// 进行语义分析，将cst树，作用域链，原始代码组合进行编译
    var c = new Compiler(filename, st, flags.cf_flags, canSuspend, source);
  	// 将ast和之前准备好的数据结构编译成执行的js代码，并且返回这个函数的名称，如 $scope0
    var funcname = c.cmod(ast);
		
  	// 执行的js代码
    var ret = `var $compiledmod = function() {${c.result.join("")}\nreturn ${funcname};}();\n$compiledmod;`;

    return {
        funcname: "$compiledmod",
        code    : ret,
        filename: filename,
    };
};
```



#### 2.词法分析: Sk.parse解析python代码，生成解析树

​		源代码程序是由一个个"词法句号"组成，英文的话叫做**token**，代码中的*if*，*else*等关键字，变量、常量、函数、语句块等标识符，*+*，*-*，*\**，*/*，等操作符号，还有大括号*{}*，小括号*()*等符号，都叫做**token**，**token**是代码中最基本的组成单位。

​		词法分析不能通过空格去进行切割，比如 `a>=1`，应该分成*a*，*>=*，*1*这三个token，在代码中是连在一起的，不一定有空格，正确词法分析的方式是通过**正则文法**(正则表达式)的规则，使用**有限状态机**的算法，来实现具体的词法分析的工作。

**Sk.parse**方法分析出来的解析树层级很多，为了方便了解，特地放到了一个层级下

<details>
  <summary>点击展开python的parse代码</summary>
  <pre>
  	{
        "cst": {
            "type": 294,
            "value": null,
            "context": null,
            "children": [
                {
                    "type": 321,
                    "value": null,
                    "lineno": 1,
                    "col_offset": 0,
                    "children": [
                        {
                            "type": 319,
                            "value": null,
                            "lineno": 1,
                            "col_offset": 0,
                            "children": [
                                {
                                    "type": 266,
                                    "value": null,
                                    "lineno": 1,
                                    "col_offset": 0,
                                    "children": [
                                        {
                                            "type": 1,
                                            "value": "print",
                                            "lineno": 1,
                                            "col_offset": 0,
                                            "children": null
                                        }
                                    ]
                                },
                                {
                                    "type": 332,
                                    "value": null,
                                    "lineno": 1,
                                    "col_offset": 5,
                                    "children": [
                                        {
                                            "type": 7,
                                            "value": "(",
                                            "lineno": 1,
                                            "col_offset": 5,
                                            "children": null
                                        },
                                        {
                                            "type": 260,
                                            "value": null,
                                            "lineno": 1,
                                            "col_offset": 6,
                                            "children": [
                                                {
                                                    "type": 2,
                                                    "value": "1",
                                                    "lineno": 1,
                                                    "col_offset": 6,
                                                    "children": null
                                                },
                                                {
                                                    "type": 14,
                                                    "value": "+",
                                                    "lineno": 1,
                                                    "col_offset": 7,
                                                    "children": null
                                                },
                                                {
                                                    "type": 2,
                                                    "value": "2",
                                                    "lineno": 1,
                                                    "col_offset": 8,
                                                    "children": null
                                                }
                                            ]
                                        },
                                        {
                                            "type": 8,
                                            "value": ")",
                                            "lineno": 1,
                                            "col_offset": 9,
                                            "children": null
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": 4,
                            "value": "\n",
                            "lineno": 1,
                            "col_offset": 10,
                            "children": null
                        }
                    ]
                },
                {
                    "type": 0,
                    "value": "",
                    "lineno": 2,
                    "col_offset": 0,
                    "children": null
                }
            ],
            "used_names": {
                "print": true
            }
        },
        "flags": 0
    }
  </pre>
</details>

解析树也叫具体语法树(Concret Syntax Tree, 简称**CST**)，包含所有语法信息的一个树形结构，是代码的直接翻译。下面是CST的一个具体的结构

```javascript
{
    "type": 1,	// value的类型，在进行分词的时候返回的类型
    "value": "print",	// 对应的value
    "lineno": 1,	//行号
    "col_offset": 0,	// 列号
    "children": null	//子节点
}
```





#### 3.语法分析: Sk.astFromParse 生成ast语法树

CST在解析器中会显得很冗余，很多时候只需要Expression节点，而不需要比如标点符号、注释等等。抽象语法树AST是将具体语法树简化为表示程序含义的结果，是一个更简单的定义，在后续的解析器中更容易使用，并且处理时间更短。

<details>
  <summary>点击展开ast语法树</summary>
  <pre>
  	{
  "body": [
    {
      "value": {
        "func": {
          "id": {
            "$mangled": "print",
            "$savedKeyHash": "print",
            "v": "print"
          },
          "lineno": 1,
          "col_offset": 0
        },
        "args": [
          {
            "left": {
              "n": {
                "v": 1
              },
              "lineno": 1,
              "col_offset": 6
            },
            "right": {
              "n": {
                "v": 2
              },
              "lineno": 1,
              "col_offset": 8
            },
            "lineno": 1,
            "col_offset": 6
          }
        ],
        "keywords": [],
        "lineno": 1,
        "col_offset": 0
      },
      "lineno": 1,
      "col_offset": 0
    }
  ]
}
  </pre>
</details>

抽象语法树因为解析出来的没有标点符合和注释等等，所以print(1+2)和print(1-2)的ast语法树是相等的。



#### 4.Sk.symboltable 语义分析，解析ast语法树，生成作用域链

[作用域](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope)是当前执行的上下文，定义全局或者函数内变量或者引用的访问规则。

定义一段python代码: 

```python
import gt
import turtle

tutu = gt.robot()
tutu.speak('hello world')

print(1+2)

value = input('value: ')

def a(arg):
    print(arg)
    def b ():
        print(arg)
    return b

def c():
    print(value)

b = a('a')
c()
b()
```

下面是这段代码解析之后的词法表

<details>
  <summary>点击展开作用域</summary>
  <pre>
  	{
    "filename": "<stdin>.py",
    "cur": null,
    "stack": [],
    "global": {
        "gt": 3080,
        "turtle": 3072,
        "tutu": 2058,
        "print": 6152,
        "value": 2050,
        "input": 6152,
        "a": 2058,
        "c": 2058,
        "b": 2058
    },
    "curClass": null,
    "tmpname": 0,
    "stss": {
        "5": {
            "symFlags": {
                "gt": 3080,
                "turtle": 3072,
                "tutu": 2058,
                "print": 6152,
                "value": 2050,
                "input": 6152,
                "a": 2058,
                "c": 2058,
                "b": 2058
            },
            "name": "top",
            "varnames": [],
            "children": [
                {
                    "symFlags": {
                        "arg": 10252,
                        "print": 6152,
                        "b": 2058
                    },
                    "name": "a",
                    "varnames": [
                        "arg"
                    ],
                    "children": [
                        {
                            "symFlags": {
                                "print": 6152,
                                "arg": 8200
                            },
                            "name": "b",
                            "varnames": [],
                            "children": [],
                            "blockType": "function",
                            "isNested": true,
                            "hasFree": true,
                            "childHasFree": false,
                            "generator": false,
                            "varargs": false,
                            "varkeywords": false,
                            "returnsValue": false,
                            "lineno": 13,
                            "symbols": {}
                        }
                    ],
                    "blockType": "function",
                    "isNested": false,
                    "hasFree": false,
                    "childHasFree": true,
                    "generator": false,
                    "varargs": false,
                    "varkeywords": false,
                    "returnsValue": true,
                    "lineno": 11,
                    "symbols": {}
                },
                {
                    "symFlags": {
                        "print": 6152,
                        "value": 6152
                    },
                    "name": "c",
                    "varnames": [],
                    "children": [],
                    "blockType": "function",
                    "isNested": false,
                    "hasFree": false,
                    "childHasFree": false,
                    "generator": false,
                    "varargs": false,
                    "varkeywords": false,
                    "returnsValue": false,
                    "lineno": 17,
                    "symbols": {}
                }
            ],
            "blockType": "module",
            "isNested": false,
            "hasFree": false,
            "childHasFree": true,
            "generator": false,
            "varargs": false,
            "varkeywords": false,
            "returnsValue": false,
            "lineno": 0,
            "symbols": {}
        },
        "6": {
            "symFlags": {
                "arg": 10252,
                "print": 6152,
                "b": 2058
            },
            "name": "a",
            "varnames": [
                "arg"
            ],
            "children": [
                {
                    "symFlags": {
                        "print": 6152,
                        "arg": 8200
                    },
                    "name": "b",
                    "varnames": [],
                    "children": [],
                    "blockType": "function",
                    "isNested": true,
                    "hasFree": true,
                    "childHasFree": false,
                    "generator": false,
                    "varargs": false,
                    "varkeywords": false,
                    "returnsValue": false,
                    "lineno": 13,
                    "symbols": {}
                }
            ],
            "blockType": "function",
            "isNested": false,
            "hasFree": false,
            "childHasFree": true,
            "generator": false,
            "varargs": false,
            "varkeywords": false,
            "returnsValue": true,
            "lineno": 11,
            "symbols": {}
        },
        "7": {
            "symFlags": {
                "print": 6152,
                "arg": 8200
            },
            "name": "b",
            "varnames": [],
            "children": [],
            "blockType": "function",
            "isNested": true,
            "hasFree": true,
            "childHasFree": false,
            "generator": false,
            "varargs": false,
            "varkeywords": false,
            "returnsValue": false,
            "lineno": 13,
            "symbols": {}
        },
        "8": {
            "symFlags": {
                "print": 6152,
                "value": 6152
            },
            "name": "c",
            "varnames": [],
            "children": [],
            "blockType": "function",
            "isNested": false,
            "hasFree": false,
            "childHasFree": false,
            "generator": false,
            "varargs": false,
            "varkeywords": false,
            "returnsValue": false,
            "lineno": 17,
            "symbols": {}
        }
    }
}
   </pre>
</details>

上面这段语法表可以拆分成四个作用域，分别是全局作用域(也叫做top作用域、顶层作用域)，a函数作用域，b函数作用域，c函数作用域。子作用域可以直接访问父作用域的变量(闭包就是这样形成的)，b函数作用域的父作用域是a函数作用域，a和c的父作用域是全局作用域，b -> a -> top 这样一连串作用域也叫做作用域链。

下面是作用域链的数据结构: 

```javascript
{
    "symFlags": {	// 变量和引用的标识
        "gt": 3080,
        "turtle": 3072,
        "tutu": 2058,
        "print": 6152,
        "value": 2050,
        "input": 6152,
        "a": 2058,
        "c": 2058,
        "b": 2058
    },
    "name": "top",	// 作用域的名称
    "varnames": [],	// 形参数组，这里保存的是参数的名称
    "blockType": "module",	// 作用域的类型
    "isNested": false,	// 是否嵌套
    "hasFree": false,	// 是否有自由变量
    "childHasFree": true,	// 子节点是否有自由变量
    "generator": false,	// 是否是生成器函数
    "varargs": false,	// 是否有可变参数，也就是python中的*args，相当于js中的剩余参数 ...args
    "varkeywords": false,	// 是否是关键字
    "returnsValue": false, // 是否有返回值
    "lineno": 0,	// 作用域开始的行数
    "symbols": {},
    "children": [	// 子作用域的数组
        {
            "symFlags": {
                "arg": 10252,
                "print": 6152,
                "b": 2058
            },
            "name": "a",
            "varnames": [
                "arg"
            ],
            "children": [
                {
                    "symFlags": {
                        "print": 6152,
                        "arg": 8200
                    },
                    "name": "b",
                    "varnames": [],
                    "children": [],
                    "blockType": "function",
                    "isNested": true,
                    "hasFree": true,
                    "childHasFree": false,
                    "generator": false,
                    "varargs": false,
                    "varkeywords": false,
                    "returnsValue": false,
                    "lineno": 13,
                    "symbols": {}
                }
            ],
            "blockType": "function",
            "isNested": false,
            "hasFree": false,
            "childHasFree": true,
            "generator": false,
            "varargs": false,
            "varkeywords": false,
            "returnsValue": true,
            "lineno": 11,
            "symbols": {}
        },
        {
            "symFlags": {
                "print": 6152,
                "value": 6152
            },
            "name": "c",
            "varnames": [],
            "children": [],
            "blockType": "function",
            "isNested": false,
            "hasFree": false,
            "childHasFree": false,
            "generator": false,
            "varargs": false,
            "varkeywords": false,
            "returnsValue": false,
            "lineno": 17,
            "symbols": {}
        }
    ]
}
```



#### 5.new Compiler 编译代码类，Compiler.cmod(ast) 生成js代码

```javascript
/**
 * @param {string} 文件名
 * @param {SymbolTable} ci 词法作用域链
 * @param {number} flags 标志
 * @param {boolean=} canSuspend 编译后的代码是否可以暂停
 * @param {string=} sourceCodeForAnnotation 原始代码
 */
function Compiler (filename, st, flags, canSuspend, sourceCodeForAnnotation) {
    this.filename = filename;
    this.st = st;
    this.flags = flags;
    this.canSuspend = canSuspend;
    this.interactive = false;
    this.nestlevel = 0;

    this.u = null;
    this.stack = [];

    this.result = [];

    this.allUnits = [];
		
  	// 将python的原始代码用\n切割
    this.source = sourceCodeForAnnotation ? sourceCodeForAnnotation.split("\n") : false;
}
```

#### 6.Compiler.cmod(ast) 生成js代码，这个方法的作用

1.定义js代码的执行入口函数，抛出执行入口函数的名称**$scope0**，激活作用域

2.将python代码切割成多段，然后通过while(true)和switch进行每块代码的执行

3.声明全局的变量，添加执行的限制，比如如果设置了execLimit参数，执行的时间超过时间限制会抛出错误

4.定义执行函数的状态，定义挂起的方法和恢复执行的方法

5.编译执行的代码

```javascript
/**
 * @param {ast} mod python代码的抽象语法树
 * @return {Sk.builtin.str} modfr 编译之后的js函数名称
 */
Compiler.prototype.cmod = function (mod) {
  	// 1
  	// 生成初始的作用域名称，也就是js代码的入口函数，对于上面的"$scope0"这个变量
  	// 激活activateScope作用域，
    var modf = this.enterScope(new Sk.builtin.str("<module>"), mod, 0, this.canSuspend);

  	// 定义执行第几个模块的代码，初始为0
    var entryBlock = this.newBlock("module entry");
  
  	// 2
  	// 前置代码，声明"$scope0"这个函数
    this.u.prefixCode = "var " + modf + "=(function($forcegbl, $forceloc){";
  	// 全局变量定义
    this.u.varDeclsCode =
        "var $gbl = $forcegbl || {}, $blk=" + entryBlock +
        ",$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;" +
        "var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;";

  	// 3
  	// 如果通过Sk.configure设置了execLimit，为程序执行添加一个执行时间的限制
  	// 这个限制是从运行到停止的时间，包括使用input导致程序挂起的时间，如果超过时间就会报错
  	// TimeLimitError: Program exceeded run time limit. on line 1
    if (Sk.execLimit !== null) {
        this.u.varDeclsCode += "if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}";
    }

    if (Sk.yieldLimit !== null && this.u.canSuspend) {
        this.u.varDeclsCode += "if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}";
    }
  
  	// 4
		// 如果代码有暂停的逻辑，就从暂停开始执行
    this.u.varDeclsCode += "var $waking=false; if ("+modf+".$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }" +
        "if (Sk.retainGlobals) {" +
        "    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }" +
        "    else { Sk.globals = $gbl; }" +
        "} else { Sk.globals = $gbl; }";
  
  	// 2
  	// while(true) 当代码中有多个区块的时候，能够按步骤的去执行代码，和后面的switch($blk)配置使用
  	// 添加try catch，捕获错误
    this.u.switchCode = "while(true){try{";
  	// 如果程序运行时间过长是否应该执行中断的函数，这段代码在每次while操作时执行(也就是每次挂起并且恢复的时候)。
    this.u.switchCode += this.outputInterruptTest();
  	// 匹配执行的代码区块，默认都是从第0个开始执行
    this.u.switchCode += "switch($blk){";
    this.u.suffixCode = "}";
    this.u.suffixCode += "}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });";

  	// 判断mod是否是一个ast生成的函数对象
    switch (mod.constructor) {
        case Sk.astnodes.Module:
        		// 5
        		// 执行ast树的编译，也是cmod这个方法的核心代码
            this.cbody(mod.body);
            out("return $loc;");
            break;
        default:
            Sk.asserts.fail("todo; unhandled case in compilerMod");
    }
    this.exitScope();

  	// 5
    this.result.push(this.outputAllUnits());
    return modf;
};
```

cmod方法使用while(true)和switch($blk)执行多个区块代码的原因:

首先我们将一段python代码编译成js的代码

```python
a = input('a: ')
print(a)
```

编译成之后的是这样的

<details>
  <summary>点击js代码</summary>
  <pre>
  while (true) {
      try {
  			switch ($blk) {
          case 0 /* --- module entry --- */:
            /*     3 */ //
            /*     4 */ // line 1:
            /*     5 */ // a = input('a: ')
            /*     6 */ // ^
            /*     7 */ //
            /*     8 */ $currLineNo = 1;
            /*     9 */ $currColNo = 0;
            /*    10 */
            /*    11 */ var $loadname1 =
              $loc.input !== undefined
                ? $loc.input
                : Sk.misceval.loadname("input", $gbl);
            $ret = $loadname1.tp$call
              ? $loadname1.tp$call([$scope0.$const2], undefined)
              : Sk.misceval.applyOrSuspend(
                  $loadname1,
                  undefined,
                  undefined,
                  undefined,
                  [$scope0.$const2]
                );
            $blk = 1;
          /* allowing case fallthrough */ case 1:
            /* --- function return or resume suspension --- */ if (
              $ret &&
              $ret.$isSuspension
            ) {
              return $saveSuspension($ret, "<stdin>.py", 1, 4);
            }
            var $call3 = $ret;
            /*    12 */ //
            /*    13 */ // line 1:
            /*    14 */ // a = input('a: ')
            /*    15 */ //     ^
            /*    16 */ //
            /*    17 */ $currLineNo = 1;
            /*    18 */ $currColNo = 4;
            /*    19 */
            /*    20 */ $loc.a = $call3;
            /*    21 */ //
            /*    22 */ // line 2:
            /*    23 */ // print(a)
            /*    24 */ // ^
            /*    25 */ //
            /*    26 */ $currLineNo = 2;
            /*    27 */ $currColNo = 0;
            /*    28 */
            /*    29 */ var $loadname4 =
              $loc.print !== undefined
                ? $loc.print
                : Sk.misceval.loadname("print", $gbl);
            var $loadname5 =
              $loc.a !== undefined ? $loc.a : Sk.misceval.loadname("a", $gbl);
            $ret = $loadname4.tp$call
              ? $loadname4.tp$call([$loadname5], undefined)
              : Sk.misceval.applyOrSuspend(
                  $loadname4,
                  undefined,
                  undefined,
                  undefined,
                  [$loadname5]
                );
            $blk = 2;
          /* allowing case fallthrough */ case 2:
            /* --- function return or resume suspension --- */ if (
              $ret &&
              $ret.$isSuspension
            ) {
              return $saveSuspension($ret, "<stdin>.py", 2, 0);
            }
            var $call6 = $ret;
            /*    30 */ //
            /*    31 */ // line 2:
            /*    32 */ // print(a)
            /*    33 */ // ^
            /*    34 */ //
            /*    35 */ $currLineNo = 2;
            /*    36 */ $currColNo = 0;
            /*    37 */
            /*    38 */ return $loc;
            throw new Sk.builtin.SystemError(
              "internal error: unterminated block"
            );
        }
      } catch(err) {}
     }
   </pre>
</details>

这是简化之后的逻辑

```javascript
while(true) {
  try{
    switch ($blk) {
      case 0:
        a = input('a: ')
        $blk = 1
      case 1:
        print(a)
        $blk = 2
      case 2:
        // <stdin>.py
        return
    }
  } catch(err) {}
}
```



#### 7.enterScope方法

1.初始化编译的配置，并且将ast挂载到this.u上面

2.通过gensym生成全局唯一的入口模块函数

3.通过this.u.activateScope激活编译配置的out函数

```javascript
/**
 * @param {Sk.builtin.str} name 模块名称
 * @param {Object} key ast语法树
 * @param {number} lineno 行号
 * @param {boolean=} canSuspend 是否允许挂起
 */
Compiler.prototype.enterScope = function (name, key, lineno, canSuspend) {
    var scopeName;
  	// 声明编译的配置对象
    var u = new CompilerUnit();
  	// 从 ast 节点映射到作用域链，添加一个ast节点创建作用域时的id，将其存储这里，供编译器稍后查找使用。
    u.ste = this.st.getStsForAst(key);
    u.name = name;
    u.firstlineno = lineno;
    u.canSuspend = canSuspend || false;

    if (this.u && this.u.private_) {
        u.private_ = this.u.private_;
    }

    this.stack.push(this.u);
    this.allUnits.push(u);
  
  	// 生成一个全局唯一的name，生成的规则如下
  	// "$" + "scope" + count++
    scopeName = this.gensym("scope");
    u.scopename = scopeName;

    this.u = u;
  	// 激活编译配置的out函数
    this.u.activateScope();

    this.nestlevel++;

    return scopeName;
};
```

#### 8.activateScope 在全局声明一个out函数

1.返回一个闭包函数，在全局声明out函数

2.通过[arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)拿到out方法所有的参数，遍历并且插入到this.u.blocks中

```javascript
var out;
CompilerUnit.prototype.activateScope = function () {
    var self = this;
    out = function () {
        var i;
        var b = self.blocks[self.curblock];
        if (b._next === null) {
            for (i = 0; i < arguments.length; ++i) {
                b.push(arguments[i]);
            }
        }
    };
};
```

print(1+2)编译之后的this.u.blocks

```javascript
this.u.blocks = [
    [
        "\n//\n// line ",
        1,
        ":\n// ",
        "print(1+2)",
        "\n// ",
        "^\n//\n",
        "$currLineNo = ",
        1,
        ";\n$currColNo = ",
        0,
        ";\n\n",
        "var ",
        "$loadname1",
        "=",
        "$loc.print",
        "!==undefined?",
        "$loc.print",
        ":Sk.misceval.loadname('",
        "print",
        "',$gbl);",
        ";",
        "var ",
        "$binop4",
        "=",
        "Sk.abstr.numberBinOp(",
        "$scope0.$const2",
        ",",
        "$scope0.$const3",
        ",'",
        "Add",
        "')",
        ";",
        "$ret = (",
        "$loadname1",
        ".tp$call)?",
        "$loadname1",
        ".tp$call(",
        "[$binop4]",
        ",",
        "undefined",
        ") : Sk.misceval.applyOrSuspend(",
        "$loadname1",
        ",undefined,undefined,",
        "undefined",
        ",",
        "[$binop4]",
        ");",
        "$blk=",
        1,
        ";"
    ],
    [
        "if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }",
        "var ",
        "$call5",
        "=",
        "$ret",
        ";",
        "\n//\n// line ",
        1,
        ":\n// ",
        "print(1+2)",
        "\n// ",
        "^\n//\n",
        "$currLineNo = ",
        1,
        ";\n$currColNo = ",
        0,
        ";\n\n",
        "return $loc;"
    ]
]
```



##### 9.cbody的作用: 编译ast的body主体

1.如果模块(类或者函数)有描述，在一个内部的变量上面挂载\_\_doc\_\_属性

2.调用this.vstmt方法，编译单个语句

3.如果代码中有类型注解(func(a: int)，其中的int就是类型注解)，添加类型注解字段\_\_annotations\_\_

```javascript
/**
 * @param {Array} stmts ast抽象语法树
 * @param {Sk.builtin.str=} class_for_super
 */
Compiler.prototype.cbody = function (stmts, class_for_super) {
    var i = 0;

    // 在python中模块本身是一个对象，每个对象都会有一个__doc__属性，该属性用于描述该对象的作用。
    // 比如有一个类
  	// 	class MyClass:
    //		'string.'
    //		def printSay():
    //    	'print say welcome to you.'
    //		   print('say welcome to you.')
		//	print(MyClass.__doc__)	// string.
		//	print(MyClass.printSay.__doc__)	// print say welcome to you.
  	// 判断是否有__doc__，如果有将其挂在作用域上面，并且输出属性的名称($scope1.$const2)
    const maybeDocstring = this.maybeCDocstringOfBody(stmts);
    if (maybeDocstring !== null) {
        out("$loc.__doc__ = ", maybeDocstring, ";");
        i = 1;
    }
		
  	// 遍历ast树，生成代码
    for (; i < stmts.length; ++i) {
        this.vstmt(stmts[i], class_for_super);
    }
  
    // 添加类型注解
    if (this.u.hasAnnotations) {
        this.u.varDeclsCode += "$loc.__annotations__ = new Sk.builtin.dict();";
    }
};
```

##### 10.outputAllUnits输出所有的编译单位

outputAllUnits将所有的代码(包括前置代码prefixCode，变量定义varDeclsCode，执行步骤switchCode，单个执行步骤block)进行拼接，生成并返回执行的代码

```javascript
Compiler.prototype.outputAllUnits = function () {
    var i;
    var blocks;
    var unit;
    var j;
    var ret = "";
    var block;
    var generatedBlocks;
  	// 遍历模块
    for (j = 0; j < this.allUnits.length; ++j) {
      	// 拼接代码块，将前置代码prefixCode，变量定义varDeclsCode，执行步骤switchCode，单个执行步骤block拼接
        unit = this.allUnits[j];
        ret += unit.prefixCode;
        ret += this.outputLocals(unit);
        ret += unit.varDeclsCode;
        ret += unit.switchCode;
        blocks = unit.blocks;
      	//	遍历代码执行块，生成switch中的case单位
        for (i = 0; i < blocks.length; ++i) {
            block = i;
            while (true) {
                ret += "case " + block + ": /* --- " + blocks[block]._name + " --- */";
                ret += blocks[block].join("");
            }
        }
        ret += unit.suffixCode;
    }
    return ret;
};
```

#### 10.vstmt 编译单个语句

1.生成js代码中的注释，方便定位问题

2.判断ast中对象的构造函数对象，生成不同的代码，比如return语句，会添加一个return语句到js字符串中

​		case Sk.astnodes.Return:
​				out("return ", val, ";");
​            	break;

```javascript
/**
 * 编译一个语句
 * @param {Object} s ast树的一项
 * @param {Sk.builtin.str=} class_for_super
 */
Compiler.prototype.vstmt = function (s, class_for_super) {
    var i;
    var val;
    var n;
    var debugBlock;
    this.u.lineno = s.lineno;
    this.u.linenoSet = false;
    this.u.localtemps = [];

  	// 生成js代码中的注释，方便定位问题
  	/*    13 */ // line 8:
    /*    14 */ // print(MyClass.__doc__)
    /*    15 */ // ^
    /*    16 */ //
    /*    17 */ $currLineNo = 8;
    /*    18 */ $currColNo = 0;
    /*    19 */
    this.annotateSource(s);

  	// 判断ast中不同的构造函数对象，生成不同的代码
    switch (s.constructor) {
        case Sk.astnodes.FunctionDef:
            this.cfunction(s, class_for_super);
            break;
        case Sk.astnodes.ClassDef:
            this.cclass(s);
            break;
        case Sk.astnodes.Return:
            if (this.u.ste.blockType !== Sk.SYMTAB_CONSTS.FunctionBlock) {
                throw new Sk.builtin.SyntaxError("'return' outside function", this.filename, s.lineno);
            }
            val = s.value ? this.vexpr(s.value) : "Sk.builtin.none.none$";
            if (this.u.finallyBlocks.length == 0) {
                out("return ", val, ";");
            } else {
                out("$postfinally={returning:",val,"};");
                this._jump(this.peekFinallyBlock().blk);
            }
            break;
        case Sk.astnodes.Delete:
            this.vseqexpr(s.targets);
            break;
        case Sk.astnodes.Assign:
            n = s.targets.length;
            val = this.vexpr(s.value);
            for (i = 0; i < n; ++i) {
                this.vexpr(s.targets[i], val);
            }
            break;
        case Sk.astnodes.AnnAssign:
            return this.cannassign(s);
        case Sk.astnodes.AugAssign:
            return this.caugassign(s);
        case Sk.astnodes.Print:
            this.cprint(s);
            break;
        case Sk.astnodes.For:
            return this.cfor(s);
        case Sk.astnodes.While:
            return this.cwhile(s);
        case Sk.astnodes.If:
            return this.cif(s);
        case Sk.astnodes.Raise:
            return this.craise(s);
        case Sk.astnodes.Try:
            return this.ctry(s);
        case Sk.astnodes.With:
            return this.cwith(s, 0);
        case Sk.astnodes.Assert:
            return this.cassert(s);
        case Sk.astnodes.Import:
            return this.cimport(s);
        case Sk.astnodes.ImportFrom:
            return this.cfromimport(s);
        case Sk.astnodes.Global:
            break;
        case Sk.astnodes.Expr:
            this.vexpr(s.value);
            break;
        case Sk.astnodes.Pass:
            break;
        case Sk.astnodes.Break:
            this.cbreak(s);
            break;
        case Sk.astnodes.Continue:
            this.ccontinue(s);
            break;
        case Sk.astnodes.Debugger:
            out("debugger;");
            break;
        default:
            Sk.asserts.fail("unhandled case in vstmt: " + JSON.stringify(s));
    }
};
```

print(1+2)转换ast之后的代码

<img src="https://s3.jpg.cm/2021/08/17/Ichvhi.png" alt="ast树" style="zoom: 33%;" />

这个对象的构造函数是Sk.astnodes.Expr，这个方法的case Sk.astnodes.Expr，最终执行的是这个方法this.vexpr(s.value)



#### 11.Compiler.prototype.vexpr 编译表达式

1.编译一个表达式，生成js的代码，判断构造函数的类型，然后执行编译

2.print对应的构造函数是Sk.astnodes.Call，逻辑是result = this.ccall(*e*);

```javascript
/**
 * 编译一个表达式。返回js代码
 * 会通过var生成一个变量，并将生成的js代码存储到这个变量中，以便调用代码
 *
 * @param {Object} e 表达式
 * @param {string=} data 要存储在存储操作中的数据数据
 * @param {Object=} augvar var 加载/存储到诸如“+=”之类的增强赋值。
 * （已经 vepr'ed，所以我们可以评估一次并重用于加载和存储操作）
 * @param {Object=} augsubs 预先计算的下标用于增强赋值，如“+=”。
 * （已经 vepr'ed，所以我们可以评估一次并重用于加载和存储操作）
 */
Compiler.prototype.vexpr = function (e, data, augvar, augsubs) {
    var mangled, mname;
    var val;
    var result;
    var nStr;
    if (e.lineno > this.u.lineno) {
        this.u.lineno = e.lineno;
        this.u.linenoSet = false;
    }
    //this.annotateSource(e);
    switch (e.constructor) {
        case Sk.astnodes.BoolOp:
            return this.cboolop(e);
        case Sk.astnodes.BinOp:
            return this._gr("binop", "Sk.abstr.numberBinOp(", this.vexpr(e.left), ",", this.vexpr(e.right), ",'", e.op.prototype._astname, "')");
        case Sk.astnodes.UnaryOp:
            return this._gr("unaryop", "Sk.abstr.numberUnaryOp(", this.vexpr(e.operand), ",'", e.op.prototype._astname, "')");
        case Sk.astnodes.Lambda:
            return this.clambda(e);
        case Sk.astnodes.IfExp:
            return this.cifexp(e);
        case Sk.astnodes.Dict:
            return this.cdict(e);
        case Sk.astnodes.ListComp:
            return this.clistcomp(e);
        case Sk.astnodes.DictComp:
            return this.cdictcomp(e);
        case Sk.astnodes.SetComp:
            return this.csetcomp(e);
        case Sk.astnodes.GeneratorExp:
            return this.cgenexp(e);
        case Sk.astnodes.Yield:
            return this.cyield(e);
        case Sk.astnodes.YieldFrom:
            return this.cyieldfrom(e);
        case Sk.astnodes.Compare:
            return this.ccompare(e);
        case Sk.astnodes.Call:		// 调用一个函数
            result = this.ccall(e);
            // After the function call, we've returned to this line
            this.annotateSource(e);
            return result;
        case Sk.astnodes.Num:
            if (typeof e.n === "number") {
                return e.n;
            } else if (e.n instanceof Sk.builtin.lng) {
                return this.makeConstant("new Sk.builtin.lng('" + e.n.v.toString() + "')"); 
            } else if (e.n instanceof Sk.builtin.int_) {
                if (typeof e.n.v === "number") {
                    return this.makeConstant("new Sk.builtin.int_(" + e.n.v + ")");
                }
                return this.makeConstant("new Sk.builtin.int_('" + e.n.v.toString() + "')"); 
            } else if (e.n instanceof Sk.builtin.float_) {
                // Preserve sign of zero for floats
                nStr = e.n.v === 0 && 1/e.n.v === -Infinity ? "-0" : e.n.v;
                return this.makeConstant("new Sk.builtin.float_(" + nStr + ")");
            } else if (e.n instanceof Sk.builtin.complex) {
                // preserve sign of zero here too
                var real_val = e.n.real === 0 && 1/e.n.real === -Infinity ? "-0" : e.n.real;
                var imag_val = e.n.imag === 0 && 1/e.n.imag === -Infinity ? "-0" : e.n.imag;
                return this.makeConstant("new Sk.builtin.complex(" + real_val + ", " + imag_val + ")");
            }
            Sk.asserts.fail("unhandled Num type");
        case Sk.astnodes.Bytes:
            if (Sk.__future__.python3) {
                const source = [];
                const str = e.s.$jsstr();
                for (let i = 0; i < str.length; i++) {
                    source.push(str.charCodeAt(i));
                }
                return this.makeConstant("new Sk.builtin.bytes([", source.join(", "), "])");
            }
            // else fall through and make a string instead
        case Sk.astnodes.Str:
            return this.makeConstant("new Sk.builtin.str(", getJsLiteralForString(e.s.$jsstr()), ")");
        case Sk.astnodes.Attribute:
            if (e.ctx !== Sk.astnodes.AugLoad && e.ctx !== Sk.astnodes.AugStore) {
                val = this.vexpr(e.value);
            }
            mangled = e.attr["$r"]().v;
            mangled = mangled.substring(1, mangled.length - 1);
            mangled = mangleName(this.u.private_, new Sk.builtin.str(mangled)).v;
            mname = this.makeConstant("new Sk.builtin.str('" + mangled + "')");
            switch (e.ctx) {
                case Sk.astnodes.AugLoad:
                    out("$ret = ", augvar, ".tp$getattr(", mname, ", true);");
                    this._checkSuspension(e);
                    out("\nif ($ret === undefined) {");
                    out("\nthrow new Sk.builtin.AttributeError(", augvar, ".sk$attrError() + \" has no attribute '\" + ", mname,".$jsstr() + \"'\");");
                    out("\n};");
                    return this._gr("lattr", "$ret");
                case Sk.astnodes.Load:
                    out("$ret = ", val, ".tp$getattr(", mname, ", true);");
                    this._checkSuspension(e);
                    out("\nif ($ret === undefined) {");
                    out("\nthrow new Sk.builtin.AttributeError(", val, ".sk$attrError() + \" has no attribute '\" + ", mname,".$jsstr() + \"'\");");
                    out("\n};");
                    return this._gr("lattr", "$ret");
                case Sk.astnodes.AugStore:
                    // To be more correct, we shouldn't sattr() again if the in-place update worked.
                    // At the time of writing (26/Feb/2015), Sk.abstr.numberInplaceBinOp never returns undefined,
                    // so this will never *not* execute. But it could, if Sk.abstr.numberInplaceBinOp were fixed.
                    out("$ret = undefined;");
                    out("if(", data, "!==undefined){");
                    out("$ret = ",augvar, ".tp$setattr(", mname, ",", data, ", true);");
                    out("}");
                    this._checkSuspension(e);
                    break;
                case Sk.astnodes.Store:
                    out("$ret = ", val, ".tp$setattr(", mname, ",", data, ", true);");
                    this._checkSuspension(e);
                    break;
                case Sk.astnodes.Del:
                    out("$ret = ", val, ".tp$setattr(", mname, ", undefined, true);");
                    this._checkSuspension(e);
                    break;
                case Sk.astnodes.Param:
                default:
                    Sk.asserts.fail("invalid attribute expression");
            }
            break;
        case Sk.astnodes.Subscript:
            switch (e.ctx) {
                case Sk.astnodes.AugLoad:
                    out("$ret = Sk.abstr.objectGetItem(",augvar,",",augsubs,", true);");
                    this._checkSuspension(e);
                    return this._gr("gitem", "$ret");
                case Sk.astnodes.Load:
                case Sk.astnodes.Store:
                case Sk.astnodes.Del:
                    return this.vslice(e.slice, e.ctx, this.vexpr(e.value), data);
                case Sk.astnodes.AugStore:
                    // To be more correct, we shouldn't sattr() again if the in-place update worked.
                    // At the time of writing (26/Feb/2015), Sk.abstr.numberInplaceBinOp never returns undefined,
                    // so this will never *not* execute. But it could, if Sk.abstr.numberInplaceBinOp were fixed.

                    out("$ret=undefined;");
                    out("if(", data, "!==undefined){");
                    out("$ret=Sk.abstr.objectSetItem(",augvar,",",augsubs,",",data,", true)");
                    out("}");
                    this._checkSuspension(e);
                    break;
                case Sk.astnodes.Param:
                default:
                    Sk.asserts.fail("invalid subscript expression");
            }
            break;
        case Sk.astnodes.Name:
            return this.nameop(e.id, e.ctx, data);
        case Sk.astnodes.NameConstant:
            if (e.ctx === Sk.astnodes.Store || e.ctx === Sk.astnodes.AugStore || e.ctx === Sk.astnodes.Del) {
                throw new Sk.builtin.SyntaxError("can not assign to a constant name");
            }

            switch (e.value) {
                case Sk.builtin.none.none$:
                    return "Sk.builtin.none.none$";
                case Sk.builtin.bool.true$:
                    return "Sk.builtin.bool.true$";
                case Sk.builtin.bool.false$:
                    return "Sk.builtin.bool.false$";
                default:
                    Sk.asserts.fail("invalid named constant");
            }
            break;
        case Sk.astnodes.List:
            return this.ctuplelistorset(e, data, "list");
        case Sk.astnodes.Tuple:
            return this.ctuplelistorset(e, data, "tuple");
        case Sk.astnodes.Set:
            return this.ctuplelistorset(e, data, "set");
        case Sk.astnodes.Starred:
            switch (e.ctx) {
                case Sk.astnodes.Store:
                    /* In all legitimate cases, the Starred node was already replaced
                     * by compiler_list/compiler_tuple. XXX: is that okay? */
                    throw new Sk.builtin.SyntaxError("starred assignment target must be in a list or tuple", this.filename, e.lineno);
                default:
                    throw new Sk.builtin.SyntaxError("can't use starred expression here", this.filename, e.lineno);
            }
        case Sk.astnodes.JoinedStr:
            return this.cjoinedstr(e);
        case Sk.astnodes.FormattedValue:
            return this.cformattedvalue(e);
        case Sk.astnodes.Ellipsis:
            return this.makeConstant("Sk.builtin.ellipsis");
        default:
            Sk.asserts.fail("unhandled case " + e.constructor.name + " vexpr");
    }
};
```



##### 12.Compiler.prototype.ccall定义函数的调用

1.递归调用vexpr方法，生成函数，并且返回函数名称

2.调用cunpackstarstoarray方法生成函数需要的参数列表

```javascript
Compiler.prototype.ccall = function (e) {
  	// 递归生成函数，并且返回函数名称: $loadname1
    var func = this.vexpr(e.func);
    var kwarray = null;

  	// 生成函数的参数: [$binop4]
    let positionalArgs = this.cunpackstarstoarray(e.args, !Sk.__future__.python3);
    let keywordArgs = "undefined";
  	
	  // ...省略部分代码

  	// 添加执行的代码
  	// $ret = $loadname1.tp$call
    //         ? $loadname1.tp$call([$binop4], undefined)
    //         : Sk.misceval.applyOrSuspend(
    //            $loadname1,
    //            undefined,
    //            undefined,
   	//            undefined,
    //            [$binop4]
    //          );
    out ("$ret = (",func,".tp$call)?",func,".tp$call(",positionalArgs,",",keywordArgs,") : Sk.misceval.applyOrSuspend(",func,",undefined,undefined,",keywordArgs,",",positionalArgs,");");

    this._checkSuspension(e);

    return this._gr("call", "$ret");
};
```

##### 13.Compiler.prototype.nameop 名称操作

```javascript
/**
 * @param {Sk.builtin.str} name
 * @param {Object} ctx
 * @param {string=} dataToStore
 */
Compiler.prototype.nameop = function (name, ctx, dataToStore) {
    var v;
    var mangledNoPre;
    var dict;
    var scope;
    var optype;
    var op;
    var mangled;

  	// 取出这个函数执行的名称 print
    mangled = mangleName(this.u.private_, name).v;
    op = 0;
    optype = OP_NAME;
  	// 应该在哪个作用域类型去找这个name Sk.SYMTAB_CONSTS.GLOBAL_EXPLICIT = 3
    scope = this.u.ste.getScope(mangled);
    dict = null;
    switch (scope) {
        // ... 省略部分代码
        case Sk.SYMTAB_CONSTS.GLOBAL_EXPLICIT:
            optype = OP_GLOBAL;
        default:
            break;
    }
  
    mangledNoPre = mangled;
	  // 如果这个作用域类型不是function，添加print到$loc这个对象上面
  	// 如果直接调用print(1+2)，this.u.ste.blockType的类型是全局作用域
  	// mangled = $loc.print
    if (this.u.ste.blockType !== Sk.SYMTAB_CONSTS.FunctionBlock) {
        mangled = "$loc." + mangled;
    } else if (optype === OP_FAST || optype === OP_NAME) {
        this.u.localnames.push(mangled);
    }

    switch (optype) {
        // ... 省略部分代码
        case OP_NAME:
            switch (ctx) {
                case Sk.astnodes.Load:
          // var $loadname1 = $loc.print !== undefined ? $loc.print : Sk.misceval.loadname("print", $gbl);
          					// $loc是执行内部维护的一个变量，用来记录当前作用域能访问的所有的变量
                		// 这段代码的目的是先从这个作用域里面找，有没有声明这个变量
                		// 如果没有，就去从Sk.misceval.loadname里面找这个变量
                    return this._gr("loadname", mangled, "!==undefined?", mangled, ":Sk.misceval.loadname('", mangledNoPre, "',$gbl);");
                // ... 省略部分代码
            }
            break;
        // ... 省略部分代码
    }
};
```



Sk.misceval.loadname实现很简单，通过方法的name名称，去Sk.builtins内置函数里面找同名的方法。

```javascript
/**
 * 从给定的命名空间中获取一个 python 对象
 * @param {string} name 名称
 * @param {Object} other 一般为全局变量
 */
Sk.misceval.loadname = function (name, other) {
    var bi;
    var v = other[name];
    if (v !== undefined) {
        return v;
    }

    bi = Sk.builtins[name];
    if (bi !== undefined) {
        return bi;
    }

    throw new Sk.builtin.NameError("name '" + Sk.unfixReserved(name) + "' is not defined");
};
```



#### 14.Sk.builtins 内置函数和Sk.configure预设

Sk.builtins 内置函数定义了skulpt运行时调用的内置函数和数据类型

```javascript
Sk.builtins = {
  // ...
  "bool"      : Sk.builtin.bool,
  "complex"   : Sk.builtin.complex,
  "dict"      : Sk.builtin.dict,
  "file"      : Sk.builtin.file,
  "frozenset" : Sk.builtin.frozenset,
  "function"  : Sk.builtin.func,
  "generator" : Sk.builtin.generator,
  "list"      : Sk.builtin.list
  // ...
}
```

Sk.configure配置覆盖Sk.builtins的内置对象，如果设置了Sk.configure的属性，最终会覆盖到builtins对象。

```javascript
Sk.configure = function (options) {
    "use strict";
    Sk.output = options["output"] || Sk.output;
    Sk.debugout = options["debugout"] || Sk.debugout;
    Sk.uncaughtException = options["uncaughtException"] || Sk.uncaughtException;
    Sk.read = options["read"] || Sk.read;
    Sk.nonreadopen = options["nonreadopen"] || false;
    Sk.fileopen = options["fileopen"] || undefined;
    Sk.filewrite = options["filewrite"] || undefined;
    Sk.timeoutMsg = options["timeoutMsg"] || Sk.timeoutMsg;
    Sk.exportSymbol("Sk.timeoutMsg", Sk.timeoutMsg);
    Sk.sysargv = options["sysargv"] || Sk.sysargv;
  
    Sk.__future__ = options["__future__"] || Sk.python3;
  
    Sk.bool_check(Sk.__future__.print_function, "Sk.__future__.print_function");
    Sk.bool_check(Sk.__future__.division, "Sk.__future__.division");
    Sk.bool_check(Sk.__future__.unicode_literals, "Sk.__future__.unicode_literals");
    Sk.bool_check(Sk.__future__.class_repr, "Sk.__future__.class_repr");
    Sk.bool_check(Sk.__future__.inherit_from_object, "Sk.__future__.inherit_from_object");
    Sk.bool_check(Sk.__future__.super_args, "Sk.__future__.super_args");
    Sk.bool_check(Sk.__future__.octal_number_literal, "Sk.__future__.octal_number_literal");
    Sk.bool_check(Sk.__future__.bankers_rounding, "Sk.__future__.bankers_rounding");
    Sk.bool_check(Sk.__future__.python_version, "Sk.__future__.python_version");
    Sk.bool_check(Sk.__future__.dunder_round, "Sk.__future__.dunder_round");
    Sk.bool_check(Sk.__future__.exceptions, "Sk.__future__.exceptions");
    Sk.bool_check(Sk.__future__.no_long_type, "Sk.__future__.no_long_type");
    Sk.bool_check(Sk.__future__.ceil_floor_int, "Sk.__future__.ceil_floor_int");
    Sk.bool_check(Sk.__future__.silent_octal_literal, "Sk.__future__.silent_octal_literal");
    Sk.imageProxy = options["imageProxy"] || "http://localhost:8080/320x";
    Sk.inputfun = options["inputfun"] || Sk.inputfun;
    Sk.inputfunTakesPrompt = options["inputfunTakesPrompt"] || false;
    Sk.retainGlobals = options["retainglobals"] || options["retainGlobals"] || false;
    Sk.debugging = options["debugging"] || false;
    Sk.killableWhile = options["killableWhile"] || false;
    Sk.killableFor = options["killableFor"] || false;
    if (Sk.signals === true) {
        Sk.signals = {
            listeners: [],
            addEventListener(handler) {
                Sk.signals.listeners.push(handler);
            },
            removeEventListener(handler) {
                var index = Sk.signals.listeners.indexOf(handler);
                if (index >= 0) {
                    Sk.signals.listeners.splice(index, 1); // Remove items
                }
            },
            signal(signal, data) {
                for (var i = 0; i < Sk.signals.listeners.length; i++) {
                    Sk.signals.listeners[i].call(null, signal, data);
                }
            },
        };
    } else {
        Sk.signals = null;
    }

    Sk.breakpoints =
        options["breakpoints"] ||
        function () {
            return true;
        };
    Sk.setTimeout = options["setTimeout"];
    if (Sk.setTimeout === undefined) {
        if (typeof setTimeout === "function") {
            Sk.setTimeout = function (func, delay) {
                setTimeout(func, delay);
            };
        } else {
            Sk.setTimeout = function (func, delay) {
                func();
            };
        }
    }

    if ("execLimit" in options) {
        Sk.execLimit = options["execLimit"];
    }

    if ("yieldLimit" in options) {
        Sk.yieldLimit = options["yieldLimit"];
    }

    if (options["syspath"]) {
        Sk.syspath = options["syspath"];
        Sk.asserts.assert(Sk.isArrayLike(Sk.syspath));
        Sk.realsyspath = undefined;
        Sk.sysmodules = new Sk.builtin.dict([]);
    }
};
```



### 三、词法分析Sk.parse

Sk.parse在parser.js中，这个方法的作用是，将代码进行词法分析，并且生产cst具体语法树

这个方法调用了三个核心的方法

1.makeParser生成一个parser对象

2.Sk._tokenize，通过正则文法，对一行代码进行分词，并且返回token的info信息

3.parser.addtoken 通过有限状态机，添加一个token字符到parse对象中

```javascript
Sk.parse = function parse (filename, input) {
    var T_COMMENT = Sk.token.tokens.T_COMMENT;
    var T_NL = Sk.token.tokens.T_NL;
    var T_OP = Sk.token.tokens.T_OP;
    var T_ENDMARKER = Sk.token.tokens.T_ENDMARKER;
    var T_ENCODING = Sk.token.tokens.T_ENCODING;

    var endmarker_seen = false;
    var parser = makeParser(filename);

    // 将原始代码文件通过\n切割生成数组，并且进行数组的反转
    function readline(input) {
        var lines = input.split("\n").reverse().map(function (l) { return l + "\n"; });

        return function() {
          	// 使用的时候通过pop从后往前取出，因为之前进行了数组反转，所以取出的第一项是第一行代码
            return lines.pop();
        };
    }
		//1
    Sk._tokenize(filename, readline(input), "utf-8", 
                 // 2
      function (tokenInfo) {
        var s_lineno = tokenInfo.start[0];
        var s_column = tokenInfo.start[1];
        var type = null;
        var prefix, lineno, column;
	      // 遇到注释，或者\n，或者特殊符号
        if (tokenInfo.type === T_COMMENT || tokenInfo.type === T_NL || tokenInfo.type === T_ENCODING) {
          	// 保存这个字符
            prefix += tokenInfo.value;
            lineno = tokenInfo.end[0];
            column = tokenInfo.end[1];
          	// 如果遇到\n，将lineno + 1，定位到下一行的行首
            if (tokenInfo.string[tokenInfo.string.length - 1] === "\n") {
                lineno += 1;
                column = 0;
            }
        } else {
          	// 如果在编译的时候，检测到这个token是一个特殊字符，设置type的类型
            if (tokenInfo.type === T_OP) {
                type = Sk.OpMap[tokenInfo.string];
            }
						
          	// 在编译器里面添加这个token，内部实现了一个有限状态机
            parser.addtoken(type || tokenInfo.type, tokenInfo.string, [tokenInfo.start, tokenInfo.end, tokenInfo.line]);
        }
    });

    // 返回标识和cst树
    return {"cst": parser.rootnode, "flags": parser.p_flags};
};
```



#### 1._tokenize 通过正则文法进行字符的匹配

_tokenize函数内部做了下面几件事

1.生成匹配字符串的正则表达式PseudoTokenRegexp [正则在线测试网站](https://c.runoob.com/front-end/854)

```javascript
/[ \f\t]*((\\\r?\n|$|#[^\r\n]*|((|FR|RF|Br|BR|Fr|r|B|R|b|bR|f|rb|rB|F|Rf|U|rF|u|RB|br|fR|fr|rf|Rb)'''|(|FR|RF|Br|BR|Fr|r|B|R|b|bR|f|rb|rB|F|Rf|U|rF|u|RB|br|fR|fr|rf|Rb)"""))|(([0-9](?:_?[0-9])*[jJ]|(([0-9](?:_?[0-9])*\.(?:[0-9](?:_?[0-9])*)?|\.[0-9](?:_?[0-9])*)([eE][-+]?[0-9](?:_?[0-9])*)?|[0-9](?:_?[0-9])*[eE][-+]?[0-9](?:_?[0-9])*)[jJ])|(([0-9](?:_?[0-9])*\.(?:[0-9](?:_?[0-9])*)?|\.[0-9](?:_?[0-9])*)([eE][-+]?[0-9](?:_?[0-9])*)?|[0-9](?:_?[0-9])*[eE][-+]?[0-9](?:_?[0-9])*)|(0[xX](?:_?[0-9a-fA-F])+|0[bB](?:_?[01])+|0([oO])(?:_?[0-7])+|(?:0(?:_?0)*|[1-9](?:_?[0-9])*)))|(\r?\n|(~|\}|\|=|\||\{|\^=|\^|\]|\[|@=|@|>>=|>>|>=|>|==|=|<=|<<=|<<|<|;|:|/=|//=|//|/|\.\.\.|\.|->|-=|-|,|\+=|\+|\*=|\*\*=|\*\*|\*|\)|\(|&=|&|%=|%|!=))|((|FR|RF|Br|BR|Fr|r|B|R|b|bR|f|rb|rB|F|Rf|U|rF|u|RB|br|fR|fr|rf|Rb)'[^\n'\\]*(?:\\.[^\n'\\]*)*('|\\\r?\n)|(|FR|RF|Br|BR|Fr|r|B|R|b|bR|f|rb|rB|F|Rf|U|rF|u|RB|br|fR|fr|rf|Rb)"[^\n"\\]*(?:\\.[^\n"\\]*)*("|\\\r?\n))|[_A-Za-z]+)/
```

​		比如要匹配`print(1+2)`这个字符串中的`print`字符，使用的是这个正则\[\_A-Za-z\]\+，[]代表符合\_A-Za-z的字符串都会被匹配，+代表尽量匹配多个

2.在循环中通过正则表达式匹配字符串，每次匹配之后让pos的下标数量增加

3.使用正则的[exec]( )方法将字符串进行切割，比如print(1+2)这个代码，切割成[print , (, 1, +, 2 ,)]这7个匹配的token

```javascript
/**
 * 内部分词函数
 *
 * @param {function(): string} readline 获取这一行代码的函数
 * @param {string} encoding	编码格式
 * @param {function(TokenInfo): void} yield_ 回调函数
 */
function _tokenize(filename, readline, encoding, yield_) {
    // 在这里生成正则表达式是因为可以通过配置更改。
    var LSuffix = !Sk.__future__.python3 ? '(?:L?)' : '';
    var Hexnumber = '0[xX](?:_?[0-9a-fA-F])+' + LSuffix;
    var Binnumber = '0[bB](?:_?[01])+' + LSuffix;
    var Octnumber = '0([oO])(?:_?[0-7])+' + LSuffix;
    var SilentOctnumber = '0([oO]?)(?:_?[0-7])+' + LSuffix;
    var Decnumber = '(?:0(?:_?0)*|[1-9](?:_?[0-9])*)' + LSuffix;
    var Intnumber = group(Hexnumber, Binnumber,
                          (Sk.__future__.silent_octal_literal ? SilentOctnumber : Octnumber), Decnumber);
    var Number_ = group(Imagnumber, Floatnumber, Intnumber);
    var PseudoToken = Whitespace + group(PseudoExtras, Number_, Funny, ContStr, Name);

  	// 生成的正则表达式
    const PseudoTokenRegexp = new RegExp(PseudoToken);

    var lnum = 0,
        parenlev = 0,
        continued = 0,
        numchars = '0123456789',
        contstr = '',
        needcont = 0,
        contline = null,
        indents = [0],
        capos = null,
        endprog = undefined,
        strstart = undefined,
        end = undefined,
        pseudomatch = undefined;

    var last_line = '';
    var line = '';
    while (true) { // 循环切割这一行代码的token
        // 获取这一行的代码
        line = readline();
  
        lnum += 1;
      	// 定义一个变量，从第几个字符开始进行分词
      	// 比如print(1+2)，在将print分词之后，pos的值就会从0变成5
      	// 后面的循环中，这一行代码就从下标5开始分词
        var pos = 0;
        var max = line.length;

      	// 有连续的字符的时候，进行匹配的逻辑，endprog的正则表达式 /^[^"\\]*(?:(?:\\.|"(?!""))[^"\\]*)*"""/
      	// 比如
      	//	print(
        //  """
        //      1+2
        //  """
        // )
        if (contstr) {
            endprog.lastIndex = 0;
            var endmatch = endprog.exec(line);
            if (endmatch) {
							// ... 省略部分代码
            }
          		// ... 省略部分代码
        }

        while (pos < max) {
            // 从这一行代码中获取下标为pos的字符
            capos = line.charAt(pos);
          	// 如果capos为空格，让pos加1，并且重新设置capos
          	// 知道capos不为空格时，说明遇到了需要分词的字符
          	// 这段代码的作用是：再进行分词匹配时，只要遇到空格，就跳过这个字符
            while (capos === ' ' || capos === '\f' || capos === '\t') {
                pos += 1;
                capos = line.charAt(pos);
            }
						
          	// line.substring(pos) 返回下标从pos开始的字符串
          	// PseudoTokenRegexp这个正则表达式是整个分词函数的核心，遇到第一个符合的token就会返回
            pseudomatch = PseudoTokenRegexp.exec(line.substring(pos))
            if (pseudomatch) {
              	// 切割的开始下标
                var start = pos;
              	// 切割的结束下标
                var end = start + pseudomatch[1].length;
                var spos = [lnum, start];
                var epos = [lnum, end];
                var pos = end;
                if (start == end) {
                    continue;
                }
								
              	// 分词的token
                var token = line.substring(start, end);
              	// 这个token的第一个字符
                var initial = line[start];
              	// 判断到第一个字符是数字，说明这个token是number类型，执行回调
                if (contains(numchars, initial) ||
                    (initial == '.' && token != '.' && token != '...')) {
                    yield_(new TokenInfo(tokens.T_NUMBER, token, spos, epos, line));
                // 判断第一个字符是'\r\n'中的一个，往下走一行
                } else if (contains('\r\n', initial)) {
                    if (parenlev > 0) {
                        yield_(new TokenInfo(tokens.T_NL, token, spos, epos, line));
                    } else {
                        yield_(new TokenInfo(tokens.T_NEWLINE, token, spos, epos, line));
                    }
                // 如果第一个字符是#开头，说明这个token是注释代码
                } else if (initial == '#') {
                    yield_(new TokenInfo(tokens.T_COMMENT, token, spos, epos, line));
                // 如果token是	'''或者"""中的一个，说明是多行字符，走多行的逻辑
                } else if (contains(triple_quoted, token)) {
                    endprog = RegExp(endpats[token]);
                    endmatch = endprog.exec(line.substring(pos));
                    if (endmatch) {
                        pos = endmatch[0].length + pos;
                        token = line.substring(start, pos);
                        yield_(new TokenInfo(tokens.T_STRING, token, spos, [lnum, pos], line));
                    } else {
                        strstart = [lnum, start];
                        contstr = line.substring(start);
                        contline = line;
                        break;
                    }
                 // 如果第一个字符是单引号'或者双引号"，这个分词的前两个字符或者前三个字符是引号，说明是字符串
                 // 往下走字符串的逻辑
                } else if (contains(single_quoted, initial) ||
                           contains(single_quoted, token.substring(0, 2)) ||
                           contains(single_quoted, token.substring(0, 3))) {
                    if (token[token.length - 1] == '\n') {
                        strstart = [lnum, start];
                        endprog = RegExp(endpats[initial] ||
                                           endpats[token[1]] ||
                                           endpats[token[2]]);
                        contstr = line.substring(start);
                        needcont = 1;
                        contline = line;
                        break;
                    } else {
                        yield_(new TokenInfo(tokens.T_STRING, token, spos, epos, line));
                    }
								// 如果第一个字符是一个标识符(也就是一个字母)，说明这个是一个变量或者关键字
                // TODO: 之前第一行和第二行报错的问题就是因为这个方法，在进行匹配第一个字符时，这个方法会把这个字母转换成一个
                // Unicode去进行匹配，如果转换的Unicode不符合规则，会返回false，就会走到else的逻辑
                } else if (isidentifier(initial)) {
                    yield_(new TokenInfo(tokens.T_NAME, token, spos, epos, line));
                } else if (initial == '\\') {		//跳过这次匹配
                    continued = 1
                } else {		// 如果都没有匹配到，判断第一项是否是括号
                    if (contains('([{', initial)) {
                        parenlev += 1
                    } else if (contains(')]}', initial)) {
                        parenlev -= 1
                    }
                  	// 如果不是数字，'\r\n'，#开头，'''多行引号，单引号，标识符(字母)，\\
                  	// 调用回调函数，传递tokens.T_OP的type
                  	// 标点符号()[]:会走到这个回调，
                    yield_(new TokenInfo(tokens.T_OP, token, spos, epos, line));
                }
            } else {
              	// 报错，错误的字符
                yield_(new TokenInfo(tokens.T_ERRORTOKEN, line[pos],
                           [lnum, pos], [lnum, pos+1], line));
                pos += 1;
            }
        }
    }
}
```

isidentifier方法

```javascript
/**
 * 测试字符串是否为标识符
 *
 * @param {str} string 被测试的字符
 * @returns {boolean} 是否测试成功
 */
function isidentifier(str) {
    var normalized = str.normalize('NFKC');	// 转换成NFKC格式的Unicode码
    return IS_IDENTIFIER_REGEX.test(normalized);	// 通过IS_IDENTIFIER_REGEX去进行匹配是否符合规则
}
```

解决第一行和第二行报错新增的代码

```javascript
/**
 * 测试字符串是否为标识符
 *
 * @param {str} string 被测试的字符
 * @returns {boolean} 是否测试成功
 */
function isidentifier(str) {
    var normalized = str.normalize('NFKC');
  	// 解决第二行报错的问题，如果字符串是标点符号，直接返回false，而不是返回true
  	// 之前将标点符号转换成Unicode码之后，通过正则匹配会返回true
    if (Object.keys(Sk.token.EXACT_TOKEN_TYPES).includes(str)) return false;
  	// 解决第一行报错的问题，如果Unicode匹配失败，直接拿字符串去进行匹配
    return IS_IDENTIFIER_REGEX.test(normalized) || IS_IDENTIFIER_REGEX.test(str);
}
// 第一行报错的原因是import是单词应该返回true，而返回了false
// 第二行按错的原因是=:(这些是标点符号应该返回false，而返回了true
```



#### 2.parser.addtoken有限状态机

1.声明一个保存所有cst节点的栈，这个栈有shift、pop、push操作

2.进行shift的操作的时候，不会删除栈里面的第一项，而是会将一个新的节点挂到栈里面最后一项的子节点上面，并且修改最后一项的state状态

3.push操作会先将最后一项的state状态修改，然后在往栈里面添加一项

4.pop会从栈里面取出最后一项，并且将最后一项挂载倒数第二项的子节点上面

parser.addtoken这个方法有两个关键的点: 保存子节点的栈this.stack，有限状态机的状态state

```javascript
// Add a token; return true if we're done
Parser.prototype.addtoken = function (type, value, context) {
    var errline;
    var itsfirst;
    var itsdfa;
    var state;
    var v;
    var t;
    var newstate;
    var i;
    var a;
    var arcs;
    var first;
    var states;
    var tp;
	  // 将token转换成一个数字标签，便于在dfa状态机里面进行查询
    var ilabel = this.classify(type, value, context);
    // Sk.ParseTables.tokens[type]

  	// 带label 的 continue，当有多个while语句嵌套时，使用continue跳过循环，默认是跳过离continue最近的while循环
  	// 在while语句添加上label之后，可以在使用时continue label，让js引擎知道跳过的是哪个循环
  	// OUTERWHILE就是这个while的label标签
    OUTERWHILE:
    while (true) {
        tp = this.stack[this.stack.length - 1];
        states = tp.dfa[0];
        first = tp.dfa[1];
        arcs = states[tp.state];

        for (a = 0; a < arcs.length; ++a) {
            i = arcs[a][0];
            newstate = arcs[a][1];
            t = this.grammar.labels[i][0];
            v = this.grammar.labels[i][1];
            if (ilabel === i) {
              	// 移动一个token，将新的token作为子节点添加到栈里面最后的一个节点下面
                this.shift(type, value, newstate, context);
                state = newstate;
                while (states[state].length === 1
                    && states[state][0][0] === 0
                    && states[state][0][1] === state) {
	                  // 删除this.stack的一项值，并且将这个值添加到node中
                    this.pop();
                    if (this.stack.length === 0) {
                        return true;
                    }
                    tp = this.stack[this.stack.length - 1];
                    state = tp.state;
                    states = tp.dfa[0];
                    first = tp.dfa[1];
                return false;
            } else if (t >= 256) {
                itsdfa = this.grammar.dfas[t];
                itsfirst = itsdfa[1];
                if (itsfirst.hasOwnProperty(ilabel)) {
	                  // 添加一个token
                    this.push(t, this.grammar.dfas[t], newstate, context);
                    continue OUTERWHILE;
                }
            }
        }

        // 如果在dfa查询，发现不符合规则，报一个bad input的错误
        if (findInDfa(arcs, [0, tp.state])) {
            this.pop();
            if (this.stack.length === 0) {
                errline = context[0][0];
                throw new Sk.builtin.SyntaxError("too much input", this.filename, errline, context);
            }
        } else {
            errline = context[0][0];
            throw new Sk.builtin.SyntaxError("bad input" + " {" + value + "}", this.filename, errline, context);
        }
    }
};
```

pop方法做的事情是

```javascript
// 从栈中取出一项，并且添加到rootnode上面，这里面一个node，就是cst里面的一个节点
Parser.prototype.pop = function () {
    var node;
    var pop = this.stack.pop();
    var newnode = pop.node;
    if (newnode) {
        if (this.stack.length !== 0) {
            node = this.stack[this.stack.length - 1].node;
            node.children.push(newnode);
        } else {
            this.rootnode = newnode;
            this.rootnode.used_names = this.used_names;
        }
    }
};
```



### 四、语法分析 Sk.astFromParse

... 等待补充

### 五、语义分析 Sk.symboltable

... 等待补充
