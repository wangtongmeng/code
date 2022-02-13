import React from './react';
import ReactDOM from './react-dom';

function TextInput(props, forwardRef) {
  return <input ref={forwardRef} />
}
debugger
const ForwardedTextInput = React.forwardRef(TextInput);
console.log('ForwardedTextInput', ForwardedTextInput);
/**
ForwardedTextInput={
  $$typeof: Symbol(react.forward_ref)
  render: ƒ TextInput(props, forwardRef)
}
 */
class Form extends React.Component {
  constructor() {
    super();
    this.textInputRef = React.createRef();
  }
  getFocus = () => {
    //this.textInputRef.current=input的真实DOM
    this.textInputRef.current.focus();
  }
  render() {
    debugger
    let element = <ForwardedTextInput ref={this.textInputRef} />;
    console.log('element', element);
    return (
      <div>
        {element}
        <button onClick={this.getFocus}>获得焦点</button>
      </div>
    )
  }
}

let element = <Form />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
/**
Function components cannot be given refs.
 Attempts to access this ref will fail. 
 Did you mean to use React.forwardRef()?
 */