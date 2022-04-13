import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../../lotties/success.json';

const CustomAnimation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
export const Animation: React.FC = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <CustomAnimation>
      <Lottie options={defaultOptions} height={400} width={400} />
    </CustomAnimation>
  );
};
