import React, { useState } from 'react'
import logo from "../assets/Logo4.png"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom'
import {IoMdClose} from "react-icons/io"

const Nav = () => {
    const Menu=[
        {
            Title:"Home",
            Link:"/",
        },
        {
            Title:"About Us",
            Link:"/about",
        },
        {
            Title:"Contact Us",
            Link:"/contact",
        }
    ];

    const [MobileOpen, setMobileOpen] = useState(false)
    return (
        <>
        <div className='px-4 md:px-14 lg:px-20 xl:px-24 fixed top-0 w-[100%] left-0 right-0'>
            <div className="flex flex-row justify-between items-center py-4">
                <div className='flex flex-row gap-2 items-center'>
                    <div className='lg:w-[75px] w-[50px]'>
                        <img src={logo} alt="Logo" className='w-[100%] h-[100%]' />
                    </div>
                    <h2 className='md:text-xl lg:text-2xl text-white font-bold'>Baader Solution</h2>
                </div>
                <div className='hidden lg:flex flex-row md:gap-1 lg:gap-8 items-center text-white'>
                    {Menu.map((item,index)=>(
                        <Link to={item.Link} key={index}>
                            {console.log(window.location.pathname)}
                            <h3 className={`${window.location.pathname==item.Link&& 'border-white text-purple-900 bg-white'} text-xl font-bold  hover:border-white hover:bg-white hover:text-purple-900 rounded-3xl border-2 py-2 px-4 border-transparent duration-300 ease-in-out`}>{item.Title}</h3>
                        </Link>
                    ))}
                </div>
                <div className='block lg:hidden'>
                        <GiHamburgerMenu className='text-white text-4xl cursor-pointer' onClick={()=>{setMobileOpen(!MobileOpen)}} />
                </div>
            </div>
        </div>
        {MobileOpen&&(
            <div className='fixed z-50 bg-[rgba(15,1,34,0.5)] w-[100vw] h-[100vh]'>
                <div className='w-fit absolute top-2 right-2'>
                    <IoMdClose className='text-white text-6xl cursor-pointer' onClick={()=>{setMobileOpen(!MobileOpen)}}/>
                </div>
                <div className='flex justify-center flex-col text-white h-[100%] w-[100%] items-center'>
                    {Menu.map((item,index)=>(
                        <Link to={item.Link} key={index}>
                            {console.log()}
                            <h3 className={`${window.location.pathname==item.Link&& 'border-white text-purple-900 bg-white'} text-xl font-bold  hover:border-white hover:bg-white hover:text-purple-900 rounded-3xl border-2 py-2 px-4 border-transparent duration-300 ease-in-out`}>{item.Title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        )}
        </>
    )
}

export default Nav