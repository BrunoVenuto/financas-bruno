import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  background: linear-gradient(135deg, #312e81 0%, #4c1d95 50%, #1e1b4b 100%);
  padding: 0 24px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderInner = styled.div`
  max-width: 1100px;
  margin: auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HeaderIcon = styled.span`
  font-size: 28px;
`;

export const HeaderTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
`;

export const HeaderSubtitle = styled.span`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
`;

export const Body = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 64px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 16px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(129, 140, 248, 0.2);
  border-top-color: #818cf8;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;