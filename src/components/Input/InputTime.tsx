import styled from 'styled-components';
import { position, border } from 'styled-system';
import { Content, Dots } from '../../components';
import { useTheme } from 'styled-components';
import { ThemeType } from '../../themes';
import { useState } from 'react';

type InputProps = {
  position?: string | null;
  borderColor?: string;
  border: string;
  autoFocus: boolean;
};

const CustomInput = styled.input<InputProps>`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bgTask};
  color: ${({ theme }) => theme.colors.light};
  ${border}
  ${position}
`;

interface IInputProps {
  placeholder: string;
  autoFocus?: boolean;
  error: Boolean;
  value: number;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  width?: string;
}

export const InputTime: React.FC<IInputProps> = ({ placeholder, value, error, onChange, onKeyDown, width = '80%' }) => {
  const [leftMinute, setLeftMinute] = useState<string>('');
  const [rightMinute, setRightMinute] = useState<string>('');
  const [leftSecond, setLeftSecond] = useState<string>('');
  const [rightSecond, setRightSecond] = useState<string>('');

  const theme = useTheme() as ThemeType;
  return (
    <Content display="flex" justifyContent="space-evenly" width={width} m="0 8px 0 0" height="40px" position="relative">
      <Content display="flex" alignItems="center" m="0 .25rem" justifyContent="center">
        <CustomInput
          autoFocus
          placeholder={placeholder}
          value={leftMinute}
          onChange={e => setLeftMinute(e.target.value)}
          onKeyDown={onKeyDown}
          border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
        />
      </Content>
      <Content display="flex" alignItems="center" m="0 .25rem" justifyContent="center">
        <CustomInput
          autoFocus
          placeholder={placeholder}
          value={rightMinute}
          onChange={e => setRightMinute(e.target.value)}
          onKeyDown={onKeyDown}
          border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
        />
      </Content>
      <Dots />
      <Content display="flex" alignItems="center" m="0 .25rem" justifyContent="center">
        <CustomInput
          autoFocus
          placeholder={placeholder}
          value={leftSecond}
          onChange={e => setLeftSecond(e.target.value)}
          onKeyDown={onKeyDown}
          border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
        />
      </Content>
      <Content display="flex" alignItems="center" m="0 .25rem" justifyContent="center">
        <CustomInput
          autoFocus
          placeholder={placeholder}
          value={rightSecond}
          onChange={e => setRightSecond(e.target.value)}
          onKeyDown={onKeyDown}
          border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
        />
      </Content>
    </Content>
  );
};
