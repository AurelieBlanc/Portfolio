"use client"

import { FaInstagram } from "react-icons/fa";
import useThemeStore from "@/store/themeStore";


export default function Footer() {

    const { theme, colorBar } = useThemeStore(); 

    const couleurLight = " text-black border-black"; 
    const couleurDark = "text-white border-white "; 

    return (
        <div
            className={` ${ theme === "light" ? couleurLight : couleurDark } w-full text-center h-[120px] md:h-[60px] ${colorBar} border-t-4 border-b-4 font-bangers flex justify-center items-center text-2xl tracking-wide pl-5 pr-5`}>
            
            <p>
                Je te partage mon reseau Social Trop class NaNaNanère :
                <span>
                    <FaInstagram
                    className="ml-4 inline-block" />
                </span>
            </p>

            

        </div>
    )
}