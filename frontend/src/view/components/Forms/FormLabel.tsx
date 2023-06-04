import React from 'react';
import { BaseComponent } from '../../../app/interfaces/BaseComponent';
import classNames from 'classnames';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    label: {
        fontWeight: 'bold',
        marginBottom: theme.spacing.lg,
        fontSize: '.875rem',
    },
}));

export const FormLabel = ({ children, className }: BaseComponent) => {
    const { classes } = useStyles();

    return <span className={classNames(className, classes.label)}>{children}</span>;
};
