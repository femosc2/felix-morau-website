import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import reduxStore from '../../../../store';

interface IProps {
    handleClick: () => void; 
    whoAmIActive: boolean;
}



export const WhoAmI: React.FC<IProps> = (props: IProps) => {
    const { handleClick, whoAmIActive } = props;

    const slideToLeft = keyframes`
        0% {
            transform: translateX(0%)
        }
        100% {
            transform: translateX(-80%) 
        }
    `
    const slideToRight = keyframes`
        0% {
            transform: translateX(-80%)
        }
        100% {
            transform: translateX(-0%) 
        }
    `

    const StyledSection = styled.section`
        background: pink;
        position: absolute;
        height: 100vh;
        animation: ${whoAmIActive ? css`${slideToLeft} 1s` : css`${slideToRight} 1s`};
        animation-fill-mode: forwards;
        width: 80%;
        display: inline-flex;
        align-self: flex-start;
        margin: 0;
        padding: 0;
        transition: all 1s ease-in-out;
        `

    return (
        <>
        <StyledSection onClick={ () => handleClick()}>Who Am I</StyledSection>
        </>
    )
}