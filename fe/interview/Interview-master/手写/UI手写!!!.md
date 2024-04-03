

### 实不相瞒1、2面有可能让你写这么个东西，这种要好好写一下
1. 熟练实现一个输入框的双向绑定
2. 列表数据的渲染
3. 列表数据数组的修改

1. 给一个数据列表list，和一个下拉框的type数组
[去这个链接实现](https://codesandbox.io/s/epic-shadow-kwh10?file=/src/App.js)
```javascript
    list = [
        {
            id: 1123,
            name: '一一一',
            type: 'first',
            value: '这是第一个'
        },
        {
            id: 1234,
            name: '二二二',
            type: 'second',
            value: '这是第二个'
        }
    ];
    type = ['first', 'second'];
```
2.渲染出list里每一个值，并且能单独更改其数据
```
基本布局如下
    input(一一一)  下拉菜单控制type('first')   button(删除当前数据)
    input(value)
    后面是第二个数据对应的ui
    input(二二二)  下拉菜单控制type('second')   button(删除当前数据)
    input(这是第二个)
button(list添加一条)
```


