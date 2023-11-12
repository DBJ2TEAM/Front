import React from 'react';
import styled from 'styled-components';
import { fontSizes, lineHeights, fontWeights } from '../styles/typography';
import * as color from '../styles/color';
import { BaseTypes } from '../types/common';

const StyledText = styled.p<BaseTypes>`
  font-size: ${fontSizes.bigText};
  font-weight: ${fontWeights.regular};
  line-height: ${lineHeights.normal};
  color: ${color.white};
  ${(props) => props.style}; 
`;

export const BigText = ({ children, style, ...props }: BaseTypes) => (
  <StyledText {...props} style={style}>{children}</StyledText>
);

