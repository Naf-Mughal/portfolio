import React from 'react'
import FooterComponent from '../components/Footer'
import { Outlet } from 'react-router-dom'
import HomeNav from '../components/Home/HomeNav'
import HeaderComponent from '../components/Header'

function HomeLayout({ children }) {
    return (
        <section className='bg-light h-[100vh] relative'>
            <HeaderComponent />
            <Outlet />
            <HomeNav />
            <FooterComponent />
        </section>
    )
}

export default HomeLayout
