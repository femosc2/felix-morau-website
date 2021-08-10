import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

export const ContactContainer: React.FC = () => {
  return (
    <>
      <StyledContactContainer> <StyledContactContent> ContactContainer </StyledContactContent> </StyledContactContainer>
    </>
  );
};


const StyledContactContainer = styled.section`
background-color: ${COLORS.white};
height: 100vh;
`;
const StyledContactContent = styled.section`
padding-top: 10vh;
color: ${COLORS.secondary};
> h2 {
  font-size: 72px;
  margin-top: 20%;
}
> p {
  font-size: 40px;
}
width: 50%;
text-align: center;
margin: 0 auto;
`;
