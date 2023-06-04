import { createStyles } from '@mantine/core';

export const useGenericStyles = createStyles((theme) => ({
    hoverable: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
}));
