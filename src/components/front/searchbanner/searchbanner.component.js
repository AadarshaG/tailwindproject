import React from 'react'

import {BsSearch} from 'react-icons/bs'

import Banner from '../../../img/searchbanner.webp'

export function SearchBanner(){

    return(
        <>
            <div className="py-5 lg:px-28">
                <div className="relative">
                    <img className="w-full h-full object-cover" src={Banner} alt=""></img>
                    {/* <div className="absolute top-0 h-full w-full flex flex-col text-center justify-center">
                        <div className="flex justify-between items-center w-[700px] mx-auto border p-1 rounded-t-full rounded-b-full text-black bg-gray-100/90">
                            <BsSearch  size={20} />
                            <input className="bg-transparent w-[800px] sm:w-[300px] font-[Poppins] focus:outline-none h-10 pl-5" type="text" placeholder="Search"></input>
                        </div>
                    </div> */}
                    <div className="absolute top-0 h-full w-full flex flex-col text-center justify-center">
                        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-full text-black bg-gray-200">
                            <div className="flex flex-1 items-center ">
                                <BsSearch  size={20} />
                                <input className="bg-transparent w-[700px] sm:w-[300px] font-[Poppins] focus:outline-none h-10 pl-5" type="text" placeholder="Search"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}