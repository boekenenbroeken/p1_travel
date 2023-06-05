import { Notifications as NotificationsMantine } from '@mantine/notifications';
import { notifications } from '@mantine/notifications';

const DELAY = 4000;
const LIMIT = 5;

export const Notifications = () => {
    return <NotificationsMantine position="top-right" autoClose={DELAY} limit={LIMIT} />;
};

export const showNotification = (theme: string) => {
    notifications.show({
        title: theme === 'success' ? 'Success' : 'Error',
        message: theme === 'success' ? 'Ticket added successfully' : 'Oops something went wrong',
        color: theme === 'success' ? 'green' : 'red',
    });
};
