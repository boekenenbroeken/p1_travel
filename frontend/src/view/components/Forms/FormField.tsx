import React from 'react';
import { Input, Textarea } from '@mantine/core';
import { FormLabel } from './FormLabel';

interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    value: any;
    error: any;
    onChange: (value: any) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    name,
    type = 'text',
    value,
    error,
    onChange,
}) => {
    return (
        <>
            <FormLabel>{label}</FormLabel>
            {type === 'textarea' ? (
                <Textarea onChange={onChange} value={value} name={name} error={!!error} />
            ) : (
                <Input type={type} onChange={onChange} value={value} name={name} error={!!error} />
            )}
            {error && <div>{error.message}</div>}
        </>
    );
};
