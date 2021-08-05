/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

interface IProps {
    imageUrl: string;
    xPosition: string;
    yPosition: string;
}

export const Hero: React.FC<IProps> = (props) => {
  const { imageUrl, xPosition, yPosition } = props;
  console.log(imageUrl);
  return (
    <StyledHero imageUrl={imageUrl} xPosition={xPosition} yPosition={yPosition}>
      {props.children}
    </StyledHero>
  );
};

const StyledHero = styled.section<{imageUrl: string, xPosition: string, yPosition: string,}>`
background-image: url(${(props) => props.imageUrl});
height: ${window.screen.height}px;
background-repeat: no-repeat;
background-position: ${(props) => `${props.xPosition  } ${  props.yPosition}`}
`;


