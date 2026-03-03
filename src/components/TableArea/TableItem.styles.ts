import styled from 'styled-components';

export const Tr = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Td = styled.td<{ align?: string }>`
  padding: 14px 16px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  text-align: ${({ align }) => align || 'left'};
`;

export const TypeBadge = styled.span<{ type: 'income' | 'expense' }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  background: ${({ type }) =>
        type === 'income'
            ? 'rgba(34, 197, 94, 0.15)'
            : 'rgba(239, 68, 68, 0.15)'};
  color: ${({ type }) => (type === 'income' ? '#4ade80' : '#f87171')};
`;

export const Value = styled.span<{ type: 'income' | 'expense' }>`
  font-weight: 700;
  color: ${({ type }) => (type === 'income' ? '#4ade80' : '#f87171')};
`;

export const DeleteBtn = styled.button`
  background: rgba(239, 68, 68, 0.12);
  color: #f87171;
  border: none;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  &:hover {
    background: rgba(239, 68, 68, 0.28);
    transform: scale(1.1);
  }
`;
