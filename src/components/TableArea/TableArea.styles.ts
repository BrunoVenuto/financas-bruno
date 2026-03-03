import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 24px;
  backdrop-filter: blur(12px);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;

export const Count = styled.span`
  background: rgba(129, 140, 248, 0.2);
  color: #a5b4fc;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const Th = styled.th`
  text-align: left;
  color: rgba(255, 255, 255, 0.4);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0 16px 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    text-align: center;
  }
`;

export const Empty = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  padding: 48px 16px;
  font-size: 14px;
`;
