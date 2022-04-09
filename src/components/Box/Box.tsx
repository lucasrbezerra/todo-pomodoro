import styled from 'styled-components';

export const Box = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 1rem;
  background: ${({ theme }) => theme.colors.bgBox};
  border-radius: 0.5rem;
  &:nth-child(2) {
    grid-area: leftBox;
  }
  &:nth-child(3) {
    grid-area: rightBox;
  }
  @media (min-width: 0px) and (max-width: 480px) {
    width: 90%;
    margin-bottom: 2rem;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 60%;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
    margin-bottom: 2rem;
  }
`;
