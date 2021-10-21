// 基于属性代理：操作组件的props

import React from 'react'
import ReactDOM from 'react-dom'

const loading = message => OldCOmponent => {
    return class extends React.Component {
        render(){
            const state = {
                show: () => {
                    let div = document.createElement('div')
                    div.innerHTML = `<p id="loading" style="position:absolute;top:100px;z-index:10;background-color:black">${message}</p>`;
                    document.body.appendChild(div)
                },
                hide: () => {
                    document.getElementById('loading').remove()
                }
            }
            return (
                <OldCOmponent {...this.props} {...state} />
            )
        }
    }
}

@loading('正在加载中')
class Hello extends React.Component {
    render(){
        return (
            <>
                <div>hello</div>
                <button onClick={this.props.show}>show</button>
                <button onClick={this.props.hide}>hide</button>
            </>
        )
    }
}

// let LoadingHello = loading('正在加载')(Hello)
// ReactDOM.render(<LoadingHello />, document.getElementById('root'))

// 使用装饰器
ReactDOM.render(<Hello />, document.getElementById('root'))