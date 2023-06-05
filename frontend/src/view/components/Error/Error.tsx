import { Image, Grid, Center, Text, createStyles } from '@mantine/core';
import img from './assets/error.png';

const useStyles = createStyles((_theme) => ({
    root: {
        minHeight: '100vh',
    },
}));

export const Error = () => {
    const { classes } = useStyles();

    return (
        <Center className={classes.root}>
            <Grid>
                <Grid.Col>
                    <Text fw={500}>Ooops, something went wrong...</Text>
                    <Image maw={240} mx="auto" radius="md" src={img} alt="Error image" />
                </Grid.Col>
            </Grid>
        </Center>
    );
};
