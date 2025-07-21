"use client" // composant éxécuté coté client


// la section IMPORTS : ---------------------------------------------------------------------------------------------------//

import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante <PiFlyingSaucerDuotone />
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) <BsFillCloudFog2Fill />
import { TfiCommentsSmiley } from "react-icons/tfi"; // icone smiley bulle <TfiCommentsSmiley />
import { PiSmileyDuotone } from "react-icons/pi"; // icone smiley qui rit  <PiSmileyDuotone />
import { ImEye } from "react-icons/im"; // import eye, icone oeil  <ImEye />
import { useEffect, useState } from "react"; // import des hooks react
import Image from "next/image"; // import du composant Image
import Link from "next/link"; // import composant Link pour créer des liens

//------------------------------------------------------------------------------------------------------------------------//




export default function PresentationPage () {

// Code pour gerer le theme Light/dark avec le localStorage: ---------------------------------------------------------------------//

  const [ themeActu , setThemeActu ] = useState<string>(); 

    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme"); 
    
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }

        if(!valueLocalStorage) {
            setThemeActu("dark"); 
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


            <div
                className="w-[80%] md:w-[60%]  mx-auto">
            <h2
                className="text-4xl md:text-6xl mx-auto text-center mt-10 font-bangers">
                Mais Qui Suis-Je ?
                <div
                    className="inline-block">
                                
                    <Image
                        src="/images/logos/vectos/presaBulle.svg"
                        width={70}
                        height={80}
                        alt="petite bulle de BD avec écrit full-stack area à l'intérieur"
                    />
                </div> 
            </h2>

            </div>
            
            <div
                className="w-[80%] mx-auto">

                <h3
                    className="text-3xl mt-10 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Présentation 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic  xl:text-center xl:w-[50%] xl:mx-auto">
                    Salut c'est moi, Miss White, alias Aurélie Blanc et voici une petite présentation
                    <PiSmileyDuotone
                            className="inline-block ml-1 text-2xl" />.
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic  xl:text-center xl:w-[50%] xl:mx-auto">
                    C'est à la suite de la découverte tardive de ma neuroatypie, que j'ai pris un virage à 180 degrés dans ma vie pro et perso. 
                      
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic  xl:text-center xl:w-[50%] xl:mx-auto">
                    C'est Ainsi que je me suis naturellement tournée dans un premier temps vers l'informatique au sens large, puis j'ai jeté mon dévolu sur le développement Web, pour allier autant le coté logique et intellectuel qui me nourrit, mais aussi le coté créatif qui me ravit. 
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic  xl:text-center xl:w-[50%] xl:mx-auto">
                    Après beaucoup de négociations, je suis arrivée à me faire financer une formation (très intensive) chez Oclock, et j'ai obtenu, quelques mois après, mon diplome de développeur web et web mobile front-end et back-end.
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    J'ai ensuite continué à me former sur des technos en autodidacte, et je continue toujours. Je prends un réel plaisir à m'entraîner régulièrement, à concevoir des interfaces mais aussi à développer des fonctionnalités plus complexes à travers de projets personnels. Le développement s’est révélé être une véritable vocation pour moi — à la fois stimulant, créatif et profondément engageant.
                </p>



                <h3
                    className="text-3xl mt-10 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        MES COMPETENCES : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic  xl:text-center xl:w-[50%] xl:mx-auto">
                    Voici mes différentes compétences , exposées ci-dessous. 
                   
                </p>
                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic  xl:text-center xl:w-[50%] xl:mx-auto">
                    Je suis specialisée en Next.js mais peut apprendre un nouveau langage sans problème. 
                   
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic pb-12 xl:text-center xl:w-[50%] xl:mx-auto">
                   
                    Je serais ravie de mettre mes compétences et ma motivation à votre service
                        <PiSmileyDuotone
                            className="inline-block ml-1 text-2xl" />.
                </p>

                <div
                    className="flex flex-wrap gap-4 justify-center mt-5">
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

                <h3
                    className="text-3xl font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto mt-20">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Ma Philosophie de Travail :  
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Allier création et développement est ce qui me passionne le plus. J’y mets toute mon exigence et mon attention, guidée par une approche à la fois créative et perfectionniste.
                </p>
                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Ma motivation et ma rigueur sont des atouts que je mets pleinement au service des projets qui me tiennent à cœur. Mon mode de fonctionnement me pousse naturellement à travailler avec intensité et précision. 
                </p>
                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic  xl:text-center xl:w-[50%] xl:mx-auto">
                    Tres persévérante et autonome, j'arrive toujours à trouver une solution sur des codes un peu récalcitrants. On peut dire que je ne laisse jamais tomber <PiSmileyDuotone
                            className="inline-block ml-1 text-2xl" /> !!!
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic  xl:text-center xl:w-[50%] xl:mx-auto">
                    Je suis aussi dotée d'une assez grande empathie, ce qui me permet de bien capter la personnalité de mon interlocuteur et de pouvoir créer une interface, un univers à son image, et également de m'adapter et de bien m'intégrer dans une équipe.
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic pb-10 xl:text-center xl:w-[50%] xl:mx-auto">
                   J'aimerais donc vraiment faire partie d'une entreprise, pour continuer à apprendre et monter en compétences.  
                </p>

                <div
                    className=" mt-10 text-3xl font-bangers pb-20 xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                    <ImEye 
                        className="inline-block pr-3 text-4xl"/>
                    
                    Pour télécharger mon CV : 

                    <a 
                        href="/docs/cv.pdf"
                        className="underline ml-4">
                        Clique ici
                    </a>
                </div>
                
            </div>

        </div>
    )
}