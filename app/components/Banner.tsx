"use client" // composant éxécuté coté client seulement

import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante
import { useEffect, useState } from "react"; // import des hooks react
import useThemeStore from "@/store/themeStore"; // import du store global


export default function Banner() {


// Code pour gerer le theme avec localStorage : -------------------------------------------------------------//

    const { theme } = useThemeStore(); 

    const [ themeActu , setThemeActu ] = useState<string>(); 

    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme");  
    
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }
      }, [])
    
      useEffect(() => {
        setThemeActu(theme)
      }, [theme])

    const couleurLight = "bg-parchemin text-black"; 
    const couleurDark = "bg-black text-white"; 

//--------------------------------------------------------------------------------------------------------------//    


    return(
        <div
            className = {`"w-full h-full border-red flex flex-col justify-center items-center ${ themeActu === 'light' ? couleurLight : couleurDark}`}>
           
            <h1 
                className="font-bangers tracking-wide text-5xl w-[70%] md:text-7xl md:w-[50%]  mx-auto text-center mt-20 mb-10">
                    BIENVENUE sur Un Portfolio complètement Zinzin
            </h1>

            <PiFlyingSaucerDuotone 
                className=" text-7xl mb-10"/>

        </div>
    )
}; 