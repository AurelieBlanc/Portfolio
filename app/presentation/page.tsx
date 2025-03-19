"use client"

import useThemeStore from "@/store/themeStore"; // on importe le store global
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) 
import { ImEye } from "react-icons/im"; // import eye
import { useEffect, useState } from "react";


import Link from "next/link";

export default function PresentationPage () {

    const { theme } = useThemeStore(); 

    const [ themeActu , setThemeActu ] = useState<string>(); 

    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme"); 
        console.log("valueLocalStorage : ", valueLocalStorage); 
    
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }
      }, [])
    

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
                   Ici ce sera la présentation !! 
            </h2>
            
            <div
                className="w-[80%] mx-auto">

                <h3
                    className="text-3xl font-bangers ">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Présentation 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                       Salut moi c'est Aurélie, et voici mon histoire !
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                       C'est à la suite de la découverte tardive (ou pas!!! Mieux vaut tard que jamais comme on dit !!) de mon syndrome d'Asperger, que j'ai décidé de me reconvertir pour enfin coller ma vie pro à ma neuroatypie.
                      
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                        C'est Ainsi que je suis tombée dans le développement et que non seulement j'aime coder mais créer aussi !
                </p>



                <h3
                    className="text-3xl mt-10 font-bangers">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                   MES COMPETENCES : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                      Autant capable de vous coder un site vitrine qu'un site full-stack, autant capable de vous inventer des thèmes ou des univers, je vous mets les differentes technos que je maitrise (MAIS , étant autodidacte je suis bien évidemment capable d'en apprendre d'autres et partante !!) : 
                </p>

                <h4
                    className="text-2xl mt-10 font-bangers text-center">
                      <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                   FRONT-END : 
                </h4>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic text-center">
                      <ul>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 NEXT.JS
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 React.js
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Redux
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Javascript
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Typescript
                        </li>
                      </ul>
                </p>

                <h4
                    className="text-2xl mt-10 font-bangers text-center">
                      <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                   BACK-END : 
                </h4>

                <p
                    className="text-center ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                      <ul>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 NEXT.JS
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Node.js
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 PostgreSQL
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Sequelize
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Prisma
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Express.js
                        </li>
                      </ul>
                </p>

                <h4
                    className="text-2xl mt-10 font-bangers text-center">
                      <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                   Intégration Web : 
                </h4>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic text-center">
                      <ul>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 HTML5
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 CSS
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Tailwind
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Affinités pour créer 
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Notion UI
                        </li>
                        
                      </ul>
                </p>
                

                <h4
                    className="text-2xl mt-10 font-bangers text-center">
                      <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                   Gestion de Projet 
                </h4>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic pb-10 text-center">
                      <ul>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 GitHub
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Whimsical
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Figma
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                 Trello 
                        </li>
                        <li>
                            <ImEye 
                                className="inline-block text-3xl pr-2 "/>
                                Canva
                        </li>
                        
                      </ul>
                </p>
                

            </div>

        </div>
    )
}