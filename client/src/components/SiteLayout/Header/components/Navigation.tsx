import { useTranslation } from 'hooks/translation';
import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from 'store';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';

interface IProps {
  switchPage: (tab: string) => void;
}

export const Navigation: React.FC<IProps> = (props) => {
  const { switchPage } = props;
  const currentPage: any = useSelector<IStore>(state => state.header.currentPage);
  return (
    <StyledNavigationContainer>
      <StyledNavigationLink onClick={() => switchPage('about')} name={'about'} currentPage={currentPage}>
        <h2> {useTranslation('About')} </h2>
      </StyledNavigationLink>
      <StyledNavigationLink onClick={() => switchPage('contact')} name={'contact'} currentPage={currentPage}>
        <h2> {useTranslation('Contact')}</h2>
      </StyledNavigationLink>
    </StyledNavigationContainer>
  );
};

const StyledNavigationContainer = styled.ul`
display: flex;
width: 15%;
justify-content: space-around;
list-decoration: none;
align-content: center;
`;

const StyledNavigationLink = styled.a<{name: string, currentPage: string}>`
color: ${(props) => props.name === props.currentPage ? COLORS.secondary : COLORS.white};
transition: 0.2s;
&:hover {
  cursor: pointer;
  color: ${COLORS.secondary};
}
`;

