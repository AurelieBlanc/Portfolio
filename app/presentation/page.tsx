"use client" // composant éxécuté coté client


// la section IMPORTS : ---------------------------------------------------------------------------------------------------//

import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante <PiFlyingSaucerDuotone />
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) <BsFillCloudFog2Fill />
import { ImEye } from "react-icons/im"; // import eye, icone oeil  <ImEye />
import { useEffect, useState } from "react"; // import des hooks react
import Image from "next/image"; // import du composant Image
import Link from "next/link"; // import composant Link pour créer des liens

//------------------------------------------------------------------------------------------------------------------------//




export default function PresentationPage () {

// Code pour gerer le theme Loght/dark avec le localStorage: ---------------------------------------------------------------------//

  const [ themeActu , setThemeActu ] = useState<string>(); 

    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme"); 
    
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }
      }, [])
    

    const light = "bg-parchemin text-black"; 
    const dark = "bg-black text-white"; 

//--------------------------------------------------------------------------------------------------------------------------------//




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
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic pb-10">
                    Autant capable de vous coder un site vitrine qu'un site full-stack, autant capable de vous inventer des thèmes ou des univers, je vous mets les differentes technos que je maitrise (MAIS , étant autodidacte je suis bien évidemment capable d'en apprendre d'autres et partante !!) : 
                </p>

                <div
                    className="flex flex-wrap gap-4 justify-center pb-10">
                        <div
                            className="">
                                <Image
                                    src="/images/compétences/frontend.png"
                                    alt="vignette avec toutes les compétences front-end"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="">
                                <Image
                                    src="/images/compétences/backend.png"
                                    alt="vignette avec toutes les compétences front-end"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="">
                                <Image
                                    src="/images/compétences/integration.png"
                                    alt="vignette avec toutes les compétences front-end"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="">
                                <Image
                                    src="/images/compétences/gestionprojet.png"
                                    alt="vignette avec toutes les compétences front-end"
                                    width={300}
                                    height={300}
                                />
                        </div>

                </div>
                
            </div>

        </div>
    )
}