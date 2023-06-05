export interface Ticket {
    id: string;
    email: string;
    title: string;
    description: string;
    price: number | null;
    amount: number;
    supplier: string;
}
