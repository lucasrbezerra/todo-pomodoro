import styled from 'styled-components';
import { layout, LayoutProps, color, flexbox, position, space, border } from 'styled-system';

type ContentProps = LayoutProps;

interface IPropsContent {
  bg?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  m?: string;
  p?: string;
  mt?: string;
  position?: string;
  right?: string;
  top?: string;
  borderBottom?: string;
  border?: string;
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
