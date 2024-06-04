import React from 'react'
import HomeCard from './HomeCard'

function HomeCardContainer() {
    const objArr = [
        {
            index: 1,
        },
        {
            index: 2,
        },
        {
            index: 3,
        },
        {
            index: 4,
        },
    ];

    return (
        <div className="w-[60%] flex items-center justify-end relative homeCradContainer">
            {
                objArr.map(item => (
                    <HomeCard key={item.index} style={{ '--number': item.index }} getRef={item.index} />
                ))
            }
        </div>
    )
}

export default HomeCardContainer
