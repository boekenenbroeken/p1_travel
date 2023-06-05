import { Loader as LoaderUI, Center, createStyles } from '@mantine/core';

const useStyles = createStyles((_theme) => ({
    root: {
        minHeight: '100vh',
    },
}));

export const Loader = () => {
    const { classes } = useStyles();

    return (
        <Center className={classes.root}>
            <LoaderUI size="lg" />
        </Center>
    );
};
