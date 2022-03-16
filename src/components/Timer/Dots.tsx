import styled from 'styled-components';
import { Content } from '../../components';

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 4px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 50%;
`;

interface IDotsProps {}

export const Dots: React.FC<IDotsProps> = () => {
  return (
    <Content height="80px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly">
      <Dot />
      <Dot />
    </Content>
  );
};
