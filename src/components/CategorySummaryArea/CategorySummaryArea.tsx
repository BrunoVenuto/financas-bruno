import React from 'react';
import * as C from './CategorySummaryArea.styles';
import { CategorySummary } from '../../hooks/useFinances';

type Props = {
    categorySummary: CategorySummary;
}

export const CategorySummaryArea = ({ categorySummary }: Props) => {
    const categories = Object.keys(categorySummary);

    if (categories.length === 0) {
        return null;
    }

    // Função auxiliar para formatar como moeda BRL de forma consistente com o design
    const formatCurrency = (value: number) => {
        return `R$ ${value.toFixed(2)}`;
    }

    return (
        <C.Container>
            <C.Title>Resumo por Categoria</C.Title>
            <C.Grid>
                {categories.sort().map((cat) => {
                    const data = categorySummary[cat];
                    return (
                        <C.CategoryCard key={cat}>
                            <C.CategoryName>{cat}</C.CategoryName>
                            <C.Amounts>
                                {data.income > 0 && (
                                    <C.Amount type="income">{formatCurrency(data.income)}</C.Amount>
                                )}
                                {data.expense > 0 && (
                                    <C.Amount type="expense">{formatCurrency(data.expense)}</C.Amount>
                                )}
                                {data.income > 0 && data.expense > 0 && (
                                    <C.Amount type="balance" isNegative={data.balance < 0}>
                                        {formatCurrency(data.balance)}
                                    </C.Amount>
                                )}
                            </C.Amounts>

                            {data.transactions && data.transactions.length > 0 && (
                                <C.TransactionList>
                                    {data.transactions.map((t) => (
                                        <C.TransactionItem key={t.id}>
                                            <C.TransactionName title={t.name}>{t.name}</C.TransactionName>
                                            <C.TransactionValue type={t.type}>
                                                {t.type === 'expense' ? '-' : '+'} {formatCurrency(t.value)}
                                            </C.TransactionValue>
                                        </C.TransactionItem>
                                    ))}
                                </C.TransactionList>
                            )}
                        </C.CategoryCard>
                    );
                })}
            </C.Grid>
        </C.Container>
    );
};

export default CategorySummaryArea;
