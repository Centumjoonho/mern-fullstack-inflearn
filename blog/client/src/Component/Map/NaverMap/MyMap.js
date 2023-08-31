import React, { useEffect, useState } from 'react'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, InfoWindow } from 'react-naver-maps'
import MyMarkers from './MyMarkers'
import MyButton from './MyButton'
import axios from "axios";


//npm install react-naver-maps
//https://colinch4.github.io/2021-06-07/navermap/
//https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html
const MyMap = () => {

    const navermaps = useNavermaps()
    const [scaleControl, setScaleControl] = useState(true)
    const [map, setMap] = useState(null)
    const [infowindow, setInfoWindow] = useState(null)

    function onSuccessGeolocation(position) {
        if (!map || !infowindow) return

        const location = new navermaps.LatLng(
            position.coords.latitude,
            position.coords.longitude,
        )
        map.setCenter(location)
        map.setZoom(10)
        infowindow.setContent(
            '<div style="padding:20px;">' +
            '현재 나의 위치' +
            '</div>',
        )
        infowindow.open(map, location)
        console.log('Coordinates: ' + location.toString())
    }

    function onErrorGeolocation() {
        if (!map || !infowindow) return

        const center = map.getCenter()
        infowindow.setContent(
            '<div style="padding:20px;">' +
            '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
            'latitude: ' +
            center.lat() +
            '<br />longitude: ' +
            center.lng() +
            '</div>',
        )
        infowindow.open(map, center)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                onSuccessGeolocation,
                onErrorGeolocation,
            )
        } else {
            const center = map.getCenter()
            infowindow.setContent(
                '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
            )
            infowindow.open(map, center)
        }
    }

    const evCharger = () => {

        var url = 'http://apis.data.go.kr/B552584/EvCharger/getChargerInfo';
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=NdbEdqC6AC4FnV%2BEPdFfqVXv55cNZPizD5Nr3ZvT7ZVoIk%2Bhbra9C4TMN3YRJYG3HXBy0DYax%2FlDCRor5Nhryg%3D%3D'; /* Service Key*/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
        queryParams += '&' + encodeURIComponent('period') + '=' + encodeURIComponent('5'); /* */
        queryParams += '&' + encodeURIComponent('zcode') + '=' + encodeURIComponent('11'); /* */

        axios.get(url + queryParams)
            .then(response => {
                console.log('Status', response.status);
                console.log('Headers', JSON.stringify(response.headers));
                console.log('Response received', response.data);

                const responseData = response.data; // Get the actual data


                // Handle the response data as needed
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    useEffect(() => {
        if (!map || !infowindow) {
            return
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                onSuccessGeolocation,
                onErrorGeolocation,
            )
        } else {
            var center = map.getCenter()
            infowindow.setContent(
                '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
            )
            infowindow.open(map, center)
        }
    }, [map, infowindow])




    return (
        <NaverMap
            defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
            defaultZoom={10}
            // 지도 컨트롤
            scaleControl={scaleControl}
            logoControl={scaleControl}
            mapDataControl={scaleControl}
            mapTypeControl={scaleControl}
            zoomControl={scaleControl}
            ref={setMap}
        >
            {/* <MapNavigation /> */}
            <InfoWindow ref={setInfoWindow} />
            <Marker
                defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
            />
            <MyMarkers />
            <MyButton map={map} setScaleControl={setScaleControl} />
        </NaverMap>

    )

}

export default MyMap;