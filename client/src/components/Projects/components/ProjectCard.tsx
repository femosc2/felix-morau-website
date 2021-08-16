import { useIsCompact } from 'hooks/isCompact';
import { Project } from 'models/projects';
import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'store';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { MARGINS } from 'variables/margins';
import { SHADOWS } from 'variables/shadows';

interface IProps {
    project: Project;
}

export const ProjectCard: React.FC<IProps> = (props) => {
  const isCompact = useIsCompact();
  const { project } = props;
  const descriptionLanguage = () => {
    const language = useSelector<IStore>(state => state.header.language);
    switch(language) {
    case 'fr':
      return project.descriptionFr;
    case 'gb':
      return project.descriptionGb;
    case 'se':
      return project.descriptionSe;
    }
  };
  return (
    <StyledProjectCardContainer isCompact={isCompact}>
      <StyledProjectCardHeader>
        <a href={project.link}><h3>{project.name}</h3></a>
        <p>{project.occasion}</p>
      </StyledProjectCardHeader>
      <a href={project.link}>
        <StyledProjectCardContent background={project.image}>
          <StyledProjectCardOverlay>
            <h4>{descriptionLanguage()}</h4>
            <section>
              {project.stack.map((s) => <h4 key={s}> {s}</h4>)}
            </section>
          </StyledProjectCardOverlay>
        </StyledProjectCardContent>
      </a>
    </StyledProjectCardContainer>

  );
};

const StyledProjectCardContainer = styled.article<{isCompact: boolean}>`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 50vh;
width: ${(props) => props.isCompact ? '100%' : '30%'};
margin-bottom: ${MARGINS.gutter};
overflow: hidden;
transition: 0.5s;
box-shadow: ${SHADOWS.cardShadow};
&: hover {
  transform: translateX(-2px) translateY(-5px);
  box-shadow: ${SHADOWS.cardShadowElevated};
  cursor: pointer;
}
border-radius: 25px;
> a {
  height: 100%;
  text-decoration: none;
}
`;

const StyledProjectCardContent = styled.section<{background: string}>`
background-image: url(${(props) => props.background});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100%;
`;

const StyledProjectCardHeader = styled.section`
height: 50px;
padding: 0 15px 15px 15px;
background: ${COLORS.gradientWhite};
border: 1px solid ${COLORS.darkWhite};
> p {
  margin: 0;
  padding: 0;
  text-align: left;
}
> a {
  color: inherit;
  text-decoration: none;
  &: hover {
    cursor: pointer;
  }
  > h3 {
    text-align: left;
    margin: 0;
    margin-top: 10px;
    padding: 0;
  }
}
`;

const StyledProjectCardOverlay = styled.div`
display: flex;
flex-direction: column;
background: ${COLORS.gradientPrimaryReverse};
height: 100%;
justify-content: flex-end;
> h4 {
  color: ${COLORS.white};
}
> section {
  display: flex;
  width: 60%;
  justify-content: space-between;
  color: ${COLORS.white};
  text-align: left;
  > h4 {
    width: auto;
  }
  padding: 15px;
  margin: 0 auto;
  flex-wrap: wrap;
}
`;



