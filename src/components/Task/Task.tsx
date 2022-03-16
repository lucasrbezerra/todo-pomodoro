import { Content, Band, Text } from '../../components';

type TaskProps = {
  task: string;
  width: string;
  m?: string | null;
  children: JSX.Element;
};

export const Task: React.FC<TaskProps> = ({ task, width, m, children }) => {
  return (
    <Content width={width} height="50px" position="relative" m={m} display="flex" bg="bgTask" alignItems="center">
      <Band />
      <Text ml="16px">{task}</Text>
      {children}
    </Content>
  );
};
