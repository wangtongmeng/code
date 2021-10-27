/* 
把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
把创建函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
*/

import React from 'react'
import ReactDOM from 'react-dom'

let Child = ({data, handleClick})=>{
    console.log('Child render');
    return (
        <button onClick={handleClick}>{data.number}</button>
    )
}
let MemoChild = React.memo(Child)

function App() {
    console.log('App render');
    const [name, setName] = React.useState('lisi')
    const [number, setNumber] = React.useState(0)
    let data = React.useMemo(()=>({number}), [number])
    let handleClick = React.useCallback(()=>setNumber(number+1), [number])
    return (
        <div>
            <input type="text" value={name} onChange={event=>setName(event.target.value)} />
            <MemoChild data={data} handleClick={handleClick} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))


/* 
初次渲染
App render
Child render

输入框输入内容
App render N次

点击Child组件
App render
Child render
*/