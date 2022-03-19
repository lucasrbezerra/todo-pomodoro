import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.bgBox};
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.subtitleSmall};
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CloseButton = styled.button`
  font-size: ${({ theme}) => theme.fontSizes.subtitleSmall};
  border: none;
  font-weight: 600;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  :hover {
    cursor: pointer;
  }
`;

export const ContentModal = styled.div`
  padding: 1.2rem;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.light};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const Message = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

export const YesButton = styled.button`
  padding: 8px 32px;
  background: ${({ theme}) => theme.colors.primary};
  border: none;
  border-radius: .5rem;
  margin: 0 .5rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.body};
  transition: all .150s ease-in;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const NoButton = styled.button`
  padding: 4px 16px;
  background: ${({ theme}) => theme.colors.primary};
  border: none;
  border-radius: .5rem;
  margin: 0 .5rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.body};
  transition: all .150s ease-in;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
