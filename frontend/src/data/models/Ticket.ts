export interface Ticket {
    id: string;
    email: string;
    title: string;
    description: string;
    price: number | string;
    amount: number;
    supplier: string;
}
