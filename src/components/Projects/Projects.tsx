import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
background-color: orange;
height: 100vh;
width: 100vw;
margin: 0;
padding: 0;
position: absolute;
`;


export const Projects: React.FC = () => {
  return (
    <>
      <StyledSection>
        <h1>Projects</h1>
      </StyledSection>
    </>
  );
};
