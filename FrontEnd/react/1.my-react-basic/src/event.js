import { updateQueue } from './Component';
/**
 * 给DOM添加合成事件
 * 不是天然的，人工合成的
 * 为什么要合成？
 * 1.做一个类似面向切面编程的操作 AOP 。在用户自己的handler函数之前做一些事情，之后做一些事情
 * 2.处理浏览器的兼容性 提供兼容所有的浏览器的统一的API，屏蔽浏览器的差异
 * 3.模拟事件冒泡的阻止冒泡的过程
 * @param {*} dom 绑定事件的真实DOM button
 * @param {*} eventType onclick 绑定时候的属性名
 * @param {*} handler 用户自己编写的事件处理函数
 */
function addEvent(dom, eventType, handler) {
    //button._store={}
    let store = dom._store || (dom._store = {});
    //button._store['onclick']=handleClick
    store[eventType] = handler;
    if (!document[eventType])
        document[eventType] = dispatchEvent;
}
/**
 * document身上绑定的点击事件的实践处理函数
 * @param {*} nativeEvent 
 */
function dispatchEvent(nativeEvent) {
    updateQueue.isBatchingUpdate = true;
    //type = click target 事件源DOM 点击的是button的话就是button
    let { type, target } = nativeEvent;
    let eventType = `on${type}`;//onclick
    let syntheticEvent = createSyntheticEvent(nativeEvent);
    while (target) {
        let { _store } = target;
        let handler = _store && _store[eventType];
        if (handler) handler(syntheticEvent);
        if (syntheticEvent.isPropagationStopped) {
            break;
        }
        target = target.parentNode;
    }
    //这一行代码特地没有写
    //updateQueue.isBatchingUpdate = false;
    updateQueue.batchUpdate();
}
function createSyntheticEvent(nativeEvent) {
    let syntheticEvent = {};
    for (let key in nativeEvent) {
        let value = nativeEvent[key];
        if (typeof value === 'function') value = value.bind(nativeEvent);
        syntheticEvent[key] = value;
    }
    syntheticEvent.nativeEvent = nativeEvent;
    syntheticEvent.isPropagationStopped = false;//当前的是否已经阻止冒泡了
    syntheticEvent.stopPropagation = stopPropagation;//调用此方法可以阻止冒泡
    syntheticEvent.defaultPrevented = false;//当前的是否已经阻止冒泡了
    syntheticEvent.preventDefault = preventDefault;//调用此方法可以阻止冒泡
    return syntheticEvent;
}
function preventDefault() {
    const event = this.nativeEvent;
    if (event.preventDefault) {//标准浏览器
        event.preventDefault();
    } else {//IE
        event.returnValue = false;
    }
    this.defaultPrevented = true;
}
function stopPropagation() {
    const event = this.nativeEvent;
    if (event.stopPropagation) {//标准浏览器
        event.stopPropagation();
    } else {//IE
        event.cancelBubble = true;
    }
    this.isPropagationStopped = true;
}
export {
    addEvent
}