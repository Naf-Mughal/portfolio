import React, { useEffect, useState } from 'react'
import { BsFillHouseFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { PiNotebookFill } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
function HomeNav() {
    const [active , setActive] = useState(0);
    const location = useLocation()
    useEffect(()=>{
        if(location.pathname === "/works") setActive(3)
        else setActive(0)
    },[location])
    return (
        <div className="fixed w-full flex justify-center bottom-4 z-50">
            <div className='nav bg-sec/35 h-[60px] md:h-[80px] rounded-full px-2'>
                <div className={`navItem ${active === 0  ? 'active' : ''}`} onClick={()=>{setActive(0)}}>
                    <Link to={"/"}>
                        <BsFillHouseFill className='md:w-8 h-auto xs:w-6 navLogo' />
                    </Link>
                </div>
                <div className={`navItem ${active === 1  ? 'active' : ''}`} onClick={()=>{setActive(1)}}>
                    <Link to={""}>
                        <IoMdContact className='md:w-8 h-auto xs:w-6 navLogo' />
                    </Link>
                </div>
                <div className={`navItem ${active === 2  ? 'active' : ''}`} onClick={()=>{setActive(2)}}>
                    <Link to={""}>
                        <GrServices className='md:w-8 h-auto xs:w-6 navLogo' />
                    </Link>
                </div>
                <div className={`navItem ${active === 3  ? 'active' : ''}`} onClick={()=>{setActive(3)}}>
                    <Link to={"/works"}>
                        <PiNotebookFill className='md:w-8 h-auto xs:w-6 navLogo' />
                    </Link>
                </div>
                <div className={`navItem ${active === 4  ? 'active' : ''}`} onClick={()=>{setActive(4)}}>
                    <Link to={""}>
                        <RiMessage2Fill className='md:w-8 h-auto xs:w-6 navLogo' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeNav
