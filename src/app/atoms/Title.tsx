import React from "react";
import styled from 'styled-components';
import { fontSizes, lineHeights, fontWeights } from '../styles/typography';
import * as color from '../styles/color';
import { BaseTypes } from '../types/common';

const StyleMainTitle = styled.h1<BaseTypes>`
  font-size: ${fontSizes.heading2};
  font-weight: ${fontWeights.medium};
  line-height: ${lineHeights.normal};
  background-color: ${color.white};
  color: ${color.secondaryColor};
  ${(props) => props.style}; 
`;

export const Title: React.FC<BaseTypes> = ({ children, ...props }) => (
  <StyleMainTitle {...props}>{children}</StyleMainTitle>
);

const StyleSubTitle = styled.h1<BaseTypes>`
  font-size: ${fontSizes.heading1};
  font-weight: ${fontWeights.regular};
  line-height: ${lineHeights.normal};
  background-color: ${color.white};
  color: ${color.primaryColor};
  ${(props) => props.style}; 
`;

export const SubTitle: React.FC<BaseTypes> = ({children, ...props}) => (
  <StyleSubTitle {...props}>{children}</StyleSubTitle>
)