import React from 'react'

import Image1 from '../../../img/in1.jpg'
import Image2 from '../../../img/in2.jpg'
import Image3 from '../../../img/in3.jpg'
import Image4 from '../../../img/in4.jpg'
import Image5 from '../../../img/in5.jpg'

export function Interests(){


    return(
        <>
            <div className="py-5 lg:px-28 ">
                <h1 className="text-3xl font-bold text-center md:text-left">Find Things To Do By Interest</h1>
                <p className="text-center md:text-left">Collections of our best bookable experiences</p>
                <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center h-auto">
                    <div className="relative overflow-hidden shadow-lg max-w-md">
                        <img src={Image1} className="w-full h-full object-cover"></img>
                        <div className="absolute top-0 left-0 h-full w-full">
                            <p className="left-4 bottom-4 text-xl text-white font-bold absolute">Outdoors</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={Image2} className="w-full h-full object-cover"></img>
                        <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                            <p className="left-4 bottom-4 text-xl text-white font-bold absolute">Food & Drinks</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={Image3} className="w-full h-full object-cover"></img>
                        <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                            <p className="left-4 bottom-4 text-xl text-white font-bold absolute">Arts & Culture</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={Image4} className="w-full h-full object-cover"></img>
                        <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                            <p className="left-4 bottom-4 text-xl text-white font-bold absolute">By the Water</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}