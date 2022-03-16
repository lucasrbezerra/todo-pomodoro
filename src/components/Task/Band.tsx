import styled from 'styled-components';

export const Band = styled.div`
  width: 8px;
  height: 50px;
  background: ${({ theme }) => theme.colors.secondary};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
