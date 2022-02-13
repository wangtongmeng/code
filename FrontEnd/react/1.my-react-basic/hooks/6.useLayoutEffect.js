import React from './react';
import ReactDOM from './react-dom';

function Animation(props) {
  const ref = React.useRef();
  let style = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'red'
  }
  React.useEffect(() => {
    ref.current.style.transform = `translate(500px)`;
    ref.current.style.transition = 'all 500ms';
  });
  return (
    <div style={style} ref={ref}></div>
  )
}
ReactDOM.render(
  <Animation />,
  document.getElementById('root')
);
