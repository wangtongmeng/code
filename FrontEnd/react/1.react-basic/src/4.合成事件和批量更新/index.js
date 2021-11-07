import React from 'react'
import ReactDOM from 'react-dom'
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }
    handleClick = () => {
        this.setState({ number: this.state.number + 1 })
        console.log(this.state);
        this.setState({ number: this.state.number + 1 })
        console.log(this.state);
        setTimeout(() => {
            this.setState({ number: this.state.number + 1 })
            console.log(this.state);
            this.setState({ number: this.state.number + 1 })
            console.log(this.state);
        });
    }
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <p>number:{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter title="计数器" />, document.getElementById('root'))



/* 
点击button
{number: 0} index.js:10 
{number: 0} index.js:12 
{number: 2} index.js:15 
{number: 3} index.js:17
*/