import React from 'react'

import {BiBed} from 'react-icons/bi'
import {BsGlobe,BsBricks} from 'react-icons/bs'
import {IoRestaurantOutline} from 'react-icons/io5'
import {GiHouseKeys} from 'react-icons/gi'

import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

import {catdata} from './categorydata'


export function Category(){

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };

    return(
        <>
            <div className=" hidden py-5 lg:px-28 md:flex flex-row gap-4 justify-items-center ">
                <div className="flex flex-row h-16 border-solid border-2 border-black  justify-center items-center w-full rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                    <div className=" font-bold">Hotels</div>
                    <div className="pl-2"><BiBed size={20}></BiBed></div>
                </div>
                <div className="flex flex-row h-16  border-solid border-2 border-black justify-center items-center w-full rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                    <div className="font-bold">Vacation Rentails</div>
                    <div className="pl-2"><GiHouseKeys size={20}></GiHouseKeys></div>
                </div>
                <div className="flex flex-row h-16  border-solid border-2 border-black justify-center items-center w-full rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                    <div className="font-bold">Things To Do</div>
                    <div className="pl-2"><BsBricks size={20}></BsBricks></div>
                </div>
                <div className="flex flex-row h-16  border-solid border-2 border-black justify-center items-center w-full rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                    <div className=" font-bold">Restaurants</div>
                    <div className="pl-2"><IoRestaurantOutline size={20}></IoRestaurantOutline></div>
                </div>
                <div className="flex flex-row h-16  border-solid border-2 border-black justify-center items-center w-full rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                    <div className="font-bold">Travels Stories</div>
                    <div className="pl-2"><BsGlobe size={20}></BsGlobe></div>
                </div>
                <div className="flex flex-row h-16  border-solid border-2 border-black justify-center items-center w-full rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                    <div className="font-bold">More</div>
                    <div >
                        <select className="text-black">
                            <option></option>
                            <option>Hello</option>
                            <option>Hello</option>
                            <option>Hello</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* extra small device */}
            <div className="py-2 px-5 sm:hidden">
                <div className="relative flex flex-nowrap items-center ">
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideLeft} />
                <div id="slider" className="w-full h-full flex flex-nowrap overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">

                    {
                        catdata.map((cats,ind)=>(
                            <div key={ind} className="h-12 border-solid border-2 border-black  justify-center items-center w-[220px] flex flex-row p-2 m-1 rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                                <div >{cats.name}</div>
                                <div className="pl-2">{cats.icon}</div>
                            </div>   
                        )) 
                    }
                    </div>
                
            
                    
                    {/* <div className="h-12 border-solid border-2 border-black  justify-center items-center w-[220px] flex flex-row p-2 m-1 rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                        <div className="font-bold">More</div>
                        <div >
                            <select className="text-black">
                                <option></option>
                                <option>Hello</option>
                                <option>Hello</option>
                                <option>Hello</option>
                            </select>
                        </div>
                    </div> */}
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
                </div>
            </div>
        </>
    )
}