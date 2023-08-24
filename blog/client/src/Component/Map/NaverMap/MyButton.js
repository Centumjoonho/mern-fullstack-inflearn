import React, { memo } from 'react'
import {
    Container as MapDiv,
    NaverMap,
    useNavermaps,
    Overlay,
    useListener,
    Listener,
    useMap,
} from 'react-naver-maps';
import styled from "styled-components";




const MyButton = () => {

    const StyledButtonDiv = styled.div`
    position: fixed;
    bottom: 20px;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    z-index: 1000;
    `;

    const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    `;

    // Map의 instance를 가져옵니다.
    const naverMap = useMap()

    return (
        <StyledButtonDiv
            style={{
                position: 'relative',
            }}
        >
            <StyledButton
                onClick={() => {
                    naverMap.panTo({ lat: 37.5666103, lng: 126.9783882 })
                }}
            >
                서울 시청
            </StyledButton>

            <StyledButton
                onClick={() => {
                    naverMap.panTo({ lat: 37.5189767, lng: 126.8862918 })
                }}
            >
                재영소프트
            </StyledButton>
            <StyledButton
                onClick={() => {
                    naverMap.panTo({ lat: 35.1766639, lng: 129.1253774 })
                }}
            >
                센텀연구소
            </StyledButton>
            <StyledButton
                onClick={() => {
                    const center = naverMap.getCenter();
                    const centerString = `lat: ${center.lat()}, lng: ${center.lng()}`;
                    alert('center' + centerString);
                }}
            >
                현재 위치 로깅
            </StyledButton>
        </StyledButtonDiv>
    )
}

export default memo(MyButton)