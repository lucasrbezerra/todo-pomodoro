import styled from 'styled-components';
import { space } from 'styled-system';

interface ISubtitleProps {
  mt?: string | null;
}

export const Subtitle = styled.h3<ISubtitleProps>`
  font-size: ${({ theme }) => theme.fontSizes.subtitleSmall};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  ${space}
`;
