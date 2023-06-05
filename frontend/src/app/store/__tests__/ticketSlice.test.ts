import { Ticket } from 'data/models/Ticket';
import {
    addTicketFailure,
    addTicketStart,
    getTicketsFailure,
    getTicketsStart,
    getTicketsSuccess,
    ticketsSlice,
} from '../ticketsSlice';
describe('ticketsSlice', () => {
    let initialState: any;

    beforeEach(() => {
        initialState = {
            data: [],
            loading: false,
            error: null,
        };
    });

    it('should handle getTicketsStart', () => {
        const nextState = ticketsSlice.reducer(initialState, getTicketsStart());
        expect(nextState.loading).toBe(true);
        expect(nextState.error).toBe(null);
    });

    it('should handle getTicketsSuccess', () => {
        const tickets = [
            {
                id: '1',
                title: 'Ticket 1',
                description: 'Description 1',
                price: 10,
                amount: 5,
                supplier: 'Supplier 1',
                email: 'test@gmail.com',
            },
        ] as Ticket[];

        const nextState = ticketsSlice.reducer(initialState, getTicketsSuccess(tickets));
        expect(nextState.data).toEqual(tickets);
        expect(nextState.loading).toBe(false);
        expect(nextState.error).toBe(null);
    });

    it('should handle getTicketsFailure', () => {
        const error = 'Failed to fetch tickets';

        const nextState = ticketsSlice.reducer(initialState, getTicketsFailure(error));
        expect(nextState.loading).toBe(false);
        expect(nextState.error).toBe(error);
    });

    it('should handle addTicketStart', () => {
        const nextState = ticketsSlice.reducer(initialState, addTicketStart());
        expect(nextState.loading).toBe(true);
        expect(nextState.error).toBe(null);
    });

    it('should handle addTicketFailure', () => {
        const error = 'Failed to add ticket';

        const nextState = ticketsSlice.reducer(initialState, addTicketFailure(error));
        expect(nextState.loading).toBe(false);
        expect(nextState.error).toBe(error);
    });
});
