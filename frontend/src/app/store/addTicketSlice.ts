import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddTicketState {
    loading: boolean;
    error: string | null;
}

const initialState: AddTicketState = {
    loading: false,
    error: null,
};

export const addTicketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        addTicketStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        addTicketSuccess: (state) => {
            state.loading = false;
        },
        addTicketFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { addTicketStart, addTicketFailure, addTicketSuccess } = addTicketSlice.actions;

export default addTicketSlice.reducer;
