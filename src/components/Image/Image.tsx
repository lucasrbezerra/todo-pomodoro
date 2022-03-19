import styled from "styled-components";

const CustomImg = styled.img`
height: 120px;
`

interface IImageProps {
  src: string;
  alt: string;
}

export const Image: React.FC<IImageProps> = ({ src, alt }) => {
  return <CustomImg src={`/img/${src}`} alt={alt} />;
};
