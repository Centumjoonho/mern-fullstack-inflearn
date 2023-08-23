import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// children
// onClick
// type: 'link' | 'button'
// url

function MapButton({ children, onClick, type = "button", url }) {
    const StyledButton = styled.button`
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    padding: 0;
    color:white;
    cursor: pointer;
    a{
        color:white;
        text-decoration: none;
    }
    
  `;

    const RealButton = <StyledButton onClick={onClick}>{children}</StyledButton>;

    const RealLink = (
        <StyledButton>
            <Link to={url}>{children}</Link>
        </StyledButton>
    );

    return type === "link" && url ? RealLink : RealButton;
}

export default memo(MapButton);