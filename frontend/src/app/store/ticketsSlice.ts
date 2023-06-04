import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Ticket {
    id: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
    email: string;
}

interface TicketsState {
    data: Ticket[];
    loading: boolean;
    error: string | null;
}

const initialState: TicketsState = {
    data: [],
    loading: false,
    error: null,
};

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        getTicketsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getTicketsSuccess: (state, action: PayloadAction<Ticket[]>) => {
            state.data = action.payload;
            state.loading = false;
        },
        getTicketsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        addTicketStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        addTicketFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    getTicketsStart,
    getTicketsSuccess,
    getTicketsFailure,
    addTicketStart,
    addTicketFailure,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
