"use client" // composant executé uniquement coté client

import { FaInstagram } from "react-icons/fa"; // import icone instagram
import useThemeStore from "@/store/themeStore"; // import du store global
import { useEffect, useState } from "react"; // import des hooks react
import Link from "next/link"; // import pour les liens


export default function Footer() {

// CODE pour gérer le thème couleur avec localStorage : ----------------------------------------------------------------------------------------------------//

    const { theme, colorBar } = useThemeStore(); 

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

    const couleurLight = " text-black border-black"; 
    const couleurDark = "text-white border-white "; 

//--------------------------------------------------------------------------------------------------------------------------------------------------------//

    return (
        <div
            className={` ${ themeActu === "light" ? couleurLight : couleurDark } w-full text-center h-[120px] md:h-[60px] ${colorBar} border-t-4 border-b-4 font-bangers flex justify-center items-center text-2xl tracking-wide pl-5 pr-5`}>
            
            <p>
                Je te partage mon reseau Social Trop class NaNaNanère :
                <span>
                    <Link
                        href="https://www.instagram.com/bewildbeweirdbewhite/">
                        <FaInstagram
                            className="ml-4 inline-block" />
                    </Link>
                </span>
            </p>

        </div>
    )
}