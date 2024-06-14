import React from 'react'
import FooterComponent from '../components/Footer'
import { Outlet } from 'react-router-dom'
import HomeNav from '../components/Home/HomeNav'
import HeaderComponent from '../components/Header'

function HomeLayout({ children }) {
    return (
        <section>
            <HeaderComponent />
            <Outlet />
            <HomeNav />
            <FooterComponent />
        </section>
    )
}

export default HomeLayout
