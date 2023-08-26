import React, { memo } from "react";
import styled from "styled-components";

// children

function MapShadowBox({ children }) {
  const StyledShadowBox = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 16px;
    left: 80px;
    right: 16px;
    max-width: 400px;
    border-radius: 10px;
    padding: 6px 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    z-index: 101; // navermap 100
    background: #A9A9A9;

    @media (max-width: 600px) {
      max-width: 350px;
    }
    @media (max-width: 537px) {
      max-width: 300px;
    }
    @media (max-width: 500px) {
      max-width: 250px;
    }
    @media (max-width: 450px) {
      max-width: 200px;
    }
    @media (max-width: 400px) {
      max-width: 175px;
    }

  `;

  return <StyledShadowBox>{children}</StyledShadowBox>;
}

export default memo(MapShadowBox);