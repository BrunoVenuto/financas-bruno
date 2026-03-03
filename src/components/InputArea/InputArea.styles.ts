import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px;
  margin-bottom: 24px;
  backdrop-filter: blur(12px);
`;

export const Title = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 20px 0;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: 12px;
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const inputStyle = `
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 11px 14px;
  color: #fff;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #818cf8;
    background: rgba(129, 140, 248, 0.08);
  }

  &::placeholder {
    color: rgba(255,255,255,0.3);
  }
`;

export const Input = styled.input`
  ${inputStyle}
`;

export const Select = styled.select`
  ${inputStyle}
  cursor: pointer;
  appearance: none;

  option {
    background: #1e1b4b;
    color: #fff;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: opacity 0.2s, transform 0.15s;
  white-space: nowrap;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const ErrorMsg = styled.p`
  color: #f87171;
  font-size: 12px;
  margin: 8px 0 0 0;
`;
