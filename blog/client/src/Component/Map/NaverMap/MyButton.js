import React, { memo, useState } from 'react'
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




const MyButton = (props) => {

    const StyledButtonDiv = styled.div`
    position: fixed;
    bottom: 20px;
    top: 80px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    z-index: 1000;
    `;

    const StyledButton = styled.button`
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    `;

    // Map의 instance를 가져옵니다.
    const naverMap = useMap()
    const navermaps = useNavermaps()

    const Jeju = new navermaps.LatLng(33.3590628, 126.534361)
    const Busan = new navermaps.LatLng(35.1797865, 129.0750194)
    const Dokdo = new navermaps.LatLngBounds(
        new navermaps.LatLng(37.2380651, 131.8562652),
        new navermaps.LatLng(37.2444436, 131.8786475),
    )
    //lat: 35.1766639, lng: 129.1253774
    const Centum = new navermaps.LatLngBounds(
        new navermaps.LatLng(35.1756639, 129.1243774),
        new navermaps.LatLng(35.1760545, 129.1257675),
    )

    const Center = new navermaps.LatLng(37.5666805, 126.9784147)



    return (
        <StyledButtonDiv
            style={{
                position: 'relative',
            }}
        >
            <StyledButton

                onClick={(e) => {
                    e.preventDefault()
                    if (props.map) {
                        props.map.setCenter(Jeju)
                    }
                }}
            >
                제주도 setCenter
            </StyledButton>
            <StyledButton

                onClick={(e) => {
                    e.preventDefault()
                    if (props.map) {
                        props.map.fitBounds(Dokdo)
                    }
                }}
            >
                독도 fitBounds
            </StyledButton>
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
                onClick={(e) => {
                    e.preventDefault()
                    if (props.map) {
                        props.map.panToBounds(Centum)
                    }

                    // naverMap.panTo({ lat: 35.1766639, lng: 129.1253774 })
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
                위치 로깅
            </StyledButton>
            <StyledButton
                onClick={() => {
                    props.setScaleControl((prev) => !prev)
                }}
            >
                컨트롤러
            </StyledButton>
        </StyledButtonDiv>
    )
}

export default memo(MyButton)