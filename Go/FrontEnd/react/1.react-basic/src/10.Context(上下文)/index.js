/* 
在某些场景下，你想在整个组件树中传递数据，但却不想手动地在每一层传递属性。你可以直接在 React 中使用强大的contextAPI解决上述问题
在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props
*/

import React from 'react'
import ReactDOM from 'react-dom'
let ThemeContext = React.createContext(null)
class Title extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}` }}>
                            title
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, padding: '5px ' }}>
                            Header
                            <Title />
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Main extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, margin: '5px', padding: '5px' }}>
                            main
                            <Content />
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Content extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, padding: '5px' }}>
                            Content
                            <button onClick={() => value.changeColor('red')} style={{ color: 'red' }}>红色</button>
                            <button onClick={() => value.changeColor('green')} style={{ color: 'green' }}>绿色</button>
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: 'red' }
    }
    changeColor = (color) => {
        this.setState({ color })
    }
    render() {
        let contextVal = {
            changeColor: this.changeColor,
            color: this.state.color
        }
        return (
            <ThemeContext.Provider value={contextVal}>
                <div style={{ margin: '10px', border: `5px solid ${this.state.color}`, padding: '5px', width: '200px' }}>
                    page
                    <Header />
                    <Main />
                </div>
            </ThemeContext.Provider>
        )

    }
}
ReactDOM.render(<Page />, document.getElementById('root'))