import styled from 'styled-components';
import { space, color } from 'styled-system';

interface ITextProps {
  m?: string;
  ml?: string;
  mt?: string;
  p?: string;
  color?: string;
}

export const Text = styled.p<ITextProps>`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;
  ${space}
  ${color}
`;
