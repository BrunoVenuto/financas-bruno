export type ItemType = 'income' | 'expense';

export type Item = {
    id: string;
    name: string;
    value: number;
    type: ItemType;
    category: string;
    date: Date;
};
