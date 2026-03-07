import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(12px);

  @media (max-width: 768px) {
    padding: 16px;
    margin: 16px 0;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '📊';
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const CategoryName = styled.div`
  color: #e2e8f0;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  text-transform: capitalize;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
`;

export const Amounts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Amount = styled.div<{ type: 'income' | 'expense' | 'balance', isNegative?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  
  &::before {
    content: '${({ type }) => type === 'income' ? 'Receita' : type === 'expense' ? 'Despesa' : 'Saldo'}';
    color: rgba(255, 255, 255, 0.5);
    font-weight: 500;
  }

  color: ${({ type, isNegative }) => {
    if (type === 'income') return '#4ade80';
    if (type === 'expense') return '#f87171';
    return isNegative ? '#f87171' : '#a5b4fc';
  }};
`;

export const TransactionList = styled.ul`
  list-style: none;
  margin: 16px 0 0 0;
  padding: 12px 0 0 0;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

export const TransactionName = styled.span`
  color: #cbd5e1;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`;

export const TransactionValue = styled.span<{ type: 'income' | 'expense' }>`
  font-weight: 500;
  color: ${({ type }) => (type === 'income' ? '#4ade80' : '#f87171')};
`;
