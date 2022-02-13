
import {
    REACT_TEXT, REACT_FORWARD_REF_TYPE, REACT_PROVIDER, REACT_CONTEXT,
    REACT_MEMO,
    REACT_FRAGMENT,
    REACT_ELEMENT
} from './ReactSymbols';
import { MOVE, PLACEMENT } from './ReactFlags';
import { addEvent } from './event';
//保存hook状态值的数组
let hookStates = [];
let hookIndex = 0;
let scheduleUpdate;
function render(vdom, container) {
    mount(vdom, container);
    scheduleUpdate = () => {
        hookIndex = 0;
        compareTwoVdom(container, vdom, vdom);
    }
}
export function useRef(initialState) {
    hookStates[hookIndex] = hookStates[hookIndex] || { current: initialState };
    return hookStates[hookIndex++];
}
export function useEffect(callback, deps) {
    let currentIndex = hookIndex;
    if (hookStates[hookIndex]) {
        let [lastDestroy, oldDeps] = hookStates[hookIndex];
        let same = deps && deps.every((dep, index) => dep === oldDeps[index]);
        if (same) {
            hookIndex++;
        } else {
            lastDestroy && lastDestroy();
            let timer = setTimeout(() => {
                //执行callback函数,返回一个销毁函数
                let destroy = callback();
                hookStates[currentIndex] = [destroy, deps];
                clearTimeout(timer);
            });
            hookIndex++;
        }
    } else {
        //开启一个新的宏任务
        let timer = setTimeout(() => {
            //执行callback函数,返回一个销毁函数
            let destroy = callback();
            hookStates[currentIndex] = [destroy, deps];
            clearTimeout(timer);
        });
        hookIndex++;
    }
}
export function useLayoutEffect(callback, deps) {
    let currentIndex = hookIndex;
    if (hookStates[hookIndex]) {
        let [lastDestroy, oldDeps] = hookStates[hookIndex];
        let same = deps && deps.every((dep, index) => dep === oldDeps[index]);
        if (same) {
            hookIndex++;
        } else {
            lastDestroy && lastDestroy();
            queueMicrotask(() => {
                //执行callback函数,返回一个销毁函数
                let destroy = callback();
                hookStates[currentIndex] = [destroy, deps];

            });
            hookIndex++;
        }
    } else {
        //开启一个新的微任务
        queueMicrotask(() => {
            //执行callback函数,返回一个销毁函数
            let destroy = callback();
            hookStates[currentIndex] = [destroy, deps];
        })
        hookIndex++;
    }
}
export function useReducer(reducer, initialState) {
    hookStates[hookIndex] = hookStates[hookIndex] || initialState;
    let currentIndex = hookIndex;
    function dispatch(action) {
        //1.获取老状态
        let oldState = hookStates[currentIndex];
        //如果有reducer就使用reducer计算新状态
        if (reducer) {
            let newState = reducer(oldState, action);
            hookStates[currentIndex] = newState;
        } else {
            //判断action是不是函数，如果是传入老状态，计算新状态
            let newState = typeof action === 'function' ? action(oldState) : action;
            hookStates[currentIndex] = newState;
        }
        scheduleUpdate();
    }
    return [hookStates[hookIndex++], dispatch];
}
export function useState(initialState) {
    return useReducer(null, initialState);
}
export function useMemo(factory, deps) {
    //先判断有没有老值
    if (hookStates[hookIndex]) {
        //let { memo: oldMemo, deps: oldDeps}
        let [oldMemo, oldDeps] = hookStates[hookIndex];
        //判断依赖数组的每一个元素和老的依赖数组中的每一个元素是否相同
        let same = deps && deps.every((dep, index) => dep === oldDeps[index]);
        if (same) {
            hookIndex++;
            return oldMemo;
        } else {
            let newMemo = factory();//{ number }
            hookStates[hookIndex++] = [newMemo, deps];//{memo:newMemo,deps}
            return newMemo;
        }
    } else {
        let newMemo = factory();//{ number }
        hookStates[hookIndex++] = [newMemo, deps];//{memo:newMemo,deps}
        return newMemo;
    }
}
export function useCallback(callback, deps) {
    //先判断有没有老值
    if (hookStates[hookIndex]) {
        //let { memo: oldMemo, deps: oldDeps}
        let [oldCallback, oldDeps] = hookStates[hookIndex];
        //判断依赖数组的每一个元素和老的依赖数组中的每一个元素是否相同
        let same = deps && deps.every((dep, index) => dep === oldDeps[index]);
        if (same) {
            hookIndex++;
            return oldCallback;
        } else {
            hookStates[hookIndex++] = [callback, deps];//{memo:newMemo,deps}
            return callback;
        }
    } else {
        hookStates[hookIndex++] = [callback, deps];//{memo:newMemo,deps}
        return callback;
    }
}

