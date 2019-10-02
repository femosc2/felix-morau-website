import React from 'react';
import styled from 'styled-components';
import reduxStore from '../../../../store';

interface IProps {
    handleClick: () => void; 
    whoAmIActive: boolean;
}

export const WhatDoIDo: React.FC<IProps> = (props: IProps) => {
    const { handleClick, whoAmIActive } = props;

    const StyledSection = styled.section`
        background: blue;
        height: 100vh;
        width: 100%;
        display: inline-flex;
        align-self: flex-start;
        margin: 0;
        padding: 0;
        z-index: -10;
        transition: transform 1s ease-in-out;
        `

    return (
        <>
        <StyledSection onClick={ () => handleClick()}>What do i do?</StyledSection>
        </>
    )
}