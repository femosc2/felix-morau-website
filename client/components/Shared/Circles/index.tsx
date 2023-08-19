import { StyledCircle } from "./Circles.styles";

interface IProps {
  children: React.ReactNode;
  backgroundColor?: string;
  size: number;
  marginLeft?: number;
  blurredBackground?: boolean;
  marginTop?: number;
}

const Circle = (props: IProps) => {
  const {
    children,
    size,
    backgroundColor,
    blurredBackground,
    marginLeft,
    marginTop,
  } = props;
  return (
    <StyledCircle
      size={size}
      backgroundColor={backgroundColor}
      marginLeft={marginLeft}
      blurredBackground={blurredBackground}
      marginTop={marginTop}
    >
      {children}
    </StyledCircle>
  );
};

export default Circle;
