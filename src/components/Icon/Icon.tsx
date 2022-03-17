import styled from 'styled-components';
import { position, space, color, typography, flexbox } from 'styled-system';

interface IIconProps {
  position?: string | null;
  right?: string | null;
  left?: string | null;
  top?: string | null;
  color?: any;
  fontSize?: string | null;
  m?: string | null;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomIcon = styled.i<IIconProps>`
  ${position}
  ${space}
  ${color}
  ${typography}
  ${flexbox}
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

type IconProps = {
  variant: string;
  position?: string | null;
  right?: string | null;
  left?: string | null;
  top?: string | null;
  color?: string | null;
  fontSize?: string | null;
  mIcon?: string | null;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Icon: React.FC<IconProps> = ({ variant, position, right, left, color, top, fontSize, mIcon = '0px', onClick }) => {
  return (
    <CustomIcon
      className={variant}
      position={position}
      left={left}
      m={mIcon}
      right={right}
      top={top}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
    />
  );
};
