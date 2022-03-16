import styled from 'styled-components';
import { position, border } from 'styled-system';
import { Content, Icon } from '../../components';
import { useTheme } from 'styled-components';
import { ThemeType } from '../../themes';

type InputProps = {
  position?: string | null;
  borderColor?: string;
  border: string;
};

const CustomInput = styled.input<InputProps>`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgTask};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.75rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.opacity};
  }
  ${position}
  ${border}
`;

interface IInputProps {
  placeholder: string;
  error: Boolean;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Input: React.FC<IInputProps> = ({ placeholder, value, error, onChange, onClick, onKeyDown }) => {
  const theme = useTheme() as ThemeType;
  return (
    <Content width="80%" m="0 8px 0 0" height="40px" position="relative">
      <CustomInput
        placeholder={placeholder}
        position="absolute"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        border={error ? `1px solid ${theme.colors.failure}` : `1px solid ${theme.colors.light}`}
      />
      <Icon
        variant="fas fa-plus-square"
        position="absolute"
        right="18px"
        top=".5rem"
        color="primary"
        fontSize="1.5rem"
        onClick={onClick}
      />
    </Content>
  );
};
