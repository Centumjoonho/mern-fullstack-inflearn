import React from 'react'
import MyMap from './NaverMap/MyMap'
import { Container as MapDiv } from 'react-naver-maps'
import MapNavigation from './MapNavigation'

const NaverMapContainer = () => {
    return (
        <MapDiv style={{ width: '100%', height: '100%', marginTop: '-30px' }}>
            <MapNavigation />
            <MyMap />
        </MapDiv>

    )
}

export default NaverMapContainer