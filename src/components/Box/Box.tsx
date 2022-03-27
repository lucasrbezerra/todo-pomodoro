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
`;
