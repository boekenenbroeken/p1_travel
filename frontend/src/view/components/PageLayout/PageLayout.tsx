import React from 'react';
import { BaseComponent } from '../../../app/interfaces/BaseComponent';
import { Navbar } from '../Navbar/Navbar';
import { Container, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    navbar: {
        marginBottom: 40,
    },
}));

export const PageLayout = ({ children }: BaseComponent) => {
    const { classes } = useStyles();
    return (
        <>
            <Navbar className={classes.navbar} />
            <Container>{children}</Container>
        </>
    );
};
