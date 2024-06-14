import React from 'react'
import { Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <nav className='flex justify-between w-full px-12 h-[80px] items-center fixed top-0 z-50 bg-[#ffffff80] backdrop:blur-[24px]'>
            <div className="flex">
                <Link className='font-bold text-xl' to={'/'} >Logo</Link>
            </div>
            <div className="flex gap-6 items-center">
                <Link className='font-bold text-xl underline text-sec hover:scale-125 transition-all' to={'/blog'} >Blog</Link>
                <div className="flex items-center gap-2">
                    <Link className='btn btn-pri' to={'/login'} >Log In</Link>
                    <Link className='btn btn-sec' to={'/register'} >Register</Link>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent


export const AdminHeaderComponent = () => {
    return (
        <div>

        </div>
    )
}
