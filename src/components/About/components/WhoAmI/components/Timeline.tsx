import React from 'react'
import { ITimelineEvent } from '../index';
import styled from 'styled-components';

interface IProps {
    timelineEvents: ITimelineEvent[];
}

export const Timeline: React.FC<IProps> = (props: IProps) => {
    const { timelineEvents } = props

    const StyledTimeLine = styled.div`
    width: 10vw;

    `

    const StyledTimelineBase = styled.div`
    background-color: #000;
    height: 3px;
    width: 60vh;
    margin-left: 20%;
    transform: rotate(90deg);
    margin-top: -30%;
    `

    const StyledDate = styled.p`

    width: 300%;
    text-align: center;

    &:nth-of-type(even) {
        margin-left: 0vw;
    }
    &:nth-of-type(odd) {
        margin-left: 25vw;
    }
    `

    const StyledTimeLineEventsList = styled.div`
    margin-left: 30%;
    `

    const StyledTimelineStart = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    margin-left: 35vw;
    margin-top: 29vh;
    `
    return (
        <>
            <StyledTimeLine>
                <StyledTimeLineEventsList>
                {timelineEvents.map(event =>
                    <>
                        <StyledDate> {event.event} <br />{event.date} </StyledDate>
                    </>
                )}
                </StyledTimeLineEventsList>
                <StyledTimelineBase />
                <StyledTimelineStart />
            </StyledTimeLine>

        </>


    )
}