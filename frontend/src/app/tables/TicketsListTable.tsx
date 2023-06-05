import { Table, createStyles } from '@mantine/core';

export interface TicketsListTableItemVM {
    id: string;
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

interface Props {
    items: TicketsListTableItemVM[];
}
const useStyles = createStyles((_theme) => ({
    root: {
        overflowX: 'auto',
    },
}));

export const TicketsListTable = ({ items }: Props) => {
    const { classes } = useStyles();

    const rows = items.map((element) => (
        <tr key={element.id}>
            <td>{element.email}</td>
            <td>{element.title}</td>
            <td>{element.description}</td>
            <td>{element.price}</td>
            <td>{element.amount}</td>
            <td>{element.supplier}</td>
        </tr>
    ));

    return (
        <div className={classes.root}>
            <Table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Supplier</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};
