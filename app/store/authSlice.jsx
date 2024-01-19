import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: { show : false },
    reducers: {
        toggle : (state , action) => {

            state.show = !state.show;

        }
    }
})

export const authActions = authSlice.actions

export default authSlice;