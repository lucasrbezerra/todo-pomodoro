import styled from 'styled-components';

const DisplayItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 2px;
  background: ${({ theme }) => theme.colors.bgTask};
  border-radius: 0.5rem;
  cursor: pointer;
`;

const ValueDisplay = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
`;

interface IDisplayProps {
  value: string;
}

export const Display: React.FC<IDisplayProps> = ({ value }) => {
  return (
    <DisplayItem>
      <ValueDisplay>{value}</ValueDisplay>
    </DisplayItem>
  );
};
