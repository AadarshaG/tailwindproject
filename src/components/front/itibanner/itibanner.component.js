import React from 'react'

import Image from '../../../img/index.jpg'

export function ItiBanner(){

    return(
        <>
            <div className="py-5 lg:px-28">
                <div className="grid">
                    <div className="relative">
                        <img src={Image} alt="" className="w-full object-cover"></img>
                        <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full flex flex-cols">
                            <div  className="left-4 bottom-24 text-2xl md:text-3xl text-white font-bold absolute">
                                Where To: inspiring Travelers' Choice itineraries
                            </div>
                            <div  className="left-4 bottom-16 lg:text-xl text-white font-bold absolute">
                            Tag along from coast to coast as our community's favorite destinations, beaches, hotels, and more come to life.
                            </div>
                            <div className="left-4 bottom-4  absolute">
                                <button className="bottom-1 text-0.7xl text-black font-bold absolute h-10 w-40 rounded-full bg-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}