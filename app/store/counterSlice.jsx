import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increase: (state, action) => {
            state.value += action.payload;
        },
        decrease: (state , action) => {
         if (state.value > 0) {
            
            state.value -= action.payload;
            
            }
        },
        // toggle: (state, action) => { 
        //     state.show =! state.show;
        //  }
    },
})

export const counterActions = counterSlice.actions

export default counterSlice;