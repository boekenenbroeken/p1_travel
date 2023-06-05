import addTicketReducer, {
    addTicketStart,
    addTicketSuccess,
    addTicketFailure,
} from '../addTicketSlice';

describe('addTicketSlice', () => {
    describe('reducers', () => {
        it('should handle addTicketStart', () => {
            const initialState = {
                loading: false,
                error: null,
            };
            const nextState = addTicketReducer(initialState, addTicketStart());
            expect(nextState).toEqual({ loading: true, error: null });
        });

        it('should handle addTicketSuccess', () => {
            const initialState = {
                loading: true,
                error: null,
            };
            const nextState = addTicketReducer(initialState, addTicketSuccess());
            expect(nextState).toEqual({ loading: false, error: null });
        });

        it('should handle addTicketFailure', () => {
            const initialState = {
                loading: true,
                error: null,
            };
            const errorPayload = 'Failed to add ticket';
            const nextState = addTicketReducer(initialState, addTicketFailure(errorPayload));
            expect(nextState).toEqual({ loading: false, error: errorPayload });
        });
    });
});
