import React, { useState } from 'react'

const NavBar = () => {
    const [isShowNav, setIsShowNav] = useState(false)
    const handleShowNav = () => {
        setIsShowNav(!isShowNav)
    }

    return (
        <header className='flex max-w-screen-2xl lg:z-30 justify-between bg-black  py-4 px-4  items-center fixed md:py-0
        top-0 left-0 w-full'>
            <h2 className='lg:absolute text-white font-bold text-2xl md:pr-0'>S.FRANCO</h2>
            <i onClick={handleShowNav} className='bx bx-menu-alt-right cursor-pointer
             text-white text-3xl md:hidden'></i>
            <nav className={`absolute top-full bg-black  w-full
             grid text-center text-white 
             ${isShowNav ? "left-0" : "left-full"} text-[17px] gap-2 px-2 duration-200 
             pb-2 md:static md:flex md:pb-0 md:justify-center md:text-[17px] md:gap-11 `}>
                <a className=' hover:bg-gray-50 p-2 m-2 rounded duration-200' href="#Header">Inicio</a>
                <a className=' hover:bg-gray-50 p-2 m-2 rounded duration-200' href="#Project">Proyectos</a>
                <a className=' hover:bg-gray-50 p-2 m-2 rounded duration-200' href="#AboutMe">Acerca de mi</a>
                <a className=' hover:bg-gray-50 p-2 m-2 rounded duration-200' href="#Contact">Contáctame</a>
            </nav>
        </header>
    )
}

export default NavBar