import { useTranslation } from 'hooks/translation';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

export const AboutContainer: React.FC = () => {
  return (
    <StyledAboutContainer>
      {useTranslation('Hello')}
    </StyledAboutContainer>
  );
};

const StyledAboutContainer = styled.section`
background-color: ${COLORS.secondary};
height: 100vh;
`;

