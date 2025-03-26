"use client" // composant éxécuté uniquement coté client



// La section IMPORTS : -------------------------------------------------------------------------------------------------------------------------------//

import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante <PiFlyingSaucerDuotone />
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit)  <BsFillCloudFog2Fill />
import { ImEye } from "react-icons/im"; // import eye, icone oeil  <ImEye />
import { MdSecurity } from "react-icons/md"; // icone sécurité <MdSecurity />
import { FaInstagram } from "react-icons/fa"; // icone instagram <FaInstagram />
import { useEffect, useState } from "react"; // import des hooks react
import Image from "next/image"; // import du composant Image
import Link from "next/link"; // import pour mettre en place des liens
import { Swiper, SwiperSlide } from "swiper/react" // import de swiper pour mettre en place des carroussels
import { Pagination } from "swiper/modules"; 
import "swiper/css" ; // import des styles de Swiper
import "swiper/css/pagination"; 

//-----------------------------------------------------------------------------------------------------------------------------------------------------//





export default function FullStackPage () {


// CODE pour gérer le theme dark ou light de la page en fonction du localStorage :----------------------------------------------------------------------//

    const [ themeActu , setThemeActu ] = useState<string>(); 

    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme"); 
    
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }
      }, [])

    const light = "bg-parchemin text-black"
    const dark = "bg-black text-white"

//--------------------------------------------------------------------------------------------------------------------------------------------------------//




// CODE pour gérer les carroussels : ------------------------------------------------------------------------------------------------------------------------//



const tableDevArt = [
    { elem: 0, type:"image", path: "/images/imprEcran/DevArt/DevArtGalerie.png" }, 
    { elem: 1, type:"image", path: "/images/imprEcran/DevArt/DevArtHome.png" }, 
    { elem: 2, type:"video", path: "/videos/devArtDemo.mp4" }, 
]; 


const tableLVDP = [
    
]






