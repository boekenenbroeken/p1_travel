import { FormProps } from '../interfaces/form';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Button, createStyles } from '@mantine/core';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormField } from '../../view/components/Forms/FormField';
import { GRID } from '../constants/grid';
import { FieldErrors } from 'react-hook-form';

const useStyles = createStyles((_theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

export interface AddTicketsFormValues {
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

const defaultValues: AddTicketsFormValues = {
    email: '',
    title: '',
    description: '',
    price: '',
    amount: 1,
    supplier: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.string()
        .required('Price is required')
        .matches(/^(?:\$|€)?\d+(\.\d{1,2})?(?:\$|€)?$/, 'Price must be a valid currency amount'),
    amount: Yup.number()
        .required('Amount is required')
        .positive('Amount must be a positive number'),
    supplier: Yup.string().required('Supplier is required'),
});

const formFields = [
    { name: 'email', label: 'Email', column: GRID.fullColumn },
    { name: 'title', label: 'Title', column: GRID.fullColumn },
    { name: 'description', label: 'Description', type: 'textarea', column: GRID.fullColumn },
    { name: 'price', label: 'Price', column: GRID.halfColumn },
    { name: 'amount', label: 'Amount of tickets', column: GRID.halfColumn },
    { name: 'supplier', label: 'Supplier', column: GRID.fullColumn },
];

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {
    const { control, handleSubmit, formState } = useForm<AddTicketsFormValues>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState as { errors: FieldErrors<AddTicketsFormValues> };
    const { classes } = useStyles();

    return (
        <Grid>
            {formFields.map((field) => (
                <Grid.Col span={field.column} key={field.name}>
                    <Controller
                        name={field.name as keyof AddTicketsFormValues}
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                            <FormField
                                label={field.label}
                                name={name}
                                value={value}
                                error={errors[field.name as keyof AddTicketsFormValues]}
                                onChange={onChange}
                                type={field.type}
                            />
                        )}
                    />
                </Grid.Col>
            ))}
            <Grid.Col span={GRID.fullColumn} className={classes.buttonContainer}>
                <Button onClick={handleSubmit(onSubmit)}>Add tickets</Button>
            </Grid.Col>
        </Grid>
    );
};
