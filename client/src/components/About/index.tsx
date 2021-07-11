import React from 'react';
import styled from 'styled-components';

export const AboutContainer: React.FC = () => {
  return (
    <StyledAboutContainer>
      About
    </StyledAboutContainer>
  );
};

const StyledAboutContainer = styled.section`
background-color: blue;
height: 100vh;
`;

