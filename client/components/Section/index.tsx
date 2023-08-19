import { ReactNode, WheelEvent, useEffect, useRef } from "react";
import { StyledSection } from "./Section.styles";

interface IProps {
  children: ReactNode;
  onWheel: (event: WheelEvent<HTMLElement>) => void;
  sectionNumber: number;
  currPos: number;
}

const Section = (props: IProps) => {
  const { children, onWheel, currPos, sectionNumber } = props;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (currPos === 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    if (sectionNumber === currPos && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currPos]);

  return (
    <StyledSection ref={sectionRef} onWheel={onWheel}>
      {children}
    </StyledSection>
  );
};

export default Section;
