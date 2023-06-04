import React from 'react';
import { createStyles, Grid } from '@mantine/core';
import { ChildlessBaseComponent } from '../../../app/interfaces/BaseComponent';
import classNames from 'classnames';
import { NavLink } from './NavLink';
import { colors } from '../../../app/constants/colors';

const useStyles = createStyles((theme) => ({
    navbarContainer: {
        backgroundColor: colors.blue,
        paddingRight: theme.spacing.lg,
        paddingLeft: theme.spacing.lg,
        alignItems: 'center',
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexShrink: 0,
    },
}));

export const Navbar = ({ className }: ChildlessBaseComponent) => {
    const { classes } = useStyles();

    return (
        <Grid className={classNames(className, classes.navbarContainer)}>
            <Grid.Col span={6}>
                <img src="/images/ET-logo.png" alt="Events travel logo" />
            </Grid.Col>
            <Grid.Col span={6} className={classes.linksContainer}>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">Tickets</NavLink>
            </Grid.Col>
        </Grid>
    );
};
