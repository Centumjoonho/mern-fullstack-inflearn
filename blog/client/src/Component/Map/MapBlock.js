import React, { memo } from "react";
import styled from "styled-components";

// width : 100% 

//height props.height

//onclick : props.onClick


const StyledBlock = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  cursor: ${(props) => props.onClick ? "pointer" : "default"};
  
`;

function MapBlock({ height, onClick }) {
  <StyledBlock height={height} onClick={onClick} />;
}

export default memo(MapBlock);