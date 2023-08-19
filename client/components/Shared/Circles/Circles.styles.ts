import { styled } from "styled-components";

export const StyledCircle = styled.aside<{size: number, backgroundColor?: string, marginLeft?: number, blurredBackground?: boolean, marginTop?: number}>`
    position: absolute;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    border-radius: 50%;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'rgba(0, 0, 0, 0)'};
    backdrop-filter: ${(props) => props.blurredBackground && 'blur(200px)' };
    margin-left: ${(props) => props.marginLeft}vw;
    margin-top: ${(props) => props.marginTop}%;
`;
