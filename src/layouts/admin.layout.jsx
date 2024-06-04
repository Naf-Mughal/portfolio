import React from 'react'
import { AdminHeaderComponent } from '../components/Header'
import FooterComponent from '../components/Footer'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
    return (
        <>
            <AdminHeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}

export default AdminLayout
