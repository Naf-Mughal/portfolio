import React from 'react'
import HeaderComponent from '../components/Header'
import FooterComponent from '../components/Footer'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}

export default BlogLayout
