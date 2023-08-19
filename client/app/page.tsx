"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import Section from "@/components/Section";
import { useState } from "react";
import { styled } from "styled-components";
import dynamic from "next/dynamic";
import UnderConstruction from "@/components/UnderConstruction";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

const StyledPage = styled.main`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default function Home() {
  const pos = [0, 1, 2, 3];
  const [currPos, setCurrPos] = useState(0);

  const onScroll = (event: React.WheelEvent<HTMLElement>) => {
    event.stopPropagation();
    if (event.deltaY === -100 && currPos !== 0) {
      setCurrPos(currPos - 1);
    }
    if (event.deltaY === 100 && currPos !== pos.length - 1) {
      setCurrPos(currPos + 1);
    }
  };

  return (
    <StyledPage className="flex min-h-screen flex-col items-center p-24 text-center">
      <h1 className="text-6xl text-center">Felix Morau. Developer. UX.</h1>
      <UnderConstruction />
      <AnimatedBackground currPos={currPos} />
      <Section currPos={currPos} sectionNumber={0} onWheel={(e) => onScroll(e)}>
        <About />
      </Section>
      <Section currPos={currPos} sectionNumber={1} onWheel={(e) => onScroll(e)}>
        <Skills />
      </Section>
      <Section currPos={currPos} sectionNumber={2} onWheel={(e) => onScroll(e)}>
        <Projects />
      </Section>
      <Section currPos={currPos} sectionNumber={3} onWheel={(e) => onScroll(e)}>
        <Contact />
      </Section>
    </StyledPage>
  );
}
