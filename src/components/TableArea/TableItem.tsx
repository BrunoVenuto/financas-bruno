import React from 'react';
import * as C from './TableItem.styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item;
    onDelete: (id: string) => void;
};

const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const formatDate = (date: Date) =>
    date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

const TableItem = ({ item, onDelete }: Props) => {
    return (
        <C.Tr>
            <C.Td>{formatDate(item.date)}</C.Td>
            <C.Td>{item.name}</C.Td>
            <C.Td>
                <C.TypeBadge type={item.type}>
                    {item.type === 'income' ? '💰' : '💸'} {item.type === 'income' ? 'Receita' : 'Despesa'}
                </C.TypeBadge>
            </C.Td>
            <C.Td>{item.category}</C.Td>
            <C.Td>
                <C.Value type={item.type}>
                    {item.type === 'income' ? '+' : '-'} {formatCurrency(item.value)}
                </C.Value>
            </C.Td>
            <C.Td align="center">
                <C.DeleteBtn title="Excluir" onClick={() => onDelete(item.id)}>✕</C.DeleteBtn>
            </C.Td>
        </C.Tr>
    );
};

export default TableItem;
