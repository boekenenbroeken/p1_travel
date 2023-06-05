import { Paper, createStyles, Center } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { AddTicketsForm, AddTicketsFormValues } from '../../forms/AddTicketsForm';
import { colors } from '../../constants/colors';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { addTicket } from '../../store/api';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 500,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const AddTicketsPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const { classes } = useStyles();

    const onFormSubmit = async (values: AddTicketsFormValues) => {
        return dispatch(addTicket({ ...values, price: Number(values.price), id: Date.now() }));
    };

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Add Tickets</h3>
                    <AddTicketsForm onSubmit={onFormSubmit} />
                </Paper>
            </Center>
        </PageLayout>
    );
};
