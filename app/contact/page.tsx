"use client"

import useThemeStore from "@/store/themeStore"; // on importe le store global
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) 
import { ImEye } from "react-icons/im"; // import eye



import Link from "next/link";

export default function ContactPage () {

    const { theme } = useThemeStore(); 

    const light = "bg-parchemin text-black"
    const dark = "bg-black text-white"

    return (
        <div
            className={`h-full  ${ theme === "light" ? light : dark}`}>

            <p
                className="flex justify-end p-5 text-xl underline font-bangers">
    
                <Link href="/">
                <BsFillCloudFog2Fill
 
                    className="text-3xl mr-1 inline-block"/>
                    EXIT par ici !!!
                    
                </Link>
            </p>

            <h2
                className="text-4xl md:text-6xl w-[90%] mx-auto text-center mb-10 mt-5 font-bangers">
                   Bienvenue en Contact Zone !!! 
            </h2>
            
            <div
                className="w-[80%] mx-auto">

                <h3
                    className="text-3xl font-bangers ">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                       Mettre Formulaire contact 
                </h3>

                <h3
                    className="text-3xl mt-10 font-bangers">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                    BLABLA : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur vel quo eius dolores debitis saepe, cumque illo odit qui sapiente sed natus nam repellendus maiores vitae placeat accusantium dolorem!
                      
                       Odit similique harum rerum aspernatur vitae, incidunt consequuntur omnis ipsa dolorum quasi ad distinctio eligendi, ab repellat animi dolore quaerat ipsum delectus minus ipsam,bus. 
                </p>
                
            </div>

        </div>
    )
}