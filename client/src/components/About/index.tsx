import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';

export const AboutContainer: React.FC = () => {
  return (
    <StyledAboutContainer>
      {useTranslation('Hello')}
    </StyledAboutContainer>
  );
};

const StyledAboutContainer = styled.section`
background-color: blue;
height: 100vh;
`;

