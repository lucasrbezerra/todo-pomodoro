import styled from 'styled-components';
import { space, color, border } from 'styled-system';

interface ITitleProps {
  m?: string;
  p?: string;
  color?: string;
}

export const Title = styled.h1<ITitleProps>`
  font-size: ${({ theme }) => theme.fontSizes.titleLarge};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  ${space}
  ${color}
  ${border}
`;
