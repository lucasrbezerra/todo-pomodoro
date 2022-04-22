import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  background: linear-gradient(
    109.61deg,
    ${({ theme }) => theme.colors.backgroundPrimary} 36.22%,
    ${({ theme }) => theme.colors.backgroundSecondary} 99.34%
  );
  @media screen and (max-width: 576px) {
    /* height: 100%; */
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
  }
`;
