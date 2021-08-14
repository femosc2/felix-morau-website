import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import { SHADOWS } from 'variables/shadows';

interface IProps {
    text: string;
    variant: 'primary' | 'secondary' | 'primaryOutline' | 'secondaryOutline';
    size: string;
    onClick?: any;
}
type IButton = {
  variant: 'primary' | 'secondary' | 'primaryOutline' | 'secondaryOutline';
  size: string;
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

const StyledButton = styled.button<IButton>`
border: none;
border-radius: 25px;
transition: 0.2s;
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
    case 'primaryOutline':
      return css`
        color: ${COLORS.primary};
        background-color: rgba(0,0,0,0);
        border: 1px solid ${COLORS.primary};
        `;
    }
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
    transition: 0.2s;
    background-color: ${COLORS.secondary};
    color: ${COLORS.primary};
  }
  box-shadow: ${SHADOWS.buttonShadow};
`;

const StyledButtonText = styled.p`
`;


