import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

export const Projects: React.FC = () => {
  return (
    <>
      <StyledProjectsContainer>
        <StyledBackgroundText>{useTranslation('projects')}</StyledBackgroundText>
        <StyledProjectContent>
            ProjectsContainer
        </StyledProjectContent>
      </StyledProjectsContainer>
    </>
  );
};


const StyledProjectsContainer = styled.section`
background-color: ${COLORS.white};
height: 100vh;
`;
const StyledProjectContent= styled.section`
display: flex;
flex-direction: column;
padding-top: 15vh;
color: ${COLORS.primary};
text-align: center;
margin: 0 auto;
> h3 {
  display: flex;
  justify-content: center;
  font-size: 30px;
  > a {
    transition: 0.2s;
    color: ${COLORS.primary};
    text-decoration: underline;
    text-decoration-color: ${COLORS.secondary};
    &:hover {
      color: ${COLORS.secondary};
    }
    > span {
    }
  }
}
`;
const StyledBackgroundText = styled.h2`
color: ${COLORS.darkWhite};
position: absolute;
font-size: 300px;
text-align: center;
width: 100%;
user-select: none;
`;