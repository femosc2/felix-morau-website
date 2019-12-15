import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: cornwallblue;
  height: 99vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  position: absolute;
`;


export const Skills: React.FC = () => {
  return (
    <>
      <StyledSection>
        <h1>Skills</h1>
      </StyledSection>
    </>
  );
};
