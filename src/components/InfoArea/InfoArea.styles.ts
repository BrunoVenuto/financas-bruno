import styled from 'styled-components';

type CardType = 'income' | 'expense' | 'balance';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  margin: 28px 0 20px 0;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const Card = styled.div<{ cardtype: CardType }>`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px 20px;
  backdrop-filter: blur(12px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-top: 4px solid
    ${({ cardtype }) =>
        cardtype === 'income'
            ? '#22c55e'
            : cardtype === 'expense'
                ? '#ef4444'
                : '#818cf8'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const CardLabel = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardValue = styled.p<{ cardtype: CardType }>`
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  color: ${({ cardtype }) =>
        cardtype === 'income'
            ? '#4ade80'
            : cardtype === 'expense'
                ? '#f87171'
                : '#a5b4fc'};
`;
