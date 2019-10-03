import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import reduxStore from '../../../../store';
import { ITimelineEvent } from './index';
import { Timeline } from './components/Timeline';
import felix from '../../../../assets/felix.png'
import background from '../../../../assets/background.png'
import meBackground from '../../../../assets/meBackground.png'
import { COLORS } from '../../../../variables/colors';

interface IProps {
    handleClick: () => void; 
    whoAmIActive: boolean;
    timelineEvents: ITimelineEvent[];
}



export const WhoAmI: React.FC<IProps> = (props: IProps) => {
    const { handleClick, whoAmIActive, timelineEvents } = props;
    const c = {...COLORS}

    const slideToLeft = keyframes`
        0% {
            transform: translateX(0%)
        }
        100% {
            transform: translateX(-90%) 
        }
    `
    const slideToRight = keyframes`
        0% {
            transform: translateX(-90%)
        }
        100% {
            transform: translateX(-0%) 
        }
    `

    const fadeOut = keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `

    const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `

    const StyledSection = styled.section`
        background: url(${ meBackground });
        background-size: cover;
        position: absolute;
        height: 92vh
        animation: ${whoAmIActive ? css`${slideToLeft} 1s` : css`${slideToRight} 1s`};
        animation-fill-mode: forwards;
        width: 90%;
        display: inline-flex;
        align-self: flex-start;
        margin: 0;
        padding: 0;
        transition: all 1s ease-in-out;
        z-index: 100;
        @media (max-width: 768px) {
            height: 200vh;
            text-align: center;
        };
    `

        const StyledTextSection = styled.section`
        position: absolute;
        right: 0%;
        @media (max-width: 768px) {
            margin-top: 20vh;
            right: 23%;
        };
    `
        const StyledVerticalSpan = styled.span`
        display: flex;
        font-size: 100px;
        margin-top: 200%;
        margin-bottom: -200%;
        animation: ${whoAmIActive ? css`${fadeIn} 0.5s` : css`${fadeOut} 0.5s`};
        transition: 1s;
        animation-fill-mode: forwards;
    `
    const StyledH2 = styled.h2`
        font-size: 8vw;
        color: #fff;
        margin: 0 auto;
        @media (max-width: 768px) {
            text-align: center;
            margin-left: 35%;
        }
    `
    const StyledH3 = styled.h3`
        font-size: 3vw;
        margin: 0;
        right: 5%;
        position: absolute;
        color: #fff;
        animation: ${whoAmIActive ? css`${fadeIn} 0.5s` : css`${fadeOut} 0.5s`};
        animation-fill-mode: forwards;
        opacity: 0;
        @media (max-width: 768px) {
            margin-left: 15%;
        }
    `

    const StyledP = styled.p`
    color: #fff;
    text-align: left;
    font-size: 1.2rem;
    max-width: 55vw;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
        margin-left: 15%;
    };
    `

    const StyledSpanFelix = styled.span`
    color: #ff00c3;
    `

    const StyledImg = styled.img`
    width: 35vw;
    height: 35vw;
    @media (max-width: 768px) {
        margin: 0 auto;
        };
    `

    return (
        <>
        <StyledSection onClick={ () => handleClick()}>
            <StyledImg src={ felix } alt=""/>
        <StyledTextSection>
                <StyledH2> Who am I? </StyledH2>
                <StyledP>
                    My name is <StyledSpanFelix> Felix Morau </StyledSpanFelix> I'm 23 years old and I'm a senior year Computer Science Student at Malmö University and a Fullstack Web Developer
                    Consultant at HiQ.
                </StyledP>
                <StyledP>
                    I was born and raised in Helsingborg where I went to elementery school and high school.
                    In my spare time I enjoy programming(duh), music, football and fashion.
                </StyledP>
                <StyledP>
                    My journey as a Software Developer started in 2017 when I dropped out of my marketing programme and enrolled in an Web Development Course.
                    I instantly realised how fun I found coding and transferred to Malmö University and the Information Architecture programme. I wrote my first
                    Hello World in November 2017, and from there on I have continued honing my skills as a software devloper. In 2019 started working as a Fullstack Web Developer
                    Consultant at HiQ.
                </StyledP>
                <StyledP>

                </StyledP>
            </StyledTextSection>
            <StyledTextSection>
            {"ME".split("").map(letter => 
                    <StyledVerticalSpan> {letter} </StyledVerticalSpan>
                )}
            </StyledTextSection>
            {/* <Timeline timelineEvents={ timelineEvents }  /> */}
        </StyledSection>
        </>
    )
}