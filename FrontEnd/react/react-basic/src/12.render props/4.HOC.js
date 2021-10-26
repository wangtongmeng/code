import React from 'react'
import ReactDOM from 'react-dom'
function withTracker (OldComponent){
    return class MouseTracker extends React.Component {
        constructor(props){
            super(props)
            this.state={x:0,y:0}
        }
        handleMouseMove=(event)=>{
            this.setState({
                x:event.clientX,
                y:event.clientY
            })
        }
        render(){
            return (
                <div onMouseMove={this.handleMouseMove} style={{border: '1px solid red'}}>
                    <OldComponent {...this.state} />
                </div>
            )
        }
    }
}
// render
function Show(props){
    return (
        <React.Fragment>
            <h1>移动鼠标！</h1>
            <p>当前鼠标的位置是({props.x},{props.y})</p>
        </React.Fragment>
    )
}

let HighShow = withTracker(Show)
ReactDOM.render(<HighShow />, document.getElementById('root'))