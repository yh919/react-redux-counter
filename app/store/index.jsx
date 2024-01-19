'use client'
import { createStore } from 'redux';

const initState = { value : 0 , show: false};

const counterReducer = (state = initState , action) => {
    //Increase

    if (action.type === "increase") {
        return {...state ,value : state.value + action.payload };
    }

    //Decrease

    if (action.type === "decrease") {
        if (state.value === 0) {
            return state
        }
        return {...state , value : state.value - action.payload};
    }

    if (action.type === "toggle") {
        return {...state ,show : !state.show}
    }

    return state
}

const store = createStore(counterReducer);

export default store;