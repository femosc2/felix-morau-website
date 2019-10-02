import React from 'react';
import WhoAmIContainer from './components/WhoAmI/index';
import WhatDoIDoContainer from './components/WhatDoIDo/index';
import reduxStore, { IStore } from '../../store/index';

export const About: React.FC = () => {


    return (
        <>
        <WhoAmIContainer />
        <WhatDoIDoContainer />
        </>
    )
}