import React from 'react';
import { Table } from '@mantine/core';

export interface TicketsListTableItemVM {
    id: string;
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

interface TicketsListTableProps {
    items: TicketsListTableItemVM[];
}

export const TicketsListTable = ({ items }: TicketsListTableProps) => {
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
    );
};
