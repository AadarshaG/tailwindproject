import React from 'react'

import {BsHeart} from 'react-icons/bs'

import Nepal1 from '../../../img/n1.jpg'
import Nepal2 from '../../../img/n2.jpg'
import Nepal3 from '../../../img/n3.jpg'
import Nepal4 from '../../../img/n4.jpg'

export function NepalTour(){

    return(
        <>
            <div className="py-5 lg:px-28">
                <h1 className="text-2xl font-bold text-center md:text-left"> Ways to tour Nepal </h1>
                <p  className="text-center md:text-left">Book these experiences for a close-up look at Nepal.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center pt-5">
                    <div className="rounded overflow-hidden shadow-lg max-w-md  flex flex-col relative">
                        <img src={Nepal1} alt="Nepal1" className="w-full object-cover"></img>
                        <div className="p-5">
                            <div className="font-bold text-0.5xl mb-2">Everest Base Camp Trek</div>
                            <p>Rating</p>
                            <div className="font-bold text-0.5xl mb-2">from $1350 for adults</div>
                        </div>
                        <div className="absolute top-0 left-0 h-full w-full">
                            <button className="bg-white rounded-full right-4 top-3 absolute h-10 w-10  "><BsHeart className="pl-2" size={30} /></button>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg max-w-md  flex flex-col relative">
                        <img src={Nepal2} alt="Nepal1" className="w-full object-cover"></img>
                        <div className="p-5">
                           <div className="font-bold text-0.5xl mb-2">Private Kathmandu Sightseeing Tour - UNESCO World Heritage Sites</div>
                           <p>Rating</p>
                           <div className="font-bold text-0.5xl mb-2">from $1350 for adults</div>
                        </div>
                        <div className="absolute top-0 left-0 h-full w-full">
                            <button className="bg-white rounded-full right-4 top-3 absolute h-10 w-10  "><BsHeart className="pl-2" size={30} /></button>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg max-w-md  flex flex-col relative">
                        <img src={Nepal3} alt="Nepal1" className="w-full object-cover"></img>
                        <div className="p-5">
                           <div className="font-bold text-0.5xl mb-2">Nagarkot Sunrise View and Day Hiking from Kathmandu</div>
                           <p>Rating</p>
                           <div className="font-bold text-0.5xl mb-2">from $1350 for adults</div>
                        </div>
                        <div className="absolute top-0 left-0 h-full w-full">
                            <button className="bg-white rounded-full right-4 top-3 absolute h-10 w-10  "><BsHeart className="pl-2" size={30} /></button>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg max-w-md  flex flex-col relative">
                        <img src={Nepal4} alt="Nepal1" className="w-full object-cover"></img>
                        <div className="p-5">
                           <div className="font-bold text-0.5xl mb-2">Day Trip to Bhaktapur and Nagarkot from Kathmandu</div>
                           <p>Rating</p>
                           <div className="font-bold text-0.5xl mb-2">from $1350 for adults</div>
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

 