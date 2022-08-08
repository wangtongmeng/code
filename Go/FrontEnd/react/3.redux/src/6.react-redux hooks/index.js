import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './src/components/Counter1';
import Counter2 from './src/components/Counter2';
// import Counter3 from './src/components/Counter3';
import { Provider } from 'react-redux';
import store from './src/store';
ReactDOM.render(
<Provider store={store}>
    <Counter1 />
    <Counter2 />
</Provider>, document.getElementById('root'));