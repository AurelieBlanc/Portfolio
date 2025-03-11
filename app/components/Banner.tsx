"use client"

import Image from "next/image"; 
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante

import useThemeStore from "@/store/themeStore";


export default function Banner() {

    const { theme } = useThemeStore(); 

    const couleurLight = "bg-parchemin text-black"; 
    const couleurDark = "bg-black text-white"; 

    return(
        <div
            className = {`"w-full h-full border-red flex flex-col justify-center items-center ${ theme === 'light' ? couleurLight : couleurDark}`}>
           
           {/* <div
                className="">
                    <Image 
                        className=""
                        src= "/images/logos/BeWildFondNoir.svg"
                        alt="logo BeWild"
                        width={200}
                        height={200}
                    />
            </div> */}

            <h1 
                className="font-bangers tracking-wide text-5xl w-[300px]  mx-auto text-center mt-20 mb-10">
                    BIENVENUE sur Un site complètement Zinzin
            </h1>

            <PiFlyingSaucerDuotone 
                className=" text-6xl mb-10"/>


        </div>
    )
}; 