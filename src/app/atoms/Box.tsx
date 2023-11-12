import React from "react";
import { BaseTypes } from "../types/common";

const Box = ({ children, ...props }: BaseTypes) => (
  <div {...props}>{children}</div>
);

export default Box;