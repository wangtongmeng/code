import React from './react';
import ReactDOM from './react-dom';
function Child({ data, handleClick }) {
  console.log('Child render');
  return (
    <button onClick={handleClick}>{data.number}</button>
  )
}
const MemoChild = React.memo(Child);
function App() {
  console.log('App render');
  const [name, setName] = React.useState('zhufeng');//0
  const [number, setNumber] = React.useState(0);//1
  //希望data在App组件重新渲染的时候，如果number变了就变成新的data,如果number没有变，就返回老data
  let data = React.useMemo(() => ({ number }), [number]);//2
  //希望handleClick在App组件重新渲染的时候，如果number变了就返回新handleClick,如果number没有变，就返回handleClick
  let handleClick = React.useCallback(() => setNumber(number + 1), [number]);//3
  return (
    <div>
      <input type="text" value={name} onChange={event => setName(event.target.value)} />
      <MemoChild data={data} handleClick={handleClick} />
    </div>
  )
}
//当初次渲染之后hookIndex=4

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
