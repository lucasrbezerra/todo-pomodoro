import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

type DisplayItemProps = LayoutProps;

const DisplayItem = styled.div<DisplayItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 2px;
  background: ${({ theme }) => theme.colors.bgTask};
  border-radius: 0.5rem;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
  }
  ${layout}
`;

const ValueDisplay = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
  @media (max-width: 767px) {
    font-size: calc(${({ theme }) => theme.fontSizes.display} - 1.5rem);
  }
`;

interface IDisplayProps {
  value: string;
  height?: string;
  width?: string;
}

export const Display: React.FC<IDisplayProps> = ({ value, height, width }) => {
  return (
    <DisplayItem height={height} width={width}>
      <ValueDisplay>{value}</ValueDisplay>
    </DisplayItem>
  );
};
