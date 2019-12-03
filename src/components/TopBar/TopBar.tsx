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
    background: ${ c.topBarGrey }
    font-size: 1.5rem;
    height: 8vh;
`;
const StyledTabContainer = styled.ul`
    display: inline-flex;
    list-style: none;
    justify-content: space-between;
    width: 50%;
    padding: 0;
`;
const StyledTab = styled.li`
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
