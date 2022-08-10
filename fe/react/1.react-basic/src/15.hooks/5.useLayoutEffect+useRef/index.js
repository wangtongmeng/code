/* 
其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect
useEffect不会阻塞浏览器渲染，而 useLayoutEffect 会浏览器渲染
useEffect会在浏览器渲染结束后执行,useLayoutEffect 则是在 DOM 更新完成后,浏览器绘制之前执行
*/

import React from 'react'
import ReactDOM from 'react-dom'

const Animate = () => {
    const ref = React.useRef()
    //useEffect是在页面渲染之后执行
    //useLayoutEffect的回调函数会在浏览器渲染前执行
    // React.useEffect(() => {
    //     ref.current.style.WebkitTransform = `translate(500px)`
    //     ref.current.style.transition = `all 500ms`
    // })
    React.useLayoutEffect(() => {
        ref.current.style.transform = `translate(500px)`
        ref.current.style.trasition = `all 500ms`
    })
    let style = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'red'
    }
    return (
        <div style={style} ref={ref}></div>
    )
}

ReactDOM.render(<Animate />, document.getElementById('root'))