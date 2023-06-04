import { AddTicketsPage } from '../pages/add-tickets/AddTicketsPages';
import { TicketsListPage } from '../pages/tickets-list/TicketsListPage';

export const ROUTES = [
    {
        path: '/',
        name: 'Home',
        element: AddTicketsPage,
    },
    {
        path: '/tickets',
        name: 'Tickets',
        element: TicketsListPage,
    },
];
