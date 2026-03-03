import React from 'react';
import * as C from './InfoArea.styles';

type Props = {
    income: number;
    expense: number;
    balance: number;
};

const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const InfoArea = ({ income, expense, balance }: Props) => {
    return (
        <C.Container>
            <C.Card cardtype="income">
                <C.CardLabel>💰 Receitas</C.CardLabel>
                <C.CardValue cardtype="income">{formatCurrency(income)}</C.CardValue>
            </C.Card>

            <C.Card cardtype="expense">
                <C.CardLabel>💸 Despesas</C.CardLabel>
                <C.CardValue cardtype="expense">{formatCurrency(expense)}</C.CardValue>
            </C.Card>

            <C.Card cardtype="balance">
                <C.CardLabel>⚖️ Saldo</C.CardLabel>
                <C.CardValue cardtype="balance">{formatCurrency(balance)}</C.CardValue>
            </C.Card>
        </C.Container>
    );
};

export default InfoArea;
