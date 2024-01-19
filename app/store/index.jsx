'use client'
import { createStore } from 'redux';

const initState = { value : 0 };

const counterReducer = (state = initState , action) => {
    //Increase

    if (action.type === "increase") {
        return {value : state.value + action.payload};
    }

    //Decrease

    if (action.type === "decrease") {
        if (state.value === 0) {
            return state
        }
        return {value : state.value - action.payload};
    }

    return state
}

const store = createStore(counterReducer);

export default store;