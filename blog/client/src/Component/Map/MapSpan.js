import React, { memo } from "react";
import styled from "styled-components";

// children
// size: 'small' | 'normal' | 'title'
// color: string

function Span({ children, size = "normal", color }) {
  const StyledSpan = styled.span`
    color: ${(props) => props.color || "white"};

    &.small {
      font-size: 0.8rem;
    }

    &.normal {
      font-size: 1rem;
    }

    &.title {
      font-size: 1rem;
      font-weight: bold;
    }
  `;

  return <StyledSpan className={size} color={color}>{children}</StyledSpan>;
}

export default memo(Span);