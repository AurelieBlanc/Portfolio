"use client" // composant éxécuté coté client


// la section IMPORTS : ---------------------------------------------------------------------------------------------------//
import Image from "next/image";
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante <PiFlyingSaucerDuotone />
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) <BsFillCloudFog2Fill />
import { ImEye } from "react-icons/im"; // import eye, icone oeil  <ImEye />
import { FaInstagram } from "react-icons/fa"; // import icone insta <FaInstagram />
import Link from "next/link"; // import composant Link pour les liens
import { useEffect, useState } from "react"; // import outils React 
import { Swiper, SwiperSlide } from "swiper/react" // import de swiper pour mettre en place des carroussels
 
import "swiper/css" ; // import des styles de Swiper
import "swiper/css/navigation"; 

import { Navigation } from "swiper/modules";
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




// Code pour gérer les vidéos, données : ------------------------------------------------------------------------------------------------------------------------------//

const tableOPictures = [
    { id: 0, style: "video", path: "/videos/OPictures/effetsResponsive.mp4", effets: "Effets Animation Responsive des Titres"},
    { id: 0, style: "video", path: "/videos/OPictures/effetsOmbrages.mp4", effets: "Effets Ombrages au niveau des lettres"}
]


const tableDevArt = [
    { id: 0, style: "image", path: "/images/imprEcran/DevArt/DevArtGalerie.png", width: 300, height: 300, description: "Page de la Galerie", ptMobile: ""},
    { id: 1, style: "image", path: "/images/imprEcran/DevArt/DevArtHome.png", description: "Page d'Accueil", width: 400, height: 300, ptMobile: "pt-6" },
    { id: 2, style: "image", path: "/images/imprEcran/DevArt/Essai.png", description: "Essai Intégration", width: 600, height: 300, ptMobile: "pt-20" },
    
]

//-----------------------------------------------------------------------------------------------------------------------------//


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
                    className=" text-4xl md:text-6xl w-[90%] mx-auto text-center mb-10 mt-10 font-bangers">
                    Bienvenue sur la présentation des sites vitrines !!!
                    <div
                        className="inline-block">
                    
                            <Image
                                src="/images/logos/vectos/interfaceBulle.svg"
                                width={70}
                                height={80}
                                alt="petite bulle de BD avec écrit interface area à l'intérieur"
                                        />
                    </div> 
                </h2>
            </div>
 



 {/* // Code pour l'InstAngélique : -----------------------------------------------------------------------------------------------------------------------------// */}
            
            <div
                className="w-[80%] mx-auto">
                <h3
                    className="text-3xl mt-16 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Site Vitrine développé pour une naturopathe, "L'Instant Angélique" : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    
                    Accès en ligne : 
                    <Link 
                        className="underline ml-2"
                        href="https://angelique-naturopathe.vercel.app/">
                        L'instant Angélique
                    </Link>
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic pb-4 xl:text-center xl:w-[50%] xl:mx-auto">
                    Site développé en next.js, adapatable autant sur format mobile que sur format laptop.  
                </p>

                <div
                    className="mt-10">
                        <video className=" w-[80%] md:w-[75%] lg:w-[50%] mx-auto" controls >
                            
                            <source 
                                src="/videos/Instangelique/instAngelique.mp4" 
                                type="video/mp4"
                                className="" />

                    </video>
                </div>






{/* // Code pour O'Pictures : -----------------------------------------------------------------------------------------------------------------------------// */}

                <h3
                    className="text-3xl mt-16 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Projet perso de site de photographies O'Pictures :
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic pb-4 xl:text-center xl:w-[50%] xl:mx-auto">
                    Interfaces avec différents effets développés en CSS , voir les 2 vidéos de démonstration ci-dessous :

                </p>

                <Swiper navigation={true}
                        modules= {[Navigation]}
                        className= "w-full h-full mt-10">

                    {tableOPictures.map((elem) =>
                        <SwiperSlide
                            className="flex justify-center items-center"
                            key={elem.id}>
                                <div
                                    className="flex justify-center items-center">
                                    <div
                                        className="flex flex-col justify-center items-center">
                                            <video 
                                                className=" w-[80%] md:w-[75%] lg:w-[50%] mx-auto" controls >
                                                    <source 
                                                    src= {elem.path}
                                                    type="video/mp4"
                                                    className="" />  
                                            </video>

                                            <p
                                                className="font-bangers mt-6 text-xl md:text-2xl md:mt-10 lg:text-3xl lg:mt-12 text-center">
                                                {elem.effets}
                                            </p>
                                    </div>
                                </div>
                        </SwiperSlide>
                    )}
                </Swiper>





{/* // Code pour les Trippers : -----------------------------------------------------------------------------------------------------------------------------// */}

                <h3
                    className="text-3xl mt-16 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Projet perso de site de voyage "Les Trippers" :
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic pb-4  xl:text-center xl:w-[50%] xl:mx-auto">
                    Interface avec effet adaptable et design changeant, quelque soit le format de l'écran:

                </p>

                <div
                    className="flex flex-col justify-center items-center mt-10">
                        <video 
                            className=" w-[80%] md:w-[75%] lg:w-[50%] mx-auto" controls >
                                <source 
                                    src="/videos/Trippers/trippers.mp4"
                                    type="video/mp4"
                                    className="" />  
                        </video>         
                </div>

                        







{/* // Code pour Develop'Art : -----------------------------------------------------------------------------------------------------------------------------// */}

                <h3
                    className="text-3xl mt-20 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Integration du site Dévelop'Art
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic pb-4 xl:text-center xl:w-[50%] xl:mx-auto">
                    Interface avec effet adaptable et design changeant, quelque soit le format de l'écran:

                </p>

                <Swiper navigation={true}
                        modules= {[Navigation]}
                        className= "w-full h-full mt-10">

                    {tableDevArt.map((elem) =>
                        <SwiperSlide
                            className="flex justify-center items-center"
                            key={elem.id}>
                                <div
                                    className="flex justify-center items-center">
                                    <div
                                        className={`flex flex-col justify-center items-center ${elem.ptMobile} md:pt-0`}>
                                            <Image 
                                                src= {elem.path}
                                                alt={elem.description}
                                                width={elem.width}
                                                height={elem.height}
                                            />  
                                        

                                            <p
                                                className="font-bangers mt-6 text-xl md:text-2xl md:mt-10 lg:text-3xl lg:mt-12 text-center">
                                                {elem.description}
                                            </p>
                                    </div>
                                </div>
                        </SwiperSlide>
                    )}

                </Swiper>

                        






{/* // Code pour renvoi sur Instagram : -----------------------------------------------------------------------------------------------------------------------------// */}
                <p
                    className="ml-5 md:ml-10 mt-20 text-lg font-lilita italic pb-16 xl:text-center xl:w-[50%] xl:mx-auto">
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