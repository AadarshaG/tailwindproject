import React from 'react'

import {HiOutlineBackward,HiOutlineForward} from 'react-icons/hi2'

import {images} from './destinationimage'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import d1 from '../../../img/d1.jpg'
// import d2 from '../../../img/d2.jpg'
// import d3 from '../../../img/d3.jpg'
// import d4 from '../../../img/d4.jpg'
// import d5 from '../../../img/d5.jpg'

export function NextDestination(){

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
            <div className="py-5 lg:px-28 ">
                <h1 className=" text-xl font-bold text-center md:text-left">Top destinations for your next vacation</h1>
               
                {/* <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 justify-items-center"> */}

                    {/* <div className="py-5">
                        <div className="relative">
                            <img className="w-full h-full object-cover" src={d1} alt=""></img>
                            <div className="absolute top-0 left-0 h-full w-full">
                                <p className="absolute left-4 bottom-4 text-xl text-white font-bold">Yellowstone National Park</p>
                            </div>
                            <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-between items-center ">
                                <button className="border border-black rounded-full bg-white"><HiOutlineBackward /></button>
                                <button className="border border-black rounded-full bg-white"><HiOutlineForward /></button>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="relative">
                            <img className="w-full h-full object-cover" src={d2} alt=""></img>
                            <div className="absolute top-0 left-0 h-full w-full">
                                <p className="absolute left-4 bottom-4 text-xl text-white font-bold">Punta Cana Republic</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="relative">
                            <img className="w-full h-full object-cover" src={d3} alt=""></img>
                            <div className="absolute top-0 left-0 h-full w-full">
                                <p className="absolute left-4 bottom-4 text-xl text-white font-bold">Maui, HI</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="relative">
                            <img className="w-full h-full object-cover" src={d4} alt=""></img>
                            <div className="absolute top-0 left-0 h-full w-full">
                                <p className="absolute left-4 bottom-4 text-xl text-white font-bold">Orlando, FL</p>
                            </div>
                        </div>
                    </div> */}
                     <Slider {...settings}>
                    {
                        images.map((img,ind)=>(
                            <div className="py-5 px-2" key={ind}>
                                <div className="relative">
                                    <img className="w-full h-[200px] object-cover" src={img.image} alt=""></img>
                                    <div className="absolute top-0 left-0 h-full w-full">
                                        <p className="absolute left-4 bottom-4 text-xl text-white font-bold">{img.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </Slider>
                {/* </div> */}
                
            </div>
        </>
    )
}