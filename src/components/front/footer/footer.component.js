import React, { useState } from 'react'

import {Accordian, accordianData} from './accordion.structure'
import Logo from '../../../img/mg.svg'

import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

export function Footer(){

    const [isActive, setIsActive] = useState(null);


    return(
        <>
            <div className="hidden sm:block py-5 lg:px-28 bg-gray-200">
                <div className=" grid grid-cols-6 justify-between text-left gap-6">
                   
                    <div className="col-span-1">
                        <h5 className="font-semibold">About TripAdvisory</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Press</li>
                            <li>Resources and Policies</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h5 className="font-semibold">Explore</h5>
                        <ul>
                            <li>Write A Review</li>
                            <li>Add A Place</li>
                            <li>Join</li>
                            <li>Traveller's Choice</li>
                        </ul>
                    </div> 

                    <div className="col-span-1">
                        <h5 className="font-semibold">Do Business With Us</h5>
                        <ul>
                            <li>Owners</li>
                            <li>Business Advantage</li>
                            <li>Sponsered Placements</li>
                            <li>Advertise With Us</li>
                        </ul>
                    </div>    

                    <div className="col-end-7 col-span-2">
                        <h5 className="font-semibold">Tripadvisory Sites</h5>
                        <ul>
                            <li className="text-0.5xl">Discover your dream destination with Jetsetter</li>
                            <li>Book the best restaurants with TheFork</li>
                            <li>Book tours and attractions tickets with Viator</li>
                            <li>Read Cruise review with Cruise Critic</li>
                        </ul>
                    </div>                       
                </div>
                <div className="grid grid-cols-6 justify-between text-left gap-7 pt-10">
                    <div className="col-end-5 col-span-5 flex">
                        <div><img src={Logo} className="w-20"></img></div>
                        <div>
                        <p className="text-xs">© 2022 Tripadvisor LLC All rights reserved.</p>
                        <p className="inline  space-x-1 font-semibold">Terms of Use, Contact Us, SIte Map,How the Site Work, Cookie Consent</p>
                        <p className="text-xs">This is the version of our website addressed to speakers of English in the United States.
                         If you are a resident of another country or region, please select the appropriate version
                         of Tripadvisor for your country or region in the drop-down menu.</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <select className="h-[30px] rounded-lg w-full bg-white font-semibold justify-center text-center">
                            <option className="font-semibold">USD</option>
                        </select>
                    </div>
                    <div className="col-span-1 flex flex-col">
                        <select className="h-[30px] rounded-lg w-full bg-white font-semibold justify-center text-center">
                            <option className="font-semibold">USA</option>
                        </select>
                        <div className="pt-2 flex flex-row space-x-5">
                            <p> <BsFacebook size={20} /></p>
                           <p><AiFillInstagram size={20} /></p>
                           <p><FcGoogle size={20} /></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            {/* <div className="sm:hidden py-2 bg-gray-200">
                <div className="flex flex-row  justify-between text-left">
                    <div className="max-w-[300px] px-5">
                        <div className="py-2">
                            <div className=" cursor-pointer" onClick={() => setIsActive(1)}>
                                <div className="hover:underline">{isActive === 1 ? '-' : '+'} About Tripadvisory</div>
                        
                            </div>
                            {isActive === 1 && <div className="p-1">
                                <ul>
                                    <li>About Us</li>
                                    <li>Press</li>
                                    <li>Resources & Policies</li>
                                    <li>Careers</li>
                                </ul>
                            </div>}
                        </div>
                        <div className="py-2">
                            <div className="cursor-pointer" onClick={() => setIsActive(2)}>
                                <div className="hover:underline">{isActive === 2 ? '-' : '+'} Explore</div>
                        
                            </div>
                            {isActive === 2 && <div className="p-1">
                                <ul>
                                    <li>Write A Review</li>
                                    <li>Add a Place</li>
                                    <li>Join</li>
                                    <li>Travellers choice</li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="sm:hidden py-2 bg-gray-200">
                <div className="flex flex-row  justify-between text-left">
                    <div className="max-w-[300px] px-5">
                        <Accordian data={accordianData}></Accordian>
                    </div>
                </div>
                {/* other */}
                <div className="flex flex-col justify-between py-5">
                    <div className="px-5 ">
                        <select className="rounded-lg  w-full bg-white h-[30px]">
                            <option selected disabled className="pl-10">USD</option>
                            <option className="pl-10">YEN</option>
                            <option className="pl-10">CURRENCY</option>
                            <option className="pl-10">AUD</option>
                        </select>
                    </div>
                    <div className="px-5 pt-3" >
                        <select className="rounded-lg  w-full bg-white border-2 h-[30px]">
                            <option selected disabled>USA</option>
                            <option>Mexico</option>
                            <option>Germany</option>
                            <option>France</option>
                        </select>
                    </div>
                    <div className="flex justify-between px-5">
                        <div></div>
                        <div className="flex flex-row justify-between items-center pt-3 space-x-5">
                           <p> <BsFacebook size={20} /></p>
                           <p><AiFillInstagram size={20} /></p>
                           <p><FcGoogle size={20} /></p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between py-5">
                    <div className="px-5">
                        <img src={Logo} className="w-20 bg-gradient-to-r from-cyan-500 to-blue-500"></img>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">© 2022 Tripadvisor LLC All rights reserved.</p>
                        <p className="inline  space-x-1 font-semibold">Terms of Use, Contact Us, SIte Map,How the Site Work, Cookie Consent</p>
                        <p className="-left-1 text-xs">This is the version of our website addressed to speakers of English in the United States.
                         If you are a resident of another country or region, please select the appropriate version
                         of Tripadvisor for your country or region in the drop-down menu.</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}