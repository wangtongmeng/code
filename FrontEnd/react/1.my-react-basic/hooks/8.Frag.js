import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  console.log(<>d</>);
  return (
    <React.Fragment>
      <p>p1</p>
      <p>p2</p>
    </React.Fragment>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
