import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    109.61deg,
    ${({ theme }) => theme.colors.backgroundPrimary} 36.22%,
    ${({ theme }) => theme.colors.backgroundSecondary} 99.34%
  );
`;
