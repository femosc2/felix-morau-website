import React from 'react';
import styled from 'styled-components';

export const ConstructionContainer: React.FC = () => {

  const StyledSection = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: white;
  color: red;
  position: absolute;
  text-align: center;
  z-index: 20000000;
  `;

  return (
    <StyledSection>
      <h1> Under Construction!</h1>
      <h2>Contact</h2>
      <h3>felixmorau@gmail.com</h3>
    </StyledSection>
  );
};
