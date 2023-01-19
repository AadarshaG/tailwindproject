import React, { useState } from 'react'

import Logo from '../../../img/logo.svg'
import Banner from '../../../img/and.jpg'

import {SlPencil} from 'react-icons/sl'
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineClose} from 'react-icons/ai'
import {HiOutlineBell,HiOutlineMenu} from 'react-icons/hi'
import {BsSearch} from 'react-icons/bs'

import {BiBed} from 'react-icons/bi'

export function Header(){

    const [nav, setNav] = useState(false)

    const handleChange = () => {
        setNav(nav)
    }

    return(
        <>
        <div className="hidden sm:flex h-40 bg-gray-100">
            <div className="flex flex-col py-5 px-5">
                <p className=" lg:text-0.5xl lg:font-[Poppins] sm:text-0.1xl sm:font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's  Lorem Ipsum has been the industry's
                 </p>
                 <h1 className="py-3 text-xl font-bold font-[Poppins]">Lorem Industry</h1>
                 <div>
                    <button className="bg-gray-900 text-center  text-white rounded-md h-8 w-40">Explore Now</button>
                 </div>

            </div>
            <div>
                <img src={Banner} alt="" className="w-full h-full object-cover pr-5"></img>
            </div>
        </div>

        <div className="flex flex-row h-20 justify-between items-center py-5 lg:px-28">
            <div className="hidden md:flex">
                <img className="h-10" src={Logo} alt="" ></img>
            </div>
            <div className="hidden md:flex py-2">
                <ul className="flex justify-between">
                    <li className="pl-8 text-md font-bold flex flex-row"><SlPencil size={20} />Reviews</li>
                    <li className="pl-8 text-md font-bold flex flex-row"><AiOutlineHeart size={20} />Trips</li>
                    <li className="pl-8 text-md font-bold flex flex-row"><HiOutlineBell size={20} />Alerts</li>
                    <li className="pl-8 text-md font-bold">
                        <button className="bg-black text-white rounded-b-full rounded-t-full h-8 w-20">Sign In</button>
                    </li>
                    <li className="pl-8 text-md font-bold flex flex-row"><AiOutlineShoppingCart size={20} />Carts</li>
                </ul>
            </div>

             {/* Hamburger */}
             <div className="shadow-lg z-50 h-14 bg-white md:hidden flex flex-1 justify-between items-center px-5 fixed w-full top-0">
                  <div onClick={() =>setNav(!nav)} className="z-10 pb-4">
                  {
                    nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenu size={20} />
                  }
                  </div>
                  <div className="pb-4">
                    <img src={Logo} alt="" className="h-5"></img>
                  </div>
                  <div className="flex justify-between pb-4">
                        <BsSearch></BsSearch>
                        <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  </div>

            </div>
            { /* display items in small device */}
                <div onClick={() =>setNav(!nav)} className={ nav ? " absolute left-0 top-0 w-full bg-white px-4 py-7 flex flex-col z-10" : "absolute left-[-100%]" }>
                    <ul>
                        <div className="p-4 flex flex-col">
                            <button className="p-3 my-4 border rounded-full bg-black text-white hover:bg-emerald-700">Sign In</button>
                        </div>
                        <li className="p-4 text-xl flex flex-row"><SlPencil size={20} /> Write a Reviews</li>
                        <li className="p-4 text-xl flex flex-row"><AiOutlineHeart size={20} /> Trips</li>
                        <li className="p-4 text-xl flex flex-row"><HiOutlineBell size={20} /> Alerts</li>
                        <li className="p-4 text-xl flex flex-row">Bookings</li>
                        <hr></hr>
                        <li className="p-4 text-xl flex flex-row"><BiBed size={20} /> Hotels</li>
                        <li className="p-4 text-xl flex flex-row">Vacational Rentals</li>
                        <li className="p-4 text-xl flex flex-row">Things To Do</li>
                        <li className="p-4 text-xl flex flex-row">Restaurants</li>
                        <li className="p-4 text-xl flex flex-row">Travel Stories</li>
                        <li className="p-4 text-xl flex flex-row">Flights</li>
                        <li className="p-4 text-xl">More..</li>
                    </ul>
                </div>  
        </div>

        </>
    )
}