import React from 'react'
import MapShadowBox from './MapShadowBox'
import MapButton from './MapButton'
import MapSpan from './MapSpan'
import MapDivider from './MapDivider'
import MapBlock from './MapBlock'
import { BsSearch } from 'react-icons/bs'

const MapNavigation = () => {
    return (
        <MapShadowBox>
            <MapButton type='link' url="/map_page">
                <MapSpan size='title'>EveryOne</MapSpan>
            </MapButton>
            <MapDivider />
            <MapBlock height="28px" />
            <MapButton><BsSearch size={20} /></MapButton>
        </MapShadowBox>
    )
}

export default MapNavigation