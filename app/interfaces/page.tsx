"use client" // composant éxécuté coté client


// la section IMPORTS : ---------------------------------------------------------------------------------------------------//

import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante <PiFlyingSaucerDuotone />
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) <BsFillCloudFog2Fill />
import { ImEye } from "react-icons/im"; // import eye, icone oeil  <ImEye />
import { FaInstagram } from "react-icons/fa"; // import icone insta <FaInstagram />
import Link from "next/link"; // import composant Link pour les liens
import { useEffect, useState } from "react"; // import outils React 

//--------------------------------------------------------------------------------------------------------------------------//




export default function InterfacePage () {

// Code pour gerer le theme dark/light grace au localStorage: ---------------------------------------------------------------//

    const [ themeActu , setThemeActu ] = useState<string>(); 

    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme"); 
       
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }
      }, [])

    const light = "bg-parchemin text-black"
    const dark = "bg-black text-white"

//-------------------------------------------------------------------------------------------------------------------------------//




    return (
        <div
            className={`h-full  ${ themeActu === "light" ? light : dark}`}>

            <p
                className="flex justify-end p-5 text-xl underline font-bangers">
    
                <Link href="/">
                    <BsFillCloudFog2Fill
                        className="text-3xl mr-1 inline-block"/>
                        EXIT par ici !!!
                </Link>
            </p>

            <h2
                className=" text-4xl md:text-6xl w-[90%] mx-auto text-center mb-10 mt-5 font-bangers">
                Bienvenue sur la présentation des sites vitrines !!!
            </h2>
            
            <div
                className="w-[80%] mx-auto">

                <h3
                    className="text-3xl mt-10 font-bangers">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Site Vitrine développé pour une naturopathe, "L'Instant Angélique" : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                    
                    Accès : 
                    <Link 
                        className="underline ml-2"
                        href="https://angelique-naturopathe.vercel.app/">
                        L'instant Angélique
                    </Link>
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic pb-8">
                    Site développé en next.js, adapatable autant sur format mobile que sur format laptop.  
                </p>

                  <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic text-black pb-10">
                    <ImEye 
                        className="inline-block text-3xl pr-2 "/>
                            D'autres projets ont été développés mais pas encore déployés... plus de contenus disponibles sur mon compte instagram:  
                            <Link
                                href="https://www.instagram.com/bewildbeweirdbewhite/">
                                <FaInstagram
                                    className="ml-4 inline-block" /> 
                            </Link>
                                    
                   </p>
            
            </div>

        </div>
    )
}