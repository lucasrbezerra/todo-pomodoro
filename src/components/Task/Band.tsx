import styled from 'styled-components';
import { color } from 'styled-system';

type BandProps = {
  bg?: string;
}

export const Band = styled.div<BandProps>`
  width: 8px;
  height: 50px;
  background: ${({ theme }) => theme.colors.secondary};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  ${color}
`;
