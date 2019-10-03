import React from 'react';
import { TopBar } from './TopBar'
import { withRouter, RouteComponentProps } from 'react-router';

const TopBarContainer: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const TABS = ['about', 'projects', 'contact']

    const switchTab = (tabName: string) => {
        props.history.push('/' + tabName)
    }

    return (
        <TopBar tabs={ TABS } switchTab= { switchTab } />
    )
}

export default withRouter(TopBarContainer)

