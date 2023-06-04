import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        fn: (state) => {
            // implement the reducers
        },
    },
});

// Action creators are generated for each case reducer function
export const { fn } = ticketsSlice.actions;

export default ticketsSlice.reducer;
