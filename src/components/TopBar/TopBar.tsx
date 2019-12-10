import React from 'react';
import styled from 'styled-components';

import { COLORS } from 'variables/colors';

interface IProps {
    tabs: string[]
    switchTab: (tabName: string) => void;
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
const StyledTab = styled.li`
  color: white;
`;

export const TopBar: React.FC<IProps> = (props: IProps) => {
  const { tabs, switchTab } = props;
  return (
    <StyledTopBar>
      <StyledTabContainer>
        { tabs.map((tab) => <StyledTab
          onClick={ () => switchTab(tab)}
          key={ tab }>
          { tab }
        </StyledTab>) }
      </StyledTabContainer>
    </StyledTopBar>
  );
};
