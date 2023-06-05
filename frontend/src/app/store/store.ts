import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsSlice';
import addTicketReducer from './addTicketSlice';

export const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        addTicket: addTicketReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