/**
 * 把虚拟DOM转成真实DOM插入容器里
 * @param {*} vdom 虚拟DOM
 * @param {*} container 容器
 */
function mount(vdom, container) {
    let newDOM = createDOM(vdom);
    if (newDOM) {
        //把子DOM挂载到父DOM
        container.appendChild(newDOM);
        //执行子DOM的挂载完成事件
        if (newDOM.componentDidMount) newDOM.componentDidMount();
    }

}
/**
 * 把虚拟DOM转成真实DOM
 * @param {*} vdom 虚拟DOM
 */
function createDOM(vdom) {
    let { type, props, ref, $$typeof } = vdom;
    let dom;//真实DOM
    switch (type.$$typeof) {
        case REACT_MEMO:
            return mountMemoComponent(vdom);//转发组件
        case REACT_FORWARD_REF_TYPE:
            return mountForwardComponent(vdom);//转发组件
        case REACT_PROVIDER:
            return mountProviderComponent(vdom);//转发组件
        case REACT_CONTEXT:
            return mountContextComponent(vdom);//转发组件
        default:
            dom = createElement(type);
            break;
    }
    if (props) {
        updateProps(dom, null, props);
        const children = props.children;
        if (Array.isArray(children)) {
            reconcileChildren(children, dom);
        } else if (typeof children === 'object' && children.$$typeof) {
            children.mountIndex = 0;
            mount(children, dom);
        }
    }
    //让vdom的dom属性指定它创建出来的真实DOM
    vdom.dom = dom;
    if (ref) ref.current = dom;
    return dom;
}
function createElement(type) {
    let dom;
    if (typeof type === 'function') {
        if (type.isReactComponent) {
            //类组件
            return mountClassComponent(vdom);
        } else {//函数组件
            return mountFunctionComponent(vdom);
        }
    } else if (type === REACT_TEXT) {//MemoComponent
        dom = document.createTextNode(props);
    } if (type === REACT_FRAGMENT) {//MemoComponent
        dom = document.createDocumentFragment();
    } else {
        //普通的原生组件 span div
        dom = document.createElement(type);
    }
    return dom;
}
function mountMemoComponent(vdom) {
    let { type: { type: functionComponent }, props } = vdom;
    let renderVdom = functionComponent(props);
    //记录一下老的属性对象
    vdom.prevProps = props;
    vdom.oldRenderVdom = renderVdom;
    return createDOM(renderVdom);
}
function mountProviderComponent(vdom) {
    let { type, props } = vdom;
    let context = type._context;
    context._currentValue = props.value;
    let renderVdom = props.children;
    vdom.oldRenderVdom = renderVdom;
    return createDOM(renderVdom);
}
function mountContextComponent(vdom) {
    let { type, props } = vdom;
    let context = type._context;
    let renderVdom = props.children(context._currentValue);
    vdom.oldRenderVdom = renderVdom;
    return createDOM(renderVdom);
}
function mountForwardComponent(vdom) {
    //render=TextInput函数组件
    //vdom = {type:ForwardedTextInput,props:{},ref:this.textInputRef}
    //vdom = {type:{render},props:{},ref:this.textInputRef}
    let { type, props, ref } = vdom;
    let renderVdom = type.render(props, ref);
    vdom.oldRenderVdom = renderVdom;
    return createDOM(renderVdom);
}
function mountFunctionComponent(vdom) {
    //获取函数本身
    let { type, props } = vdom;
    //把属性对象传递给函数执行，返回要渲染的虚拟DOM
    let renderVdom = type(props);
    //vdom.老的要渲染的虚拟DOM=renderVdom,方便后面的DOM
    vdom.oldRenderVdom = renderVdom;
    return createDOM(renderVdom);
}
function mountClassComponent(vdom) {
    //获取函数本身
    let { type: ClassComponent, props, ref } = vdom;
    //把属性对象传递给函数执行，返回要渲染的虚拟DOM
    let classInstance = new ClassComponent(props);
    //给虚拟DOM添加一个属性classInstance
    vdom.classInstance = classInstance;
    if (ClassComponent.contextType) {
        classInstance.context = ClassComponent.contextType._currentValue;
    }
    //让ref.current指向类组件的实例
    if (ref) ref.current = classInstance;
    if (classInstance.componentWillMount) {
        classInstance.componentWillMount();
    }
    let renderVdom = classInstance.render();
    //把上一次render渲染得到的虚拟DOM
    classInstance.oldRenderVdom = renderVdom;
    let dom = createDOM(renderVdom);
    if (classInstance.componentDidMount) {
        dom.componentDidMount = classInstance.componentDidMount.bind(classInstance);
    }
    return dom;
}
function reconcileChildren(children, parentDOM) {
    children.forEach((child, index) => {
        child.mountIndex = index;
        mount(child, parentDOM);
    });
}
/**
 * 更新真实DOM的属性
 * @param {*} dom 
 * @param {*} oldProps 
 * @param {*} newProps 
 */
