import React from 'react';
import { Input, Textarea } from '@mantine/core';
import { FormLabel } from './FormLabel';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginBottom: theme.spacing.md,
    },
    errorMessage: {
        position: 'absolute',
        top: '100%',
        color: theme.colors.red[6],
        fontSize: theme.fontSizes.xs,
    },
}));

interface Props {
    label: string;
    name: string;
    type?: 'textarea';
    value: string | number;
    error?: string;
    onChange: (value: string) => void;
}

export const FormField: React.FC<Props> = ({ label, name, type, value, error, onChange }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <FormLabel>{label}</FormLabel>
            {type === 'textarea' ? (
                <Textarea
                    onChange={(event) => onChange(event.target.value)}
                    value={value}
                    name={name}
                    error={!!error}
                />
            ) : (
                <Input
                    type={type}
                    onChange={(event) => onChange(event.target.value)}
                    value={value}
                    name={name}
                    error={!!error}
                />
            )}

            {error && <div className={classes.errorMessage}>{error}</div>}
        </div>
    );
};
