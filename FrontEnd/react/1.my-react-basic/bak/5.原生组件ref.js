import React from './react';
import ReactDOM from './react-dom';
/**
 * ref
 */
class Sum extends React.Component {
  constructor() {
    super();
    this.a = React.createRef();//{current:inputA的真实DOM}
    this.b = React.createRef();//{current:inputB的真实DOM}
    this.result = React.createRef();//{current:inputResult的真实DOM}
  }
  handleClick = (event) => {
    let valueA = this.a.current.value;
    let valueB = this.b.current.value;
    this.result.current.value = valueA + valueB;
  }
  render() {
    return (
      <div>
        <input ref={this.a} />+<input ref={this.b} />
        <button onClick={this.handleClick}>=</button>
        <input ref={this.result} />
      </div>
    )
  }
}
let element = <Sum />;

ReactDOM.render(
  element,
  document.getElementById('root')
);