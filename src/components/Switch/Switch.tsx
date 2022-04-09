import styled, { useTheme } from 'styled-components';
import { SetStateAction } from 'react';
import { border, color } from 'styled-system';
import { ThemeType } from '../../themes';

type SwitchItemProps = {
  borderBottom?: string | null;
  color?: string;
};

const SwitchItem = styled.h3<SwitchItemProps>`
  font-weight: bold;
  text-align: center;
  margin: 0 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 4px;
  transition: all 0.2s ease-in;
  border-radius: 2px;
  grid-area: switch;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
  ${border}
  ${color}
`;

const WrapperSwitch = styled.div`
  width: 100%;
  display: none;
  margin-top: 2rem;
  @media screen and (min-width: 480px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 0) and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface ISwitchProps {
  selectedSwitch: string;
  setSelectedSwitch: React.Dispatch<SetStateAction<string>>;
  SELECTED_SWITCH: any;
}

export const Switch: React.FC<ISwitchProps> = ({ selectedSwitch, setSelectedSwitch, SELECTED_SWITCH }) => {
  const theme = useTheme() as ThemeType;
  return (
    <WrapperSwitch>
      <SwitchItem
        color={selectedSwitch === SELECTED_SWITCH['TIMER'] ? `${theme.colors.primary}` : `${theme.colors.light}`}
        borderBottom={selectedSwitch === SELECTED_SWITCH['TIMER'] ? `4px solid ${theme.colors.primary}` : null}
        onClick={() => setSelectedSwitch(SELECTED_SWITCH['TIMER'])}
      >
        Timer
      </SwitchItem>
      <SwitchItem
        color={selectedSwitch === SELECTED_SWITCH['TASKS'] ? `${theme.colors.primary}` : `${theme.colors.light}`}
        borderBottom={selectedSwitch === SELECTED_SWITCH['TASKS'] ? `4px solid ${theme.colors.primary}` : null}
        onClick={() => setSelectedSwitch(SELECTED_SWITCH['TASKS'])}
      >
        Tarefas
      </SwitchItem>
    </WrapperSwitch>
  );
};