function updateProps(dom, oldProps = {}, newProps = {}) {
    for (let key in newProps) {
        //属性中的children属性不在此处处理
        if (key === 'children') {
            continue;
        } else if (key === 'style') {
            let styleObj = newProps[key];
            for (let attr in styleObj) {
                dom.style[attr] = styleObj[attr];
            }
        } else if (/^on[A-Z].*/.test(key)) {
            //dom[key.toLowerCase()] = newProps[key];
            addEvent(dom, key.toLowerCase(), newProps[key]);
        } else {
            dom[key] = newProps[key];//dom.className = 'title ' dom.id = 'title'
        }
    }
    //如果属性在老的属性里，新的属性没有，需要从真实DOM中删除
    for (let key in oldProps) {
        if (!newProps.hasOwnProperty(key)) {
            dom[key] = null;
        }
    }
}
export function findDOM(vdom) {
    if (!vdom) return null;
    //如果vdom上有dom属性，说明这个vdom是一个原生组件span div p
    if (vdom.dom) {
        return vdom.dom;//返回它对应的真实DOM即可
    } else {
        //它可能一个函数组件或者类组件
        //如果是类组件，从vdom.classInstance.oldRenderVdom取要渲染的虚拟DOM
        //如果是函数组件，从vdom.oldRenderVdom取要渲染的虚拟DOM
        let oldRenderVdom = vdom.classInstance ? vdom.classInstance.oldRenderVdom : vdom.oldRenderVdom;
        return findDOM(oldRenderVdom);
    }
}
/**
 * 进行DOM-DIFF对比
 * @param {*} parentDOM 父真实DOM节点
 * @param {*} oldVdom 老的虚拟DOM
 * @param {*} newVdom 新的虚拟DOM
 */
export function compareTwoVdom(parentDOM, oldVdom, newVdom, nextDOM) {
    //如果新老都是null，什么都不做
    if (!oldVdom && !newVdom) {
        return;
        //如果说老的有，新的没有  ,需要删除老的  
    } else if (oldVdom && !newVdom) {
        unMountVdom(oldVdom);
        //老的没有，新的有
    } else if (!oldVdom && newVdom) {
        let newDOM = createDOM(newVdom);
        if (nextDOM) {//nextDOM button
            parentDOM.insertBefore(newDOM, nextDOM);
        } else {
            parentDOM.appendChild(newDOM);
        }
        if (newDOM.componentDidMount) newDOM.componentDidMount();
        //新老都有，但是类型不同，也不能复用  
    } else if (oldVdom && newVdom && oldVdom.type !== newVdom.type) {
        unMountVdom(oldVdom);
        let newDOM = createDOM(newVdom);
        if (nextDOM) {//nextDOM button
            parentDOM.insertBefore(newDOM, nextDOM);
        } else {
            parentDOM.appendChild(newDOM);
        }
        if (newDOM.componentDidMount) newDOM.componentDidMount();
        //新的有，老的也有，并且还一样，可以复用老的真实DOM节点，就可以走深度比较逻辑了，进行比较属性和子节点的过程
    } else {
        updateElement(oldVdom, newVdom);
    }
}
/**
 * 深度比较新老的虚拟DOM的差异，把差异同步到真实DOM
 * @param {*} oldVdom 
 * @param {*} newVdom 
 */
