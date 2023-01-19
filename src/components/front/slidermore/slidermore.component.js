import React, { useState } from 'react'
import {IoArrowBackCircleOutline,IoArrowForwardCircleOutline} from 'react-icons/io5'

import {sliders} from './sliderdata'


export function SliderMore(){

    const [slide,setSlide] = useState(0)
    const length = sliders.length;
 
    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    };

    return(
        <>
            <div className="py-5 lg:px-28">
                <div className="flex relative w-full">
                    {/* image */}
                        {
                            sliders.map((imag,ind)=>(
                                <div key={ind} className={ slide === ind ? "opacaity-100 w-full" : "opacity-0"}>
                                    { ind === slide && (<img src={imag.image} alt="" className="w-full h-[300px] object-cover rounded-md"></img>)}
                                </div>
                            ))
                         }
                          <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-between items-center ">
                            <button className="border border-black rounded-full bg-white"><IoArrowBackCircleOutline onClick={prevSlide}  size={40} /></button>
                            <button className="border border-black rounded-full bg-white"><IoArrowForwardCircleOutline onClick={nextSlide} size={40} /></button>
                         </div>   
                </div>
            </div>
        </>
    )
}