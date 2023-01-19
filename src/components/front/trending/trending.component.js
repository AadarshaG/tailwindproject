import React, { useState } from 'react'

import { winter } from './trendingdata'
import { places } from './trendingdata'
import { things } from './trendingdata'
import { stays } from './trendingdata'


export function TrendingInTravel(){

    const [menu, setMenu] = useState(1);

    const  toggleMenu = (index) => {
        setMenu(index)
    }

    // const [winters, setWinter] = useState(winter)
    // const [placess, setPlacess] = useState(places)
    // const [thing, setThing] = useState(things)
    // const [stay, setStay] = useState(stays)

    // const handleWinter = () => {
    //     setWinter(winters)
    // }
    // const handlePlace = () => {
    //     setWinter(placess)
    // }
    // const handleThing = () => {
    //     setThing(thing)
    // }
    // const handleStay = () => {
    //     setStay(stay)
    // }

    return(
        <>
        <div className="py-5 lg:px-28">
            <h1 className="text-3xl font-bold text-center md:text-left">Trending in Travel</h1>
            <div className="py-5">
                <div className="flex flex-row text-0.5xl md:text-xl text-center md:text-left">
                    <div onClick={()=>toggleMenu(1)} className="pr-10 sm:font-bold">Winter Experience</div>
                    <div onClick={()=>toggleMenu(2)} className="pr-10 sm:font-bold">Places To Go</div>
                    <div onClick={()=>toggleMenu(3)} className="pr-10 sm:font-bold">Things To Do</div>
                    <div onClick={()=>toggleMenu(4)} className="pr-10 sm:font-bold">Places To Stay</div>
                </div>
                <DataItem ids={menu} />
                {/* <div onClick={handleWinter} className="grid grid-cols-1 lg:grid-cols-4 justify-between text-left py-5">
                    {
                        winters.map((win,ind)=>(
                            <div key={ind}>{win.name}</div>
                        ))
                    }
                   
                </div> */}
                {/* <div onClick={()=>handlePlace()} className="grid grid-cols-1 lg:grid-cols-4 justify-between text-left py-5">
                    {
                        placess.map((place,ind)=>(
                            <div key={ind}>{place.name}</div>
                        ))
                    }
                   
                </div> */}
               
            </div>
        </div>
        </>
    )
}

function DataItem({ids}){
    const [winters, setWinter] = useState(winter)
    const [placess, setPlacess] = useState(places)
    const [thing, setThing] = useState(things)
    const [stay, setStay] = useState(stays)

    switch(ids){
        case 1:
            return(
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between md:text-left py-5 px-5">
                    {
                        winters.map((win,ind)=>(
                            <div key={ind}>{win.name}</div>
                        ))
                    }
                   
                </div>
            )
        case 2:
            return(
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between md:text-left py-5 px-5">
                    {
                        placess.map((win,ind)=>(
                            <div key={ind}>{win.name}</div>
                        ))
                    }
                   
                </div>
            )
        case 3:
            return(
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between md:text-left py-5 px-5">
                    {
                        thing.map((win,ind)=>(
                            <div key={ind}>{win.name}</div>
                        ))
                    }
                   
                </div>
            )
        case 4:
            return(
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between md:text-left py-5 px-5">
                    {
                        stay.map((win,ind)=>(
                            <div key={ind}>{win.name}</div>
                        ))
                    }
                   
                </div>
            )
        default:
            return(
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between text-left py-5">
                    {
                        winters.map((win,ind)=>(
                            <div key={ind}>{win.name}</div>
                        ))
                    }
                    
                </div>
            )
    }
}