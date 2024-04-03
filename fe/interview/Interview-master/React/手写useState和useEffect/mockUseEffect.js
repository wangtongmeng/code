import React, { useState } from "react";
import ReactDOM from "react-dom/client";

let allDeps = [];
let effectIndex = 0;

function useEffect(callBackFn, depArr) {
  if (!depArr) {
    callBackFn();
    allDeps[effectIndex] = depArr;
    effectIndex++;
    return;
  }

  const deps = allDeps[effectIndex];

  const hasChanged = deps ? deps.some((ele, i) => ele !== depArr[i]) : true; // 原有依赖项不存在，相当于第一次直接执行
  if (hasChanged) {
    callBackFn();
    allDeps[effectIndex] = depArr;
  }

  effectIndex++;
}

function MockCom() {
  effectIndex = 0;
  const [counter, setCounter] = useState(0);
  const [str, setStr] = useState("s");

  useEffect(() => {
    console.log("counter 发生了改变", counter);
  }, [counter]);

  useEffect(() => {
    console.log("str 发生了改变", str);
  }, [str]);

  return (
    <div>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter + 1
      </button>

      <div>{str}</div>
      <button
        onClick={() => {
          setStr(str + "s");
        }}
      >
        修改str
      </button>
    </div>
  );
}

export function render() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <>
      <MockCom />
    </>
  );
}
