import { Content, Dots, Display } from '../../components';

interface ITimerProps {
  minutes: number;
  seconds: number;
  bg?: string;
  onClick?: () => void;
}

export const Timer: React.FC<ITimerProps> = ({ minutes, seconds, onClick, bg }) => {
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  return (
    <Content
      display="flex"
      alignItems="center"
      justifyContent="center"
      m="0 auto"
      mt="2rem"
      width="100%"
      onClick={onClick}
    >
      <Display value={minuteLeft} bg={bg} />
      <Display value={minuteRight} bg={bg} />
      <Dots />
      <Display value={secondLeft} bg={bg} />
      <Display value={secondRight} bg={bg} />
    </Content>
  );
};
