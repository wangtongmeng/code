import * as types from '../action-types';

let initialState = { number: 0 }

export default function counter1 (state = initialState, action) {
    switch (action.type) {
        case types.ADD1:
            return { number: state.number + 1 };
        case types.MINUS1:
            return { number: state.number - 1 };
        default:
            return state;
    }
}