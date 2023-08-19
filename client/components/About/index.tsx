import Circle from "../Shared/Circles";
import { StyledAboutSection } from "./About.styles";

const About = () => {
  return (
    <StyledAboutSection>
      <Circle size={600} marginLeft={-10} blurredBackground>
        Hejqewqe!
      </Circle>
      <h1 className="text-4xl text-center">Hej! Hello! Bonjour!</h1>
    </StyledAboutSection>
  );
};

export default About;
