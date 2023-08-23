import React, { memo } from "react";
import styled from "styled-components";

// children
// name
// value
// onChange
// onSubmit

function MapInput({ children, name, value, onChange, onSubmit }) {
    const StyledInput = styled.input`
    display: inline-block;
    border: none;
    width: 100%;
    min-height: 2em;
    font-size: 14px;
  `;
    //e.nativeEvent.isComposing 입력되는 값 진행 상황 bool 값
    const onEnterSubmit = (e) => {
        if (!onSubmit || e.nativeEvent.isComposing) return;
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <StyledInput
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={onEnterSubmit}
        >
            {children}
        </StyledInput>
    );
}

export default memo(MapInput);