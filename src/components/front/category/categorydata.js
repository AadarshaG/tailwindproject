import {BiBed} from 'react-icons/bi'
import {BsGlobe,BsBricks} from 'react-icons/bs'
import {IoRestaurantOutline} from 'react-icons/io5'
import {GiHouseKeys} from 'react-icons/gi'

export const catdata = [
    {
        id:1,
        name: "Hotels",
        icon: <BiBed size={20} />
    },
    {
        id:2,
        name: "Vacation Rentails",
        icon: <GiHouseKeys size={20} />
    },
    {
        id:3,
        name: "Things To Do",
        icon: <BsBricks size={20} />
    },
    {
        id:4,
        name: "Restaurants",
        icon: <IoRestaurantOutline size={20} />
    },
    {
        id:5,
        name: "Travels Stories",
        icon: <BsGlobe size={20} />
    },
    // {
    //     id:6,
    //     name: "More",
    //     menu: [
    //        { menu1: "Hello1"},
    //        { menu2: "Hello2"},
    //         {menu3: "Hello3"},
    //     ]
    // },
]