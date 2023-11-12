import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { fontSizes, lineHeights, fontWeights } from '../styles/typography';
import * as color from '../styles/color';
import { BaseTypes } from '../types/common';

const StyledButton = styled.button<BaseTypes>`
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.regular};
  line-height: ${lineHeights.normal};
  background-color: ${color.accent};
  color: ${color.primaryColor};
  ${(props) => props.style}; 
`;

export interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: CSSObject;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, style }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
