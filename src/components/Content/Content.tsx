import styled from 'styled-components';
import { layout, LayoutProps, color, flexbox, position, space, border, variant } from 'styled-system';

type ContentProps = LayoutProps;

interface IPropsContent {
  bg?: string | null;
  flexDirection?: string | null;
  alignItems?: string | null;
  justifyContent?: string | null;
  m?: string | null;
  p?: string | null;
  mt?: string | null;
  position?: string | null;
  right?: string | null;
  borderBottom?: string | null;
  border?: string | null;
}

export const Content = styled.div<ContentProps | IPropsContent>`
  border-radius: 0.5rem;
  &::-webkit-scrollbar {
    width: 0;
  }
  ${layout}
  ${flexbox}
  ${color}
  ${position}
  ${space}
  ${border}
`;
