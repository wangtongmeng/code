import React from './react';
import ReactDOM from './react-dom';
function App() {
  const [number1, setNumber1] = React.useState(0);//hookStates[0]=0
  const [number2, setNumber2] = React.useState(0);//hookStates[1]=0
  const handleClick = () => {
    setNumber1(number1 + 1);
    setNumber2(number2 + 1);
  }
  return (
    <div>
      <p>number1:{number1}</p>
      <p>number2:{number2}</p>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
