import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, createStyles, Center } from '@mantine/core';
import type { AppDispatch, RootState } from '../../store/store';
import { getTickets } from '../../store/api';
import { colors } from '../../constants/colors';
import { TicketsListTable } from '../../tables/TicketsListTable';
import { Loader } from '../../../view/components/Loader/Loader';
import { Error } from '../../../view/components/Error/Error';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 850,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const TicketsListPage = () => {
    const { classes } = useStyles();
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.tickets);

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    if (loading) return <Loader />;
    if (error) return <Error />;

    return (
        <Center>
            <Paper p="xl" shadow="md" className={classes.formContainer}>
                <h3 className={classes.header}>Tickets list</h3>
                <TicketsListTable items={data} />
            </Paper>
        </Center>
    );
};
