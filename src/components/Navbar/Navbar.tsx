import styled, { useTheme } from 'styled-components';
import { Icon, Text } from '../../components';
import { ThemeType } from '../../themes';

const WrapperNavbar = styled.div`
  width: 90%;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 0.5rem;
  flex-basis: 90%;
  @media screen and (max-width: 576px) {
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    margin-top: 0.5rem;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
  }
`;

const ButtonActionsStyled = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  margin: 0 0.5rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    margin-left: 0.6rem;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  @media screen and (max-width: 576px) {
    padding: 0.8rem 0.8rem;
    & > p {
      display: none;
    }
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 0.7rem 0.7rem;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
  }
`;

export type ButtonPropsAcions = {
  label?: string;
  icon?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ButtonActions: React.FC<ButtonPropsAcions> = ({ label, icon, onClick }) => {
  return (
    <ButtonActionsStyled onClick={onClick}>
      {icon && <Icon variant={icon} fontSize="1rem" />}
      <p>{label}</p>
    </ButtonActionsStyled>
  );
};

interface INavbar {
  handleClear: () => void;
  handleChangeTime: () => void;
  resetAllTasks: () => void;
  handleChangeTimeSleep?: () => void;
}

export const Navbar: React.FC<INavbar> = ({ handleClear, handleChangeTime, resetAllTasks, handleChangeTimeSleep }) => {
  return (
    <WrapperNavbar>
      <ButtonActions label="Limpar" icon="fas fa-broom" onClick={handleClear} />
      <ButtonActions label="Reiniciar" icon="fas fa-redo" onClick={resetAllTasks} />
      <ButtonActions label="Tempo" icon="fas fa-user-clock" onClick={handleChangeTime} />
      <ButtonActions label="Descanso" icon="fas fa-bed" onClick={handleChangeTimeSleep} />
    </WrapperNavbar>
  );
};
