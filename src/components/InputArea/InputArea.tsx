import React, { useState } from 'react';
import * as C from './InputArea.styles';
import { Item } from '../../types/Item';

const CATEGORIES = {
    income: ['Salário', 'Freelance', 'Investimentos', 'Presente', 'Outros'],
    expense: ['Alimentação', 'Moradia', 'Transporte', 'Saúde', 'Lazer', 'Educação', 'Roupas', 'Outros'],
};

type Props = {
    onAdd: (item: Omit<Item, 'id'>) => Promise<void>;
};

const InputArea = ({ onAdd }: Props) => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState<'income' | 'expense'>('expense');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name.trim()) return setError('Informe uma descrição.');
        if (!value || isNaN(Number(value)) || Number(value) <= 0)
            return setError('Informe um valor válido.');
        if (!category) return setError('Selecione uma categoria.');
        if (!date) return setError('Informe a data.');

        setLoading(true);
        try {
            await onAdd({
                name: name.trim(),
                value: parseFloat(Number(value).toFixed(2)),
                type,
                category,
                date: new Date(date + 'T12:00:00'),
            });
            setName('');
            setValue('');
            setCategory('');
            setDate(new Date().toISOString().split('T')[0]);
        } catch (err) {
            console.error(err);
            setError('Erro ao salvar. Verifique as permissões do Firebase (Regras de Segurança).');
        } finally {
            setLoading(false);
        }
    };

    return (
        <C.Container>
            <C.Title>➕ Nova Transação</C.Title>
            <C.Form onSubmit={handleSubmit}>
                <C.Field>
                    <C.Label>Descrição</C.Label>
                    <C.Input
                        placeholder="Ex: Aluguel, Salário..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </C.Field>

                <C.Field>
                    <C.Label>Valor (R$)</C.Label>
                    <C.Input
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0,00"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </C.Field>

                <C.Field>
                    <C.Label>Tipo</C.Label>
                    <C.Select
                        value={type}
                        onChange={(e) => {
                            setType(e.target.value as 'income' | 'expense');
                            setCategory('');
                        }}
                    >
                        <option value="income">💰 Receita</option>
                        <option value="expense">💸 Despesa</option>
                    </C.Select>
                </C.Field>

                <C.Field>
                    <C.Label>Categoria</C.Label>
                    <C.Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Selecionar...</option>
                        {CATEGORIES[type].map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </C.Select>
                </C.Field>

                <C.Field>
                    <C.Label>Data</C.Label>
                    <C.Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </C.Field>

                <C.Button type="submit" disabled={loading}>
                    {loading ? 'Salvando...' : 'Adicionar'}
                </C.Button>
            </C.Form>
            {error && <C.ErrorMsg>{error}</C.ErrorMsg>}
        </C.Container>
    );
};

export default InputArea;
