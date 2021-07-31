import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';

interface IProps {
    text: string;
    variant: string;
    size: string;
    onClick?: any;
}

export const Button: React.FC<IProps> = (props) => {
  return (
    <StyledButton onClick={() => props.onClick()}
      size={props.size}
      variant={props.variant}>
      <StyledButtonText>
        {props.text}
      </StyledButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.button<{variant: string, size: string}>`
border: none;
${({ variant }) => {
    switch(variant) {
    case 'primary':
      return css`
        color: ${COLORS.secondary};
        background-color: ${COLORS.primary};
      `;
    case 'secondary':
      return css`
        color: ${COLORS.primary};
        background-color: ${COLORS.secondary};
        `;
    }
  }}
  ${({ size }) => {
    switch(size) {
    case 'small':
      return css`
        width: 15%;
      `;
    case 'medium':
      return css`
        width: 30%;
        `;
    }
  }}
  &:hover {
    cursor: pointer;
  }
`;

const StyledButtonText = styled.p`
`;


