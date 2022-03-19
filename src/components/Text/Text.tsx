import styled from 'styled-components';
import { space, color } from 'styled-system';

interface ITextProps {
  ml?: string | null;
  mt?: string | null;
  color?: string | null;
}

export const Text = styled.p<ITextProps>`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;
  ${space}
  ${color}
`;
