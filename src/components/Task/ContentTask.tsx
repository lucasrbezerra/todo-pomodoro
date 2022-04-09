import styled from 'styled-components';
import { color, border } from 'styled-system';

type ContentTaskProps = {
  bg?: string;
  border?: string;
};

export const ContentTask = styled.div<ContentTaskProps>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.bgTask};
  border-radius: 0.5rem;
  margin-top: 1rem;
  position: relative;
  /* @media (min-width: 0px) and (max-width: 480px) {
    width: 90%;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  } */
  ${color}
  ${border}
`;
