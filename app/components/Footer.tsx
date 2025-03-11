"use client"

import { FaInstagram } from "react-icons/fa";
import useThemeStore from "@/store/themeStore";


export default function Footer() {

    const { theme } = useThemeStore(); 

    const couleurLight = " text-black border-black"; 
    const couleurDark = "text-white border-white "; 

    return (
        <div
            className={` ${ theme === "light" ? couleurLight : couleurDark } w-full h-[60px] bg-prune border-t-4 border-b-4 font-bangers flex justify-center items-center text-2xl tracking-wide`}>
            Parce que ici on est bien élevé alors on partage nos reseaux sociaux et NaNANA Nanère :

            <FaInstagram
                className="ml-4" />

        </div>
    )
}