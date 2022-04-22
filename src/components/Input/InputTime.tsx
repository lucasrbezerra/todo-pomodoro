import styled from 'styled-components';
import { position, border } from 'styled-system';
import { Content, Dots } from '../../components';
import { useTheme } from 'styled-components';
import { ThemeType } from '../../themes';
import { useEffect, useState } from 'react';

type InputProps = {
  position?: string | null;
  borderColor?: string;
  border: string;
  autoFocus: boolean;
  maxLength: number;
};

const CustomInput = styled.input<InputProps>`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  width: 100%;
  outline: none;
  height: 40px;
  padding-left: 35%;
  background: ${({ theme }) => theme.colors.bgTask};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 0.5rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${border}
  ${position}
`;

interface IInputProps {
  error: Boolean;
  value: number;
  onChange: (value: number) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  width?: string;
}

const MAX_LENGTH = 1;

export const InputTime: React.FC<IInputProps> = ({ value, onChange, error, onKeyDown, width = '80%' }) => {
  const [leftMinute, setLeftMinute] = useState<string>('');
  const [rightMinute, setRightMinute] = useState<string>('');
  const [leftSecond, setLeftSecond] = useState<string>('');
  const [rightSecond, setRightSecond] = useState<string>('');

  useEffect(() => {
    let totalMinutes = Number(leftMinute + rightMinute) * 60;
    let totalSeconds = Number(leftSecond + rightSecond);
    let totalTime = totalMinutes + totalSeconds;
    onChange(totalTime);
  }, [leftMinute, rightMinute, leftSecond, rightSecond]);

  const handleChangeTime = (e: any, type: string, setter?: any) => {
    const { value, name } = e.target;
    var nextfield;

    if (setter && value.length <= MAX_LENGTH) setter(value);

    const [, fieldIndex] = name.split('-');

    let fieldIntIndex = parseInt(fieldIndex, 10);

    if (type === 'right') {
      nextfield = document.querySelector(`input[name=field-${fieldIntIndex + 1}]`);
    } else if (type === 'left') {
      nextfield = document.querySelector(`input[name=field-${fieldIntIndex - 1}]`);
    }

    if (nextfield !== null) (nextfield as HTMLFormElement).focus();
  };

  const backspaceKeyUp = (e: any) => {
    if (e.target.value === '') {
      handleChangeTime(e, 'left');
    }
  };

  const onKeyArrowUp = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    switch (event.key) {
      case 'ArrowLeft':
        // Left pressed
        handleChangeTime(event, 'left');
        break;
      case 'ArrowRight':
        // Right pressed
        handleChangeTime(event, 'right');
        break;
      case 'ArrowUp':
        // Up pressed
        handleChangeTime(event, 'right');
        break;
      case 'ArrowDown':
        // Down pressed
        handleChangeTime(event, 'left');
        break;
      case 'Backspace':
        backspaceKeyUp(event);
        break;
      default:
        break;
    }
  };

  const theme = useTheme() as ThemeType;
  return (
    <Content
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      width={width}
      m="0 8px 0 0"
      height="40px"
      position="relative"
    >
      <Content display="flex" alignItems="center" m="0 .25rem" justifyContent="center">
        <CustomInput
          type="number" 
          pattern="\d*"
          autoFocus
          name="field-1"
          maxLength={MAX_LENGTH}
          placeholder="2"
          value={leftMinute}
          onChange={(e) => handleChangeTime(e, 'right', setLeftMinute)}
          onKeyUp={onKeyArrowUp}
          onKeyDown={onKeyDown}
          border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
        />
      </Content>
      <Content display="flex" alignItems="center" m="0 .25rem" justifyContent="center">
        <CustomInput
          type="number" 
          pattern="\d*"
          autoFocus={false}
          name="field-2"
          maxLength={MAX_LENGTH}
          placeholder="5"
          value={rightMinute}
          onChange={(e) => handleChangeTime(e, 'right', setRightMinute)}
          onKeyUp={onKeyArrowUp}
          onKeyDown={onKeyDown}
          border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
        />
      </Content>
      <Dots height="0.35rem" width="0.35rem" />
      <Content display="flex" alignItems="center" m="0 .25rem" justifyContent="center">
        <CustomInput
          type="number" 
          pattern="\d*"
          autoFocus={false}
          name="field-3"
          maxLength={MAX_LENGTH}
          placeholder="0"
          value={leftSecond}
          onChange={(e) => handleChangeTime(e, 'right', setLeftSecond)}
          onKeyUp={onKeyArrowUp}
          onKeyDown={onKeyDown}
          border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
        />
      </Content>
      <Content display="flex" alignItems="center" m="0 .25rem" justifyContent="center">
        <CustomInput
          type="number" 
          pattern="\d*"
          autoFocus={false}
          name="field-4"
          maxLength={MAX_LENGTH}
          placeholder="0"
          value={rightSecond}
          onChange={(e) => handleChangeTime(e, 'right', setRightSecond)}
          onKeyUp={onKeyArrowUp}
          onKeyDown={onKeyDown}
          border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
        />
      </Content>
    </Content>
  );
};
