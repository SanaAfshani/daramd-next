export type Tx = {
    id: string;
    title: string;
    amount: number;
    date: string;
    type: 'in' | 'out';
};