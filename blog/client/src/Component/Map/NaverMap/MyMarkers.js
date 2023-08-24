import React, { useEffect, useState, useRef } from 'react'
import {
    Container as MapDiv,
    NaverMap,
    useNavermaps,
    Overlay,
    useListener,
    Listener,
    useMap,
} from 'react-naver-maps';


const MyMarkers = () => {
    const navermaps = useNavermaps()

    // 마커를 한번만 생성하기 위해 useState lazy initialize 사용
    const [marker1] = useState(
        () =>
            new navermaps.Marker({
                position: { lat: 37.5666103, lng: 126.9783882 },
            }),
    )

    // 마커를 한번만 생성하기 위해 useRef 사용
    const marker2Ref = useRef(null)
    if (!marker2Ref.current) {
        marker2Ref.current = new navermaps.Marker({
            position: { lat: 37.5657259, lng: 126.97547 },
        })
    }
    // 마커를 한번만 생성하기 위해 useRef 사용
    const marker3Ref = useRef(null)
    if (!marker3Ref.current) {
        marker3Ref.current = new navermaps.Marker({
            position: { lat: 37.5189767, lng: 126.8862918 },
        })
    }
    // 마커를 한번만 생성하기 위해 useRef 사용
    const marker4Ref = useRef(null)
    if (!marker4Ref.current) {
        marker4Ref.current = new navermaps.Marker({
            position: { lat: 35.1766639, lng: 129.1253774 },
        })
    }

    const marker2 = marker2Ref.current
    const marker3 = marker3Ref.current
    const marker4 = marker4Ref.current
    // hook 으로 이벤트 리스너 등록
    useListener(marker1, 'click', () => window.alert('서울시청 click'))

    return (
        <>
            <Overlay element={marker1} />
            <Overlay element={marker2}>
                {/* Component 로 이벤트 리스너 등록 */}
                <Listener
                    type="click"
                    listener={() => window.alert('덕수궁 click')}
                />
            </Overlay>
            <Overlay element={marker3}>
                {/* Component 로 이벤트 리스너 등록 */}
                <Listener
                    type="click"
                    listener={() => window.alert('재영소프트 click')}
                />
            </Overlay>
            <Overlay element={marker4}>
                {/* Component 로 이벤트 리스너 등록 */}
                <Listener
                    type="click"
                    listener={() => window.alert('재영소프트 click')}
                />
            </Overlay>
        </>
    )
}

export default MyMarkers