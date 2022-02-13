import React from './react';
import ReactDOM from './react-dom';

function Counter(props) {
  let [number, setNumber] = React.useState(0);
  //此函数会在组件和DOM渲染之后执行，可以执行一些副作用的代码
  React.useEffect(() => {
    console.log('开启定时器');
    const timer = setInterval(() => {
      console.log('setNumber');
      setNumber(number => number + 1);
    }, 1000);
    //useEffect返回一个销毁函数，会在下次执行useEffect回调之前执行
    return () => {
      console.log('清除定时器');
      clearInterval(timer);
    }
  }, [number]);
  return (
    <div>{number}</div>
  )
}
ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
