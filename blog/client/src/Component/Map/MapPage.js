import React from 'react'
import MapNavigation from './MapNavigation'
import GlobalCSS from '../../Style/GlobalCSS'
import NaverMapContainer from './NaverMapContainer'
import { NavermapsProvider } from 'react-naver-maps';
// css 초기화 ! Map 페이지만 적용
//https://zeakd.github.io/react-naver-maps/guides/quickstart/
//https://navermaps.github.io/maps.js.ncp/
//https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html
//https://kwanghyuk.tistory.com/201

const MapPage = () => {
    return (
        <>
            <NavermapsProvider
                ncpClientId='a7spceqyli'>
                <GlobalCSS />
                <MapNavigation />
                <NaverMapContainer />
            </NavermapsProvider>
        </>

    )
}

export default MapPage