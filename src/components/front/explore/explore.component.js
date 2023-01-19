import React from 'react'

import {BsHeart} from 'react-icons/bs'

import More1 from '../../../img/more1.jpg'
import More2 from '../../../img/more2.jpg'
import More3 from '../../../img/more3.jpg'

export function ExploreMore(){

    return(
        <>
            <div className="py-5 lg:px-28 bg-gray-100">
                <h1 className="text-xl font-bold text-center md:text-left">More to Explore</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center pt-5 ">
                        <div className=" rounded overflow-hidden shadow-lg max-w-md  flex flex-col relative">
                            <img src={More1} alt="Nepal1" className="w-full h-[280px] object-cover"></img>
                            <div className="p-5">
                                <div className="font-bold text-0.5xl mb-2">The 6 best places to travel in November 2022 in the US</div>
                            
                            </div>
                            <div className="absolute top-0 left-0 h-full w-full">
                                <button className="bg-white rounded-full right-4 top-3 absolute h-10 w-10  "><BsHeart className="pl-2" size={30} /></button>
                            </div>
                        </div>
                        <div className=" rounded overflow-hidden shadow-lg max-w-md  flex flex-col relative">
                            <img src={More2} alt="Nepal1" className="w-full h-[280px] object-cover"></img>
                            <div className="p-5">
                                <div className="font-bold text-0.5xl mb-2">Europe in the off-season: Paris</div>
                            
                            </div>
                            <div className="absolute top-0 left-0 h-full w-full">
                                <button className="bg-white rounded-full right-4 top-3 absolute h-10 w-10  "><BsHeart className="pl-2" size={30} /></button>
                            </div>
                        </div>
                        <div className=" rounded overflow-hidden shadow-lg max-w-md  flex flex-col relative">
                            <img src={More3} alt="Nepal1" className="w-full h-[280px] object-cover"></img>
                            <div className="p-5">
                                <div className="font-bold text-0.5xl mb-2">Europe in the off-season: Paris</div>
                            
                            </div>
                            <div className="absolute top-0 left-0 h-full w-full">
                                <button className="bg-white rounded-full right-4 top-3 absolute h-10 w-10  "><BsHeart className="pl-2" size={30} /></button>
                            </div>
                        </div>                        
                    </div>
            </div>
        </>
    )
}