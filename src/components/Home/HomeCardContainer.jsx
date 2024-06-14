import React, { useEffect, useState } from 'react'
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
            index: 4
        },
    ];

    return (
        <div>
            {
                objArr.map(item => (
                    <HomeCard key={item.index} style={{ '--number': item.index}} />
                ))
            }
        </div>
    )
}

export default HomeCardContainer
