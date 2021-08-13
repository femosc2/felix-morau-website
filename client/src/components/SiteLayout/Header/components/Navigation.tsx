import { useIsCompact } from 'hooks/isCompact';
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
  const isCompact = useIsCompact();
  return (
    <StyledNavigationContainer isCompact={isCompact}>
      <StyledNavigationLink onClick={() => switchPage('about')} name={'about'} currentPage={currentPage} isCompact={isCompact}>
        <h2> {useTranslation('About')} </h2>
      </StyledNavigationLink>
      <StyledNavigationLink onClick={() => switchPage('skills')} name={'skills'} currentPage={currentPage} isCompact={isCompact}>
        <h2> {useTranslation('skills')}</h2>
      </StyledNavigationLink>
      <StyledNavigationLink onClick={() => switchPage('projects')} name={'projects'} currentPage={currentPage} isCompact={isCompact}>
        <h2> {useTranslation('projects')}</h2>
      </StyledNavigationLink>
      <StyledNavigationLink onClick={() => switchPage('contact')} name={'contact'} currentPage={currentPage} isCompact={isCompact}>
        <h2> {useTranslation('Contact')}</h2>
      </StyledNavigationLink>
    </StyledNavigationContainer>
  );
};

const StyledNavigationContainer = styled.ul<{isCompact: boolean}>`
display: flex;
width: ${props => props.isCompact ? '100%' : '30%'};
flex-direction: ${props => props.isCompact ? 'column' : 'row'};
padding: 0;
justify-content: space-evenly;
list-decoration: none;
align-content: center;
`;

const StyledNavigationLink = styled.a<{name: string, currentPage: string, isCompact: boolean}>`
color: ${(props) =>
    props.name === props.currentPage ? !props.isCompact ? COLORS.secondary : COLORS.secondary
      :
      !props.isCompact ? COLORS.white : COLORS.primary};
transition: 0.2s;
background-color: ${props => props.isCompact ? COLORS.darkWhite : 'rgba(0,0,0,0)'};
border-bottom: ${props => props.isCompact ? `1px solid ${COLORS.primary}` : 'none'};
&:hover {
  cursor: pointer;
  color: ${COLORS.secondary};
}
&:first-child {
  border-top: ${props => props.isCompact ? `1px solid ${COLORS.primary}` : 'none'};
}
`;

