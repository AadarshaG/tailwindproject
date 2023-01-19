import { useState } from "react"

export const accordianData = [
    {
        title: "About Tripadvisory",
        content:[
            {
                name: "About Us"
            },
            {
                name: "Press"
            },
            {
                name: "Resources and Policies"
            },
            {
                name: "Careers"
            }
        ]
    },
    {
        title: "Explore",
        content:[
            {
                name: "Help Center"
            },
            {
                name: "Tripadvisory Plus"
            },
            {
                name: "Travel articles"
            }
        ]
    },
]

export function Accordian({data}){

    return(
        <>
        {
            data.map((tab,ind)=>(
                <AccItem key={ind} {...tab} />
            ))
        }
        </>
    )
}

export function AccItem({title,content}){

    const [visibility,setVisibility] = useState(false)

    const handleChange = () =>{
        setVisibility(current => !current)
    }

    return(
        <div className={`py-2 ${visibility ? "accordian-active" : ""}`} >
            <div className=" cursor-pointer" onClick={handleChange} >
                <div className="hover:underline">{ visibility ? '-' : '+'}{title}</div>
        
            </div>
            {
                visibility && 
                <div className="p-1 flex flex-col">
                {
                    content.map((ooo)=>(
                        <div className="font-semibold">{ooo.name}</div>
                    ))
                }
                </div>
            }
        </div>
    )
}