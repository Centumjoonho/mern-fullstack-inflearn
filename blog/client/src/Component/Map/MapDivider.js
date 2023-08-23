import React, { memo } from "react";
import styled from "styled-components";

// width
// height

function MapDivider({ width, height }) {
  const StyledDivider = styled.div`
    width: ${(props) => (props.width ? props.width : "1px")};
    height: ${(props) => (props.height ? props.height : "20px")};
    opacity: 0.2;
    background: #707070;
    margin: 0 8px;
  `;

  return <StyledDivider width={width} height={height} />;
}

export default memo(MapDivider);