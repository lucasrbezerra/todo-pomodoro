import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.titleLarge};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
`;
