import styled from 'styled-components';
import { layout, space, color, LayoutProps } from 'styled-system';
import { Text, Icon } from '../../components';

type CustomButtonProps = LayoutProps;

type ButtonPropsOptions = {
  bg?: string;
  m?: string;
}

const CustomButton = styled.button<CustomButtonProps | ButtonPropsOptions>`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  margin: 0 6px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  ${layout}
  ${space}
  ${color}
`;

export type ButtonProps = {
  label?: string;
  icon?: string;
  width: string;
  mIcon?: string;
  m?: string;
  bg?: string;
  height: string;
  alignItems?: string;
  display?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

export const Button: React.FC<ButtonProps> = ({ label, width, height, icon, bg, m, mIcon, onClick }) => {
  return (
    <CustomButton width={width} height={height} bg={bg} m={m} onClick={onClick}>
      {icon && <Icon variant={icon} fontSize="1rem" mIcon={mIcon}/>}
      <Text ml="4px">{label}</Text>
    </CustomButton>
  );
};
