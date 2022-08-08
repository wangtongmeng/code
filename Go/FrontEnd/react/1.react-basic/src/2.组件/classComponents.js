import React from 'react'
import ReactDOM from 'react-dom'
class ClassComponent extends React.Component {
    render(){
        return <div className="title" style={{color:'red'}}><span>{this.props.name}</span>{this.props.children}</div>
    }
}
let element = <ClassComponent name="hello">world</ClassComponent>
ReactDOM.render(element, document.getElementById('root'))