import { Content, Dots, Display } from '../../components';

interface ITimerProps {
    minutes: number;
    seconds: number;
}

export const Timer: React.FC<ITimerProps> = ({ minutes, seconds }) => {
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");
    return (
    <Content display="flex" alignItems="center" justifyContent="center" m="0 auto" mt="2rem" width="400px">
      <Display value={minuteLeft} />
      <Display value={minuteRight} />
      <Dots />
      <Display value={secondLeft} />
      <Display value={secondRight} />
    </Content>
  );
};
