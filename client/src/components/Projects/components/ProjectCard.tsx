import { Project } from 'models/projects';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { MARGINS } from 'variables/margins';

interface IProps {
    project: Project;
}

export const ProjectCard: React.FC<IProps> = (props) => {
  const { project } = props;
  return (
    <StyledProjectCardContainer>
      <StyledProjectCardHeader>
        <a href={project.link}><h4>{project.name}</h4></a>
      </StyledProjectCardHeader>
      <StyledProjectCardContent background={project.image}>
        <StyledProjectCardOverlay>
          <section>
            {project.stack.map((s) => <h4 key={s}> {s}</h4>)}
            <h4>{project.occasion}</h4>
          </section>
        </StyledProjectCardOverlay>
      </StyledProjectCardContent>
    </StyledProjectCardContainer>

  );
};

const StyledProjectCardContainer = styled.article`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 50vh;
width: 30%;
border: 1px solid ${COLORS.primary};
margin-bottom: ${MARGINS.gutter};
overflow: hidden;
`;

const StyledProjectCardContent = styled.section<{background: string}>`
background-image: url(${(props) => props.background});
height: 100%;
`;

const StyledProjectCardHeader = styled.section`
height: 50px;
border-bottom: 1px solid ${COLORS.primary};
padding: 0 15px 15px 15px;
> a {
  color: inherit;
  text-decoration: none;
  &: hover {
    cursor: pointer;
  }
  > h4 {
    text-align: left;
  }
}
`;

const StyledProjectCardOverlay = styled.div`
background: ${COLORS.gradientPrimary};
height: 100%;
> section {
  color: ${COLORS.white};
  text-align: left;
  padding-left: 15px;
}
justify-self: flex-end;
`;



