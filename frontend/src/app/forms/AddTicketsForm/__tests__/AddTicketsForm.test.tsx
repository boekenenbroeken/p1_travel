import { render, fireEvent, screen } from '@testing-library/react';
import { AddTicketsForm } from '../AddTicketsForm';
import { FORM_FIELDS } from '../consts';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { showNotification } from 'view/components/Notifications/Notifications';
import { act } from 'react-dom/test-utils';

const mockStore = configureStore({
    reducer: {
        addTicket: (state = { loading: false }, action) => state,
    },
});

jest.mock('../../../../view/components/Notifications/Notifications', () => ({
    showNotification: jest.fn(),
}));

describe('AddTicketsForm', () => {
    it('renders all form fields correctly', () => {
        render(
            <Provider store={mockStore}>
                <AddTicketsForm onSubmit={jest.fn()} />
            </Provider>
        );

        FORM_FIELDS.forEach((field) => {
            const inputElement = screen.getByLabelText(field.label);
            expect(inputElement).toBeInTheDocument();
            expect(inputElement).toHaveAttribute('name', field.name);
        });
    });

    it('displays validation errors when form is submitted with invalid data', async () => {
        render(
            <Provider store={mockStore}>
                <AddTicketsForm onSubmit={jest.fn()} />
            </Provider>
        );

        const button = screen.getByText('Add tickets');

        await act(async () => {
            fireEvent.click(button);
        });

        const validationErrors = await screen.findAllByText(/is required/i);

        expect(validationErrors.length).toBeGreaterThan(0);
    });

    it('calls onSubmit prop with form data when form is submitted with valid data', async () => {
        const mockOnSubmit = jest.fn();
        render(
            <Provider store={mockStore}>
                <AddTicketsForm onSubmit={mockOnSubmit} />
            </Provider>
        );

        act(() => {
            fireEvent.change(screen.getByLabelText('Email'), {
                target: { value: 'test@example.com' },
            });
            fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Ticket' } });
            fireEvent.change(screen.getByLabelText('Description'), {
                target: { value: 'Test description' },
            });
            fireEvent.change(screen.getByLabelText('Price'), { target: { value: '1099' } });
            fireEvent.change(screen.getByLabelText('Amount of tickets'), {
                target: { value: '5' },
            });
            fireEvent.change(screen.getByLabelText('Supplier'), {
                target: { value: 'Test Supplier' },
            });
        });

        const button = screen.getByText('Add tickets');

        await act(async () => {
            fireEvent.click(button);
        });

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
            email: 'test@example.com',
            title: 'Test Ticket',
            description: 'Test description',
            price: '1099',
            amount: 5,
            supplier: 'Test Supplier',
        });

        expect(showNotification).toHaveBeenCalledTimes(1);
        expect(showNotification).toHaveBeenCalledWith('success');
    });

    it('displays error notification when an error occurs', async () => {
        const mockOnSubmit = jest.fn(() => {
            throw new Error('Mock error');
        });

        render(
            <Provider store={mockStore}>
                <AddTicketsForm onSubmit={mockOnSubmit} />
            </Provider>
        );

        act(() => {
            fireEvent.change(screen.getByLabelText('Email'), {
                target: { value: 'test@example.com' },
            });
            fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Ticket' } });
            fireEvent.change(screen.getByLabelText('Description'), {
                target: { value: 'Test description' },
            });
            fireEvent.change(screen.getByLabelText('Price'), { target: { value: '1099' } });
            fireEvent.change(screen.getByLabelText('Amount of tickets'), {
                target: { value: '5' },
            });
            fireEvent.change(screen.getByLabelText('Supplier'), {
                target: { value: 'Test Supplier' },
            });
        });

        const button = screen.getByText('Add tickets');

        console.log({ button });

        await act(async () => {
            fireEvent.click(button);
        });

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(showNotification).toHaveBeenCalledTimes(1);
        expect(showNotification).toHaveBeenCalledWith('error');
    });
});