function updateElement(oldVdom, newVdom) {
    if (oldVdom.type.$$typeof === REACT_MEMO) {
        updateMemoComponent(oldVdom, newVdom);
    } else if (oldVdom.type.$$typeof === REACT_CONTEXT) {
        updateContextComponent(oldVdom, newVdom);
    } else if (oldVdom.type.$$typeof === REACT_PROVIDER) {
        updateProviderComponent(oldVdom, newVdom);
    } else if (oldVdom.type === REACT_TEXT) {
        let currentDOM = newVdom.dom = findDOM(oldVdom);
        if (oldVdom.props !== newVdom.props) {
            currentDOM.textContent = newVdom.props;
        }
    } else if (typeof oldVdom.type === 'string') {
        let currentDOM = newVdom.dom = findDOM(oldVdom);
        updateProps(currentDOM, oldVdom.props, newVdom.props);
        updateChildren(currentDOM, oldVdom.props.children, newVdom.props.children);
    } else if (typeof oldVdom.type === 'function') {
        //说明这是一个类组件
        if (oldVdom.type.isReactComponent) {
            //让新的虚拟DOM对象复用老的类组件的实例
            updateClassComponent(oldVdom, newVdom);
        } else {
            updateFunctionComponent(oldVdom, newVdom);
        }
    }
}
function updateMemoComponent(oldVdom, newVdom) {
    //1.获取老的虚拟DOM的比较 方法和老的属性对角
    let { type: { compare }, prevProps } = oldVdom;
    //比较 老属性和对象和新虚拟DOM的属性对象
    if (!compare(prevProps, newVdom.props)) {
        //如果不一样，就要重新渲染，执行dom diff
        let currentDOM = findDOM(oldVdom);
        if (!currentDOM) return;
        let parentDOM = currentDOM.parentNode;
        let { type: { type: functionComponent }, props } = newVdom;
        let newRenderVdom = functionComponent(props);
        compareTwoVdom(parentDOM, oldVdom.oldRenderVdom, newRenderVdom);
        newVdom.prevProps = props;
        newVdom.oldRenderVdom = newRenderVdom;;
    } else {
        newVdom.prevProps = prevProps;
        newVdom.oldRenderVdom = oldVdom.oldRenderVdom;;
    }
}
function updateProviderComponent(oldVdom, newVdom) {
    let currentDOM = findDOM(oldVdom);
    if (!currentDOM) return;
    let parentDOM = currentDOM.parentNode;
    let { type, props } = newVdom;
    let context = type._context;
    context._currentValue = props.value;
    let newRenderVdom = props.children;
    compareTwoVdom(parentDOM, oldVdom.oldRenderVdom, newRenderVdom);
    newVdom.oldRenderVdom = newRenderVdom;
}
function updateContextComponent(oldVdom, newVdom) {
    let currentDOM = findDOM(oldVdom);
    if (!currentDOM) return;
    let parentDOM = currentDOM.parentNode;
    let { type, props } = newVdom;
    let context = type._context;
    let newRenderVdom = props.children(context._currentValue);
    compareTwoVdom(parentDOM, oldVdom.oldRenderVdom, newRenderVdom);
    newVdom.oldRenderVdom = newRenderVdom;
}
/**
 * 更新函数组件
 * @param {*} oldVdom 老的虚拟DOM
 * @param {*} newVdom 新的虚拟DOM
 * 
 */
function updateFunctionComponent(oldVdom, newVdom) {
    let currentDOM = findDOM(oldVdom);
    if (!currentDOM) return;
    let parentDOM = currentDOM.parentNode;
    let { type, props } = newVdom;
    let newRenderVdom = type(props);
    compareTwoVdom(parentDOM, oldVdom.oldRenderVdom, newRenderVdom);
    newVdom.oldRenderVdom = newRenderVdom;
}
/**
 * 更新类组件
 * @param {*} oldVdom 老的虚拟DOM
 * @param {*} newVdom 新的虚拟DOM
 * 
 */
