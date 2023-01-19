import React from 'react'

import GetImage from '../../../img/get.jpg'
import Logo from '../../../img/white-logo.svg'

export function GetOut(){

    return(
        <>
            <div className="hidden lg:block py-5 lg:px-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-200 ">
                    <div className=" flex flex-col justify-center pl-10">
                        <h1 className="font-bold text-2xl py-5">Get Out There</h1>
                        <p>Best of the best tours,attractions & activities you won't want to miss.</p>
                        <div className="py-5">
                            <button className="bg-gray-900 text-center  text-white font-bold rounded-t-full rounded-b-full h-10 w-40 hover:bg-emerald-800">See the List</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={GetImage} alt="" className="absolute w-full object-cover  h-44"></img>
                    </div>
                </div>
            </div>

            {/* extra small device */}
            <div className="py-5 px-8 sm:hidden">
                <div className="relative w-full flex">
                    <img src={GetImage} alt="" className="w-full h-[250px] object-cover"></img>
                    <div className="absolute top-0 left-0 justify-center text-left flex flex-col pl-5 py-2 text-white">
                        <img src={Logo} alt= "" className="w-[300px] h-[100px]"></img>
                        <h1 className="font-bold text-2xl">Get Out There</h1>
                        <p className="text-white">Best of the best tours,attractions & activities you won't want to miss.</p>
                        <div className="py-5">
                            <button className="bg-gray-900 text-center font-bold rounded-t-full rounded-b-full h-10 w-40 hover:bg-emerald-800">See the List</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}