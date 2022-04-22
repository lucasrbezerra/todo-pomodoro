import styled from 'styled-components';
import { layout, LayoutProps, color } from 'styled-system';

type ColorsProps = {
  bg?: string;
};
type DisplayItemProps = LayoutProps;

const DisplayItem = styled.div<DisplayItemProps | ColorsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 2px;
  background: ${({ theme }) => theme.colors.bgTask};
  border-radius: 0.5rem;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 75px;
    height: 75px;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
  }
  ${layout}
  ${color}
`;

const ValueDisplay = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
  @media screen and (max-width: 576px) {
    font-size: calc(${({ theme }) => theme.fontSizes.display} - 1.5rem);
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.fontSizes.display} - 1.5rem);
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: calc(${({ theme }) => theme.fontSizes.display} - 1rem);
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    font-size: calc(${({ theme }) => theme.fontSizes.display} - 1.2rem);
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
  }
`;

interface IDisplayProps {
  value: string;
  height?: string;
  width?: string;
  bg?: string;
}

export const Display: React.FC<IDisplayProps> = ({ value, height, width, bg }) => {
  return (
    <DisplayItem height={height} width={width} bg={bg}>
      <ValueDisplay>{value}</ValueDisplay>
    </DisplayItem>
  );
};
