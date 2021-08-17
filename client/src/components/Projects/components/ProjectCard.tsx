import { useIsCompact } from 'hooks/isCompact';
import { Project } from 'models/projects';
import React from 'react';
import { IoCheckmarkCircleSharp, IoCloseCircleOutline } from 'react-icons/io5';
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
      return project.descriptionFr.toLocaleLowerCase();
    case 'gb':
      return project.descriptionGb.toLocaleLowerCase();
    case 'se':
      return project.descriptionSe.toLocaleLowerCase();
    }
  };
  return (
    <StyledProjectCardContainer isCompact={isCompact}>
      <a href={project.link}>
        <StyledProjectCardContent background={project.image}>
          <StyledProjectCardHeader>
            <StyledHeaderContent>
              <h3>{project.name.toLocaleLowerCase()}</h3>
              <p>{project.occasion}</p>
            </StyledHeaderContent>
            <StyledCompletionIcon>
              {project.completed ? <IoCheckmarkCircleSharp color={COLORS.primary} size={35} />
                :
                <IoCloseCircleOutline color={COLORS.errorRed} size={35} /> }
            </StyledCompletionIcon>
          </StyledProjectCardHeader>
          <StyledProjectCardOverlay>
            <h4>{descriptionLanguage()}</h4>
            <section>
              {project.stack.map((s) => <h4 key={s}> {s.toLocaleLowerCase()}</h4>)}
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
height: 66vh;
width: ${(props) => props.isCompact ? '100%' : '49.5%'};
margin-bottom: ${MARGINS.gutter};
overflow: hidden;
transition: 0.5s;
box-shadow: ${SHADOWS.cardShadow};
&: hover {
  transform: translateX(-2px) translateY(-5px);
  box-shadow: ${SHADOWS.cardShadowElevated};
  cursor: pointer;
}
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
display: flex;
justify-content: space-between;
min-height: 150px;
padding: 0 15px 15px 15px;
background: ${COLORS.gradientWhite};
z-index: 2;
> p {
  margin: 0;
  padding: 0;
  text-align: left;
}
}
`;

const StyledProjectCardOverlay = styled.div`
display: flex;
flex-direction: column;
background: ${COLORS.gradientPrimaryReverse};
height: calc(100% - 150px);
justify-content: flex-end;
> h4 {
  color: ${COLORS.white};
}
> section {
  display: flex;
  width: 60%;
  justify-content: space-around;
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

const StyledHeaderContent = styled.section`
color: ${COLORS.primary};
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
> p {
  text-align: left;
  margin: 0 auto;
}
`;

const StyledCompletionIcon = styled.span`
margin-top: 10px;
`;