function updateClassComponent(oldVdom, newVdom) {
    let classInstance = newVdom.classInstance = oldVdom.classInstance;
    if (classInstance.componentWillReceiveProps) {
        classInstance.componentWillReceiveProps(newVdom.props);
    }
    //如果父组件更新了，相当于会给子组件传递新的属性
    classInstance.updater.emitUpdate(newVdom.props);
}
/**
 * 
 * @param {*} parentDOM 父DOM
 * @param {*} oldVChildren 老的虚拟DOM null undefined 对象 数组
 * @param {*} newVChildren 新的虚拟DOM
 */
function updateChildren(parentDOM, oldVChildren, newVChildren) {
    oldVChildren = (Array.isArray(oldVChildren) ? oldVChildren : [oldVChildren]).filter(item => item);
    newVChildren = (Array.isArray(newVChildren) ? newVChildren : [newVChildren]).filter(item => item);
    //把老节点存放到一个以key为属性，以节点为值的数组里
    let keyedOldMap = {};
    let lastPlacedIndex = 0;
    oldVChildren.forEach((oldVChild, index) => {
        keyedOldMap[oldVChild.key || index] = oldVChild;
    });
    //存放操作的补丁包
    let patch = [];
    newVChildren.forEach((newVChild, index) => {
        let newKey = newVChild.key || index;
        let oldVChild = keyedOldMap[newKey];
        if (oldVChild) {
            //更新老节点
            updateElement(oldVChild, newVChild);
            if (oldVChild.mountIndex < lastPlacedIndex) {
                patch.push({
                    type: MOVE,
                    oldVChild,
                    newVChild,
                    mountIndex: index
                });
            }
            //如果你复用了一个老节点，那就要从map中删除
            delete keyedOldMap[newKey];
            lastPlacedIndex = Math.max(lastPlacedIndex, oldVChild.mountIndex);
        } else {
            patch.push({
                type: PLACEMENT,
                newVChild,
                mountIndex: index
            });
        }
    });
    //获取所有的要移动的老节点
    let moveChild = patch.filter(action => action.type === MOVE).map(action => action.oldVChild);
    //把剩下的没有复用到的老节点和要移动的节点全部从DOM树中删除
    let deleteVChildren = Object.values(keyedOldMap)
    deleteVChildren.concat(moveChild).forEach(oldVChild => {
        let currentDOM = findDOM(oldVChild);
        parentDOM.removeChild(currentDOM);
    });
    if (patch) {
        patch.forEach(action => {
            let { type, oldVChild, newVChild, mountIndex } = action
            let childNodes = parentDOM.childNodes;//[0 A,1:C:2 E]
            let currentDOM;
            if (type === PLACEMENT) {
                currentDOM = createDOM(newVChild);
                newVChild.mountIndex = mountIndex;
            } else if (type === MOVE) {
                currentDOM = findDOM(oldVChild);
                oldVChild.mountIndex = mountIndex;
            }
            let childNode = childNodes[mountIndex]
            if (childNode) {
                parentDOM.insertBefore(currentDOM, childNode);
            } else {
                parentDOM.appendChild(currentDOM);
            }
        });
    }

}
function unMountVdom(vdom) {
    let { type, props, ref } = vdom;
    //获取当前的真实DOM
    let currentDOM = findDOM(vdom);
    //vdom有classInstance 说明这是一个类组件
    if (vdom.classInstance && vdom.classInstance.componentWillUnmount) {
        vdom.classInstance.componentWillUnmount();
    }
    if (ref) {
        ref.current = null;
    }
    //递归删除子节点
    if (props.children) {
        let children = Array.isArray(props.children) ? props.children : [props.children];
        children.forEach(child => unMountVdom(child));
        //children.forEach(unMountVdom);
    }
    //把此虚拟DOM对应的老的DOM节点从父节点中移除
    if (currentDOM) {
        currentDOM.parentNode.removeChild(currentDOM);
    }
}
const ReactDOM = {
    render
}
export default ReactDOM;