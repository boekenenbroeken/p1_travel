import { createStyles } from '@mantine/core';
import { BaseComponent } from '../../../app/interfaces/BaseComponent';
import { useGenericStyles } from '../../../app/styles/useGenericStyles';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps extends BaseComponent {
    to: string;
}

const useStyles = createStyles((theme) => ({
    link: {
        display: 'block',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: 'white',
    },

    activeLink: {
        textDecoration: 'underline',
    },
}));

export const NavLink = ({ children, to }: NavLinkProps) => {
    const location = useLocation();
    const { classes } = useStyles();
    const { classes: genericClasses } = useGenericStyles();

    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={classNames(classes.link, genericClasses.hoverable, {
                [classes.activeLink]: isActive,
            })}
        >
            {children}
        </Link>
    );
};
