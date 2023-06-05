import { notifications } from '@mantine/notifications';
import { render, screen } from '@testing-library/react';
import { showNotification } from '../Notifications';

jest.mock('@mantine/notifications', () => ({
    notifications: {
        show: jest.fn(),
    },
}));

describe('showNotification', () => {
    it('calls the notifications.show function with the correct arguments for success theme', () => {
        render(
            <div role="button" onClick={() => showNotification('success')}>
                Click Me
            </div>
        );

        screen.getByText('Click Me').click();

        expect(notifications.show).toHaveBeenCalledWith({
            title: 'Success',
            message: 'Ticket added successfully',
            color: 'green',
        });
    });

    it('calls the notifications.show function with the correct arguments for error theme', () => {
        render(
            <div role="button" onClick={() => showNotification('error')}>
                Click Me
            </div>
        );

        screen.getByText('Click Me').click();

        expect(notifications.show).toHaveBeenCalledWith({
            title: 'Error',
            message: 'Oops something went wrong',
            color: 'red',
        });
    });
});
