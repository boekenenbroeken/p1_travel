import axiosLib from 'axios';
import { Ticket } from '../../data/models/Ticket';
import { AppDispatch } from './store';
import {
    getTicketsStart,
    getTicketsSuccess,
    getTicketsFailure,
    addTicketStart,
    addTicketFailure,
} from './ticketsSlice';

const axios = axiosLib.create({
    baseURL: 'http://localhost:5001/',
});

export const fetchTickets = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(getTicketsStart());

        const response = await axios.get('/tickets');
        dispatch(getTicketsSuccess(response.data.data));
    } catch (error: any) {
        dispatch(getTicketsFailure(error.message));
    }
};

export const addTicket = (ticket: Ticket) => async (dispatch: AppDispatch) => {
    try {
        dispatch(addTicketStart());

        await axios.post('/tickets', { ticket });
    } catch (error: any) {
        dispatch(addTicketFailure(error.message));
    }
};
