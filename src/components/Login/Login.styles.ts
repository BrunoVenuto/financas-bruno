import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0c29;
  background: linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #24243e 100%);
`;

export const Box = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 48px;
  text-align: center;
  backdrop-filter: blur(16px);
  width: 100%;
  max-width: 420px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
`;

export const Icon = styled.div`
  font-size: 56px;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px 0;
`;

export const SubTitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin: 0 0 40px 0;
  line-height: 1.5;
`;

export const LoginButton = styled.button`
  background: #fff;
  color: #333;
  border: none;
  border-radius: 12px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: 'Inter', sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
