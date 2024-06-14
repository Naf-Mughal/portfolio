import React from 'react'
import HomeCardContainer from '../../components/Home/HomeCardContainer'

function Home() {
    return (
        <section className='w-full flex justify-between px-16'>
            <div className="h-[70vh] w-[30%] bg-sec sticky top-[calc(50%-30vh)]"></div>
            <HomeCardContainer />
        </section>
    )
}

export default Home
