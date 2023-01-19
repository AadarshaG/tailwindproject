import React from 'react'

import Banner from '../../../img/big.jpeg'
import Mg from '../../../img/mg.svg'

export function BestChoice(){

    return(
        <>
            <div className="lg:px-28 bg-emerald-900 ">
                <div className="grid grid-cols-1 lg:gap-4">
                    <div className="lg:flex sm:grid">
                        <div className="flex flex-col text-center justify-center">
                            <div className="px-5" >
                                <img className="w-[400px] md:w-full object-cover pt-5" src={Mg} alt=""></img>
                            </div>
                            <div className="py-5 text-white text-xl font-bold">Travelers' Choice Best of the Best</div>
                            <div className="py-2">
                                <button className="bg-black text-white justify-center rounded-full h-11 w-40 hover:bg-emerald-800">See the Winners</button>
                            </div>
                        </div>
                        <div className="">
                            <img className="w-full h-full object-cover" src={Banner} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}