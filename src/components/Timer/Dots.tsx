import styled from 'styled-components';
import { layout } from 'styled-system';
import { Content } from '../../components';

interface IDotsProps {
  width?: string;
  height?: string;
}

const Dot = styled.div<IDotsProps>`
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 4px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 50%;
  ${layout}
`;

export const Dots: React.FC<IDotsProps> = ({ height, width }) => {
  return (
    <Content height="80px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly">
      <Dot width={width} height={height} />
      <Dot width={width} height={height} />
    </Content>
  );
};
