import styled from 'styled-components';

export const Box = styled.div`
  max-width: 500px;
  max-height: 600px;
  min-height: 500px;
  background: ${({ theme }) => theme.colors.bgBox};
  border-radius: 0.5rem;
  flex-basis: 35%;
  @media screen and (max-width: 576px) {
    flex-basis: 90%;
    min-height: 500px;
    margin-bottom: 1.5rem;
    padding-bottom: 0;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    flex-basis: 80%;
    margin-bottom: 2rem;
    padding-bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    flex-basis: 55%;
    margin-bottom: 2rem;
    padding-bottom: 0;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    flex-basis: 40%;
    margin-bottom: 2rem;
    padding-bottom: 0;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    /* margin: 0;
    flex-basis: 40%;
    height: 80%; */
  }
`;
