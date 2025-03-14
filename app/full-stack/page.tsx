"use client"

import useThemeStore from "@/store/themeStore"; // on importe le store global
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) 
import { ImEye } from "react-icons/im"; // import eye



import Link from "next/link";

export default function FullStackPage () {

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
                className=" text-4xl md:text-6xl w-[90%] mx-auto text-center mb-10 mt-5 font-bangers">
                   Bienvenue en FULL-STACK Zone !!! 
            </h2>
            
            <div
                className="w-[80%] mx-auto">

                <h3
                    className="text-3xl font-bangers ">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                        Site e-commerce en cours de développement ... A suivre...
                </h3>

                <h3
                    className="text-3xl mt-10 font-bangers">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                    "LVDP Rencontres" Site développé en Next.js, avec Prisma et PostgresSQL : 
                </h3>

                <p
                    className="underline mt-10 ml-5 md:ml-11 text-xl font-lilita italic">
                        <Link href="https://lvdp-rencontres.vercel.app/">
                            lvdp-rencontres
                        </Link>
                    
                </p>
                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                        Le but de ce site etant de mettre en lien des personnes partageant un même centre d'intérêt entre elles, pour favoriser des rencontres sur toute la France via un simple tableau où les adhérents volontaires peuvent se proposer en tant que contact. <br />
                        Le site peut paraitre simpliste, mais en réalité,  il possède pas mal de fonctionnalités que nous allons détailler. 
                </p>
                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                        <ImEye 
                            className="inline-block text-4xl pr-4"/>

                        Il a été crée avec le framework Next.Js en full-stack. La communication avec la base de données PostgreSQL se fait avec Prisma.
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                        <ImEye 
                            className="inline-block text-4xl pr-4"/>

                        Chaque personne ayant accès au site (via le lien) eout se proposer comme contact via : IMPRESSION DECRAN ICI
                </p>


               

            </div>
            


        </div>
    )
}