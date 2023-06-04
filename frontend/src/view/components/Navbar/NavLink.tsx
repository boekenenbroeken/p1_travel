import React from 'react';
import { createStyles } from '@mantine/core';
import { BaseComponent } from '../../../app/interfaces/BaseComponent';
import { useGenericStyles } from '../../../app/styles/useGenericStyles';
import classNames from 'classnames';

interface NavLinkProps extends BaseComponent {
    href: string;
}

const useStyles = createStyles((theme) => ({
    link: {
        display: 'block',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: 'white',
    },
}));

export const NavLink = ({ children, href }: NavLinkProps) => {
    const { classes } = useStyles();
    const { classes: genericClasses } = useGenericStyles();

    return (
        <a href={href} className={classNames(classes.link, genericClasses.hoverable)}>
            {children}
        </a>
    );
};
