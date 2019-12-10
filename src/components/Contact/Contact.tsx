import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
background-color: lightgreen;
height: 100vh;
width: 100vw;
margin: 0;
padding: 0;
position: absolute;
`;

export const Contact: React.FC = () => {
  return (
    <>
    <StyledSection>
      <h1>Contact</h1>
    </StyledSection>
    </>
  );
};
