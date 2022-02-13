import React from 'react';
import ReactDOM from 'react-dom';
function Child(props, forwardRef) {
  const inputRef = React.useRef();
  React.useImperativeHandle(forwardRef, () => ({
    focus() {
      inputRef.current.focus();
    }
  }));
  return (<input ref={inputRef} />)
}
let MemoChild = React.memo(Child);

const ForwardedChild = React.forwardRef(MemoChild);

function Parent() {
  let [number, setNumber] = React.useState(0);
  let inputRef = React.useRef();
  let getFocus = () => {
    inputRef.current.focus();
    //inputRef.current.remove();
  }
  return (
    <div>
      <ForwardedChild ref={inputRef} />
      <button onClick={getFocus}>获得焦点</button>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  )
}
ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);
