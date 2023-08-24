import React, { useEffect, useState } from 'react'
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'
import MyMarkers from './MyMarkers'
import MyButton from './MyButton'


//npm install react-naver-maps
//https://colinch4.github.io/2021-06-07/navermap/
//https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html
const MyMap = () => {

    const navermaps = useNavermaps()
    const [center, setCenter] = useState([37.3595704, 127.105399]);

    return (
        <NaverMap
            defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
            defaultZoom={10}
        >
            {/* <MapNavigation /> */}
            <Marker
                defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
            />
            <MyMarkers />
            <MyButton />
        </NaverMap>

    )

}

export default MyMap;