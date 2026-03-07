import { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    where,
    Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { Item } from '../types/Item';

type Summary = {
    income: number;
    expense: number;
    balance: number;
};

export type CategorySummary = {
    [category: string]: {
        income: number;
        expense: number;
        balance: number;
        transactions: { id: string; name: string; value: number; type: 'income' | 'expense' }[];
    }
};

type UseFinancesReturn = {
    items: Item[];
    filteredItems: Item[];
    summary: Summary;
    categorySummary: CategorySummary;
    filterYear: number;
    filterMonth: number;
    setFilterYear: (y: number) => void;
    setFilterMonth: (m: number) => void;
    addItem: (item: Omit<Item, 'id'>) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
    loading: boolean;
};

export const useFinances = (userId: string): UseFinancesReturn => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    const now = new Date();
    const [filterYear, setFilterYear] = useState(now.getFullYear());
    const [filterMonth, setFilterMonth] = useState(now.getMonth());

    useEffect(() => {
        if (!userId) {
            setLoading(false);
            return;
        }

        const q = query(
            collection(db, 'transactions'),
            where('userId', '==', userId)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data: Item[] = snapshot.docs
                .map((d) => {
                    const raw = d.data();
                    return {
                        id: d.id,
                        name: raw.name,
                        value: raw.value,
                        type: raw.type,
                        category: raw.category,
                        date: (raw.date as Timestamp).toDate(),
                        userId: raw.userId,
                    };
                })
                .sort((a, b) => b.date.getTime() - a.date.getTime());

            setItems(data);
            setLoading(false);
        }, (error) => {
            console.error("Erro useEffect onSnapshot:", error);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [userId]);

    const filteredItems = items.filter((item) => {
        return (
            item.date.getFullYear() === filterYear &&
            item.date.getMonth() === filterMonth
        );
    });

    const summary = filteredItems.reduce(
        (acc, item) => {
            if (item.type === 'income') {
                acc.income += item.value;
                acc.balance += item.value;
            } else {
                acc.expense += item.value;
                acc.balance -= item.value;
            }
            return acc;
        },
        { income: 0, expense: 0, balance: 0 }
    );

    const categorySummary = filteredItems.reduce(
        (acc: CategorySummary, item) => {
            if (!acc[item.category]) {
                acc[item.category] = { income: 0, expense: 0, balance: 0, transactions: [] };
            }
            if (item.type === 'income') {
                acc[item.category].income += item.value;
                acc[item.category].balance += item.value;
            } else {
                acc[item.category].expense += item.value;
                acc[item.category].balance -= item.value;
            }

            acc[item.category].transactions.push({
                id: item.id,
                name: item.name,
                value: item.value,
                type: item.type
            });

            return acc;
        },
        {}
    );

    const addItem = async (item: Omit<Item, 'id' | 'userId'>) => {
        try {
            await addDoc(collection(db, 'transactions'), {
                ...item,
                userId,
                date: Timestamp.fromDate(item.date),
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            throw error; // Re-throw to be caught in InputArea
        }
    };

    const deleteItem = async (id: string) => {
        await deleteDoc(doc(db, 'transactions', id));
    };

    return {
        items,
        filteredItems,
        summary,
        categorySummary,
        filterYear,
        filterMonth,
        setFilterYear,
        setFilterMonth,
        addItem,
        deleteItem,
        loading,
    };
};
