import styled from 'styled-components';

export const Box = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 1rem;
  background: ${({ theme }) => theme.colors.bgBox};
  border-radius: 0.5rem;
  flex-basis: 35%;
  padding-bottom: 1rem;
  @media screen and (max-width: 576px) {
    margin: 0;
    flex-basis: 90%;
    height: 70%;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin: 0;
    flex-basis: 80%;
    height: 70%;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 0;
    flex-basis: 55%;
    height: 70%;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    margin: 0;
    flex-basis: 40%;
    height: 70%;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    /* margin: 0;
    flex-basis: 40%;
    height: 80%; */
  }
`;