//--------------------------------------------------------------------------------------------------------------------------------------------------------//


    return (
        <div
            className={`h-full ${ themeActu === "light" ? light : dark}`}>

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

{/* // Code pour le site WEEKYPLANNER : ---------------------------------------------------------------------------------------------------------------------// */}
                <h3
                    className="text-3xl mt-10 font-bangers">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Site WeekyPlanner : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                    Le planner rigolo au style rétro ! 
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic">
                    C'est un planner entièrement réalisé en Drag'N'Drop, avec React. 
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic">
                    On génère une tache dans le générateur de tâches ("My Todolist") à gauche de l'écran, puis on la dépose dans n'importe quelle section souhaitée... et si on est des pros de la procrastination, alors ce n'est pas bien grave, on fera glisser la tache pour la déposer dans un autre jour de la semaine.... 
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic">
                    Bientôt developpé en appli. 
                </p>

                <h4
                    className="ml-5 md:ml-10 mt-6 text-2xl font-bangers"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Stack Technique : 
                </h4>

                <ul
                    className="font-lilita italic ml-8 md:ml-14 mt-2 "> 
                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                            React.js
                    </li>

                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                           Node.js
                    </li>

                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                            PostgreSQL
                    </li>
                </ul>

                <div
                    className="mt-12 mb-12">
                        <video className=" w-[80%] md:w-[75%] lg:w-[50%] mx-auto" controls >
                            
                            <source 
                                src="/videos/weekyDemo.mp4" 
                                type="video/mp4"
                                className="" />

                    </video>
                </div>






  {/* // Code pour le site DEVELOP'ART :---------------------------------------------------------------------------------------------------------//  */}
                
                <h3
                    className="text-3xl mt-10 font-bangers">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Site Develop'Art : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                    un CMS pour artiste, pour que celui-ci puisse entièrement moduler sa galerie d'art, avec changements de ses bannières, de son logo, de sa couleur de fond, de ses polices, etc etc ...
                </p>

                <h4
                    className="ml-5 md:ml-10 mt-6 text-2xl font-bangers"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Stack Technique : 
                </h4>

                <ul
                    className="font-lilita italic ml-8 md:ml-14 mt-2 "> 
                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                            React.js
                    </li>

                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                           Node.js
                    </li>

                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                            PostgreSQL
                    </li>
                </ul>

                <Swiper pagination={true} modules={[Pagination]} 
                        className="mySwiper w-full h-full mx-auto mt-10">
                    
                    <SwiperSlide 
                        className="text-center flex justify-center items-center">
                            <div
                                className="flex justify-center items-center">
                                    <Image
                                        src= {`${tableDevArt[0]?.path}` }
                                        width={400}
                                        height={400}
                                        alt="image de la page d'accueil de developart"
                                    />
                            </div>
                    </SwiperSlide>
                    <SwiperSlide 
                        className="text-center flex justify-center items-center">
                            <div
                                className="flex justify-center items-center">
                                    <Image
                                        src= {`${tableDevArt[1]?.path}` }
                                        width={400}
                                        height={400}
                                        alt="image de la page d'accueil de developart"
                                    />
                            </div>
                    </SwiperSlide>
                    <SwiperSlide 
                        className="text-center flex justify-center items-center">
                            <div
                                className="flex justify-center items-center">
                                    <Image
                                        src= {`${tableDevArt[1]?.path}` }
                                        width={400}
                                        height={400}
                                        alt="image de la page d'accueil de developart"
                                    />
                            </div>
                    </SwiperSlide>
                    
                </Swiper>

              

                <h3
                    className="text-3xl mt-10 font-bangers">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        "LVDP Rencontres" Site développé en Next.js, avec Prisma et PostgresSQL : 
                </h3>

                <p
                    className="mt-10 ml-5 md:ml-11 text-xl font-lilita italic">
                        Accès : 
                        <Link 
                            className="underline ml-2"
                            href="https://lvdp-rencontres.vercel.app/">
                            lvdp-rencontres
                        </Link>
                </p>
                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic">
                    Le but de ce site étant de mettre en lien des personnes partageant un même centre d'intérêt entre elles, pour favoriser des rencontres sur toute la France via un simple tableau où les adhérents volontaires peuvent se proposer en tant que contact. <br />
                    Le site peut paraitre simpliste, mais en réalité,  il possède pas mal de fonctionnalités que nous allons détailler, avec les aspects sécurité. 
                </p>

                <h4
                    className="ml-5 md:ml-10 mt-6 text-2xl font-bangers"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Stack Technique : 
                </h4>

                <ul
                    className="font-lilita italic ml-8 md:ml-14 mt-2 "> 
                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                            Next.js
                    </li>

                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                            Prisma
                    </li>

                    <li>
                        <ImEye 
                            className="inline-block pr-1"/>
                            PostgreSQL
                    </li>
                </ul>

                <h4
                    className="ml-5 md:ml-10 mt-6 text-2xl font-bangers pb-4"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Fonctionnalités : 
                </h4>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic pb-8">
                        <ImEye 
                            className="inline-block text-2xl pr-2 "/>
                            Un tableau de consultation accessible à tous, et triable soit par départements(par ordre numérique croissant), soit par villes (par ordre alphabétique).
                        
                        <div className="flex justify-center mt-4">
                           <Image
                             src="/images/imprEcran/LVDP/tableauContacts.png"
                             alt="image du formulaire pour les contacts qui se portent volontaires"
                             width={350}
                             height={350}
                            /> 
                        </div>
                    
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic pb-8">
                        <MdSecurity 
                            className="inline-block pr-2 text-4xl text-red-500"/>
                            Un formulaire pour se proposer comme contact, protégé par un schéma de validation de données YUP ; si le remplissage du formulaire est correct et validé par YUP, un email automatique sera envoyé à l'admin via Nodemailer pour que celui-ci puisse créer un nouveau contact.

                         <div className="flex justify-center mt-4">
                           <Image
                             src="/images/imprEcran/LVDP/formContact.png"
                             alt="image du formulaire pour les contacts qui se portent volontaires"
                             width={200}
                             height={200}
                            /> 
                        </div>       
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic pb-8">
                        <ImEye 
                            className="inline-block text-3xl pr-2 "/>
                            Formulaire pour que l'admin puisse se logguer , avec possibilité de changer son mot de passe.
                        
                        <div className="flex justify-center mt-4">
                           <Image
                             src="/images/imprEcran/LVDP/formAdmin.png"
                             alt="image du formulaire pour les contacts qui se portent volontaires"
                             width={200}
                             height={200}
                            /> 
                        </div>
                    
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic pb-8">
                        <MdSecurity 
                            className="inline-block pr-2 text-4xl text-red-500"/>
                            Interface réservé à l'admin et sécurisé par la gestion d'un cookie httpOnly (donc défini coté serveur).
                        
                        <div className="flex justify-center mt-4">
                           <Image
                             src="/images/imprEcran/LVDP/tableauAdmin.png"
                             alt="image du formulaire pour les contacts qui se portent volontaires"
                             width={350}
                             height={350}
                            /> 
                        </div>
                    
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic pb-10">
                        <MdSecurity 
                            className="inline-block pr-2 text-4xl text-red-500"/>
                            Toutes les operations CRUD sont sécurisées par la verification systématique d'un cookie httpOnly, et les liens strictement réservés à l'admin sont non accessibles, car protégés par un middleware. 
                    
                </p>

                <p
                    className="ml-5 md:ml-10 mt-2 text-lg font-lilita italic pb-10">
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