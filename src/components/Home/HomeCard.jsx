import React, { createRef, useRef } from 'react'

function HomeCard({ style, getRef }) {
    const ref = useRef(getRef);
    console.log(ref)

    return (
        <div className="homeCard bg-sec absolute" style={style} ref={ref}>

        </div>
    )
}

export default HomeCard
