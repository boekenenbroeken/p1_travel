import React from 'react';
import { Input, Textarea } from '@mantine/core';
import { FormLabel } from './FormLabel';
import { createStyles } from '@mantine/core';
import { colors } from '../../../app/constants/colors';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginBottom: theme.spacing.md,
    },
    errorMessage: {
        position: 'absolute',
        top: '100%',
        color: colors.red,
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
            <FormLabel htmlFor={name}>{label}</FormLabel>
            {type === 'textarea' ? (
                <Textarea
                    id={name}
                    onChange={(event) => onChange(event.target.value)}
                    value={value}
                    name={name}
                    error={!!error}
                />
            ) : (
                <Input
                    type={type}
                    id={name}
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
