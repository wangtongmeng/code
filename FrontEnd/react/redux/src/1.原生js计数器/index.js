import { createStore} from 'redux';
let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('add-btn');
let decrementBtn = document.getElementById('minus-btn');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
let initState = { number: 0 };

const reducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}
let store = createStore(reducer);
function render() {
    counterValue.innerHTML = store.getState().number + '';
}
store.subscribe(render);
render();
incrementBtn.addEventListener('click', function () {
    store.dispatch({ type: INCREMENT });
});
decrementBtn.addEventListener('click', function () {
    store.dispatch({ type: DECREMENT });
});