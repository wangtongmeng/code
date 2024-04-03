import React from "react";
import ReactDOM from "react-dom/client";

let stateArr = [];
let stateIndex = 0;

function useState(initState) {
  const curStateIndex = stateIndex; // 闭包会确定当前State在链表中的位置，所以要求每次渲染stateIndex重置为0，以及state的声明必须按照固定顺序(所以不能用在循环和if判断中)
  stateArr[curStateIndex] = stateArr[curStateIndex] || initState;

  function setState(newState) {
    console.log("setState");
    stateArr[curStateIndex] = newState;
    render(); // 触发更新
  }
  stateIndex++;

  return [stateArr[curStateIndex], setState];
}

function MockCom() {
  const [counter, setCounter] = useState(0);
  const [str, setStr] = useState("s");

  return (
    <div>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        add
      </button>

      <div>{str}</div>
      <button
        onClick={() => {
          setStr(str + "s");
        }}
      >
        add
      </button>
    </div>
  );
}

export function render() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <>
      <MockCom />
      {stateArr}
    </>
  );
  stateIndex = 0; // 此处如果
}
