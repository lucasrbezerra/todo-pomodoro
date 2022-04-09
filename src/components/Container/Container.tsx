import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-evenly; */
  /* display: flex; */
  display: grid;
  grid-template-areas:
    'switch switch'
    'leftBox rightBox';

  align-items: start;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    109.61deg,
    ${({ theme }) => theme.colors.backgroundPrimary} 36.22%,
    ${({ theme }) => theme.colors.backgroundSecondary} 99.34%
  );
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
