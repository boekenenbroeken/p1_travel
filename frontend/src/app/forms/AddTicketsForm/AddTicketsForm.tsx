import { useSelector } from 'react-redux';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import { Grid, createStyles } from '@mantine/core';
import { yupResolver } from '@hookform/resolvers/yup';

import { GRID } from '../../constants/grid';
import { FormProps } from '../../interfaces/form';
import { FormField } from '../../../view/components/Forms/FormField';
import { showNotification } from '../../../view/components/Notifications/Notifications';
import { Button } from '../../../view/components/Button/Button';
import type { RootState } from '../../store/store';

import { FORM_FIELDS, INITIAL_VALUES, validationSchema } from './consts';
import { AddTicketsFormValues } from './types';

const useStyles = createStyles((_theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {
    const { loading } = useSelector((state: RootState) => state.addTicket);
    const { control, handleSubmit, formState, reset } = useForm<AddTicketsFormValues>({
        defaultValues: INITIAL_VALUES,
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState as { errors: FieldErrors<AddTicketsFormValues> };
    const { classes } = useStyles();

    const handleFormSubmit = async (data: AddTicketsFormValues) => {
        try {
            await onSubmit(data);
            reset(); // Clear the form values
            showNotification('success');
        } catch (error) {
            showNotification('error');
        }
    };

    return (
        <Grid data-testid="add-tickets-form">
            {FORM_FIELDS.map((field) => (
                <Grid.Col span={field.column} key={field.name}>
                    <Controller
                        name={field.name}
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                            <FormField
                                label={field.label}
                                name={name}
                                value={value}
                                error={errors[field.name]?.message}
                                onChange={onChange}
                                type={field.type}
                            />
                        )}
                    />
                </Grid.Col>
            ))}
            <Grid.Col span={GRID.fullColumn} className={classes.buttonContainer}>
                <Button isLoading={loading} onClick={handleSubmit(handleFormSubmit)}>
                    Add tickets
                </Button>
            </Grid.Col>
        </Grid>
    );
};
