import React from 'react';
import * as C from './TableArea.styles';
import TableItem from './TableItem';
import { Item } from '../../types/Item';

type Props = {
    items: Item[];
    onDelete: (id: string) => void;
};

const TableArea = ({ items, onDelete }: Props) => {
    return (
        <C.Container>
            <C.Header>
                <C.Title>📋 Transações</C.Title>
                <C.Count>{items.length} item{items.length !== 1 ? 's' : ''}</C.Count>
            </C.Header>

            {items.length === 0 ? (
                <C.Empty>Nenhuma transação neste período. Adicione uma acima! 👆</C.Empty>
            ) : (
                <C.TableWrapper>
                    <C.Table>
                        <C.THead>
                            <tr>
                                <C.Th>Data</C.Th>
                                <C.Th>Descrição</C.Th>
                                <C.Th>Tipo</C.Th>
                                <C.Th>Categoria</C.Th>
                                <C.Th>Valor</C.Th>
                                <C.Th>Ação</C.Th>
                            </tr>
                        </C.THead>
                        <C.TBody>
                            {items.map((item) => (
                                <TableItem key={item.id} item={item} onDelete={onDelete} />
                            ))}
                        </C.TBody>
                    </C.Table>
                </C.TableWrapper>
            )}
        </C.Container>
    );
};

export default TableArea;
