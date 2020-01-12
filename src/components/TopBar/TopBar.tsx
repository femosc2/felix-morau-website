import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { Revealer } from 'variables/animations';

interface IProps {
    tabs: string[]
    switchTab: (tabName: string) => void;
    activePage: string;
}

const c = { ...COLORS };

const StyledTopBar = styled.nav`
    width: 100%;
    position: fixed;
    font-size: 1.5rem;
    height: 8vh;
    z-index: 10000000;
`;
const StyledTabContainer = styled.ul`
    display: inline-flex;
    list-style: none;
    justify-content: flex-end;
    width: 100%;
    padding: 0;
    margin-left: 0px;
`;
const StyledTab = styled.li<{ activePage: string, tab: string}>`
  color: ${(props) => props.tab === props.activePage ? c.red : c.black};
  display: inline-block;
  cursor: pointer;
  transition: 0.2s;
  text-transform: capitalize;

  &:hover {
    color: ${ c.pink };
    transition: 0.2s;
  }
  
  &:after {
    content: '';
    display: block;
    width: ${(props) => props.tab === props.activePage ? '100%': '0'};
    height: 2px;
    background-color: ${(props) => props.tab === props.activePage ? c.red : c.pink};
    transition: width .5s;
  }

  &:hover::after {
    width: 100%;
    transition: width .5s;
  }
`;


export const TopBar: React.FC<IProps> = (props: IProps) => {
  const { tabs, switchTab } = props;
  return (
    <StyledTopBar>
      <StyledTabContainer>
        { tabs.map((tab) => <Revealer
          key={ tab }
          boxColor={ props.activePage === tab ? c.red : c.black}>
          <StyledTab
            activePage={ props.activePage }
            tab={ tab }
            onClick={ () => switchTab(tab)}
            key={ tab }>
            { tab }|
          </StyledTab>
        </Revealer>) }
      </StyledTabContainer>
    </StyledTopBar>
  );
};
