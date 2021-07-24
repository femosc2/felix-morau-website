import React from 'react';
import styled from 'styled-components';

interface IProps {
  switchPage: (tab: string) => void;
}

export const Navigation: React.FC<IProps> = (props) => {
  const { switchPage } = props;
  console.log(switchPage);
  return (
    <StyledNavigationContainer>
      <a onClick={() => switchPage('about')}><h2> About </h2></a>
      <a onClick={() => switchPage('contact')}><h2> Contact </h2></a>
    </StyledNavigationContainer>
  );
};

const StyledNavigationContainer = styled.ul`
display: flex;
width: 15%;
justify-content: space-around;
list-decoration: none;
 > a {
    &:hover {
        cursor: pointer;
    }
}
align-content: center;
`;
