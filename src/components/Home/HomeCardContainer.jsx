import React from 'react'
import HomeCard from './HomeCard'

function HomeCardContainer() {
    return (
        <div className="w-[60%] flex items-center justify-end relative homeCradContainer">
            <HomeCard style={{'--number' : 1}} />
            <HomeCard style={{'--number' : 1}} />
            <HomeCard style={{'--number' : 1}} />
        </div>
    )
}

export default HomeCardContainer
