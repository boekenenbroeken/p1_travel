import { render, screen } from '@testing-library/react';
import { TicketsListTable, TicketsListTableItemVM } from '../TicketsListTable';

describe('TicketsListTable', () => {
    const testItems: TicketsListTableItemVM[] = [
        {
            id: '1',
            email: 'test@example.com',
            title: 'Test Ticket',
            description: 'Test description',
            price: 10,
            amount: 5,
            supplier: 'Test Supplier',
        },
    ];

    test('renders table with correct data', () => {
        render(<TicketsListTable items={testItems} />);

        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(screen.getByText('Price')).toBeInTheDocument();
        expect(screen.getByText('Amount')).toBeInTheDocument();
        expect(screen.getByText('Supplier')).toBeInTheDocument();

        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(testItems.length + 1); // Include header row

        testItems.forEach((item) => {
            expect(screen.getByText(item.email)).toBeInTheDocument();
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByText(item.description)).toBeInTheDocument();
            expect(screen.getByText(item.price)).toBeInTheDocument();
            expect(screen.getByText(item.amount.toString())).toBeInTheDocument();
            expect(screen.getByText(item.supplier)).toBeInTheDocument();
        });
    });
});
