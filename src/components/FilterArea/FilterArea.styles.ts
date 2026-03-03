import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 12px;
`;

export const MonthLabel = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  text-transform: capitalize;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArrowBtn = styled.button`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  border-radius: 8px;
  width: 34px;
  height: 34px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }
`;

export const MonthBtn = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? 'rgba(129,140,248,0.25)' : 'transparent')};
  border: 1px solid ${({ active }) => (active ? '#818cf8' : 'rgba(255,255,255,0.1)')};
  color: ${({ active }) => (active ? '#a5b4fc' : 'rgba(255,255,255,0.5)')};
  border-radius: 8px;
  padding: 5px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s;

  &:hover {
    border-color: #818cf8;
    color: #a5b4fc;
  }
`;

export const YearSelect = styled.select`
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  padding: 5px 10px;
  color: #fff;
  font-size: 13px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  outline: none;

  option {
    background: #1e1b4b;
  }
`;
