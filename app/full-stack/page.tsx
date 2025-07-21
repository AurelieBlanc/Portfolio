"use client" // composant éxécuté uniquement coté client



// La section IMPORTS : -------------------------------------------------------------------------------------------------------------------------------//

import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante <PiFlyingSaucerDuotone />
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit)  <BsFillCloudFog2Fill />
import { ImEye } from "react-icons/im"; // import eye, icone oeil  <ImEye />
import { MdSecurity } from "react-icons/md"; // icone sécurité <MdSecurity />
import { FaInstagram } from "react-icons/fa"; // icone instagram <FaInstagram />
import { FaReact } from "react-icons/fa";  // icone React <FaReact />
import { IoLogoNodejs } from "react-icons/io5"; // icone Node.js <IoLogoNodejs />
import { SiPostgresql } from "react-icons/si"; // icone PostGreSQL <SiPostgresql />
import { SiNextdotjs } from "react-icons/si"; // icone Next <SiNextdotjs />
import { SiPrisma } from "react-icons/si"; // icone Prisma <SiPrisma />
import { RiTailwindCssLine } from "react-icons/ri"; // icone Tailwind : <RiTailwindCssLine />
import { BiLogoTypescript } from "react-icons/bi"; // icone TypeScript : <BiLogoTypescript />
import { SiRedux } from "react-icons/si"; // icone Redux : <SiRedux />





import { useEffect, useState } from "react"; // import des hooks react
import Image from "next/image"; // import du composant Image
import Link from "next/link"; // import pour mettre en place des liens
import { Swiper, SwiperSlide } from "swiper/react" // import de swiper pour mettre en place des carroussels
 
import "swiper/css" ; // import des styles de Swiper
import "swiper/css/navigation"; 

import { Navigation } from "swiper/modules";

//-----------------------------------------------------------------------------------------------------------------------------------------------------//





export default function FullStackPage () {


// CODE pour gérer le theme dark ou light de la page en fonction du localStorage :----------------------------------------------------------------------//


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

    const light = "bg-parchemin text-black"
    const dark = "bg-black text-white"

//--------------------------------------------------------------------------------------------------------------------------------------------------------//




// CODE pour gérer les carroussels : ------------------------------------------------------------------------------------------------------------------------//



const tableDevArt = [
    { id: 0, type:"image", path: "/images/imprEcran/DevArt/DevArtGalerie.png", pt: "" }, 
    { id: 1, type:"image", path: "/images/imprEcran/DevArt/DevArtHome.png", pt: "pt-10" }, 
    { id: 2, type:"video", path: "/videos/DevArt/devArtDemo.mp4", ptMobile: "pt-20" , ptLaptop: "pt-10"}, 
]; 


const tableLVDP = [
    { id: 0, type: "image", path:"/images/imprEcran/LVDP/tableContactsHidden.png", width: 700, height: 300, ptMobile: "pt-10", text: "Un tableau de consultation accessible à tous, et triable soit par départements (par ordre numérique croissant), soit par villes (par ordre alphabétique)" }, 
    // { id: 1, type: "image", path:"/images/imprEcran/LVDP/tableContactsDisplayed.png", width: 700, height: 300, ptMobile: "pt-10", text: "gestion de l'affichage des coordonnées en conditionnal rendering" }, 
    { id: 1, type: "image", path:"/images/imprEcran/LVDP/formContact.png", width: 300, height: 200, ptMobile: "", text:"Un formulaire pour se proposer comme contact, protégé par un schéma de validation de données YUP puis envoi d'un email à l'admin via Nodemailer" }, 
    // { id: 3, type: "image", path:"/images/imprEcran/LVDP/formAdmin.png", width: 300, height: 200, ptMobile: "", text: "Formulaire pour que l'admin puisse se logguer , avec possibilité de changer son mot de passe." }, 
    { id: 2, type: "image", path:"/images/imprEcran/LVDP/tableContactsAdmin.png", width:650, height:300, ptMobile: "pt-10", text: "Interface réservé à l'admin et sécurisé par la gestion d'un cookie httpOnly (donc défini coté serveur)." }, 
]; 




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

            <div
                className="w-[80%] md:w-[60%]  mx-auto">
                <h2
                    className=" text-4xl md:text-6xl mx-auto text-center mt-10 font-bangers ">
                    Bienvenue en FULL-STACK Zone !! 
                    <div
                    className="inline-block">

                    <Image
                        src="/images/logos/vectos/fullStackBulle.svg"
                        width={70}
                        height={80}
                        alt="petite bulle de BD avec écrit full-stack area à l'intérieur"
                    />
                </div> 
                </h2>
               
            </div>



            
{/* // Code pour le site Art-Commerce : ---------------------------------------------------------------------- // */}
            <div
                className="w-[80%] mx-auto mt-20">
                <h3
                    className="text-3xl font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Site Art-Commerce : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Un site e-commerce fictif mais fonctionnel ! 
                </p>
                 <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Site réalisé de A à Z , en réalisant toutes les étapes : conception, développement, et mise en ligne, avec une solution de paiement opérationnelle.
                    
                </p>

                 <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Toute la sécurité a été réalisé par moi-même sans l'usage d'une bibliothèque tierce, dans le but de  maitriser pleinement cette partie, essentielle dans le développement web aujourd'hui. 
                    Cette démarche m'a permise de comprendre en profondeur les rouages du système, avec l'objectif de pouvoir appliquer cette logique quelle que soit la technologue utilisée.  
                    
                </p>

                <h4
                    className="ml-5 md:ml-10 mt-10 text-2xl font-bangers xl:text-3xl xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Stack Technique : 
                </h4>

                <ul
                    className="font-lilita italic ml-8 md:ml-14 mt-5 xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <li
                        className="text-xl">
                        <SiNextdotjs
                            className="inline-block pr-2 text-4xl"/>
                            Next.js
                    </li>

                    <li
                        className="text-xl">
                        <BiLogoTypescript
                            className="inline-block pr-2 text-4xl"/>
                           TypeScript
                    </li>

                    <li
                        className="text-xl">
                        <SiPostgresql
                            className="inline-block pr-2 text-4xl"/>
                            PostgreSQL
                    </li>
                    <li
                        className="text-xl">
                        <SiPrisma
                            className="inline-block pr-2 text-4xl"/>
                            Prisma
                    </li>
                    <li
                        className="text-xl">
                        <RiTailwindCssLine
                            className="inline-block pr-2 text-4xl"/>
                            Tailwind CSS
                    </li>
                </ul>

                 <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                   Je vous invite à tester mon site. Pour se faire, voici quelques explications qui pourraient servir: 
                   <Link
                    className="underline ml-2"
                    href="https://art-commerce-ten.vercel.app/qui-sommes-nous">
                        Fonctionnement du site
                   </Link>
                    
                </p>


                 <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                   Voici le code source de mon site e-commerce : 
                   <Link
                    className="underline ml-2"
                    href="https://github.com/AurelieBlanc/Art-Commerce">
                        Repo GitHub
                   </Link>
                </p>
                 <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Lien vers Art-Commerce: 
                   <Link
                    className="underline ml-2"
                    href="https://art-commerce-ten.vercel.app/">
                       Art-Commerce
                   </Link>
                </p>

                <div    
                    className="mt-10 flex justify-center">
                <Image
                    
                    alt="impression écran de Art-Commerce"
                    src="/images/imprEcran/ArtCom/artCom.png"
                    width={300}
                    height={300}/>
                </div>








{/* // Code pour le site WEEKYPLANNER : ---------------------------------------------------------------------------------------------------------------------// */}
                <h3
                    className="text-3xl mt-20 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Site WeekyPlanner : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Le planner rigolo au style rétro ! 
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    C'est un planner entièrement réalisé en Drag'N'Drop, avec React. 
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    On génère une tache dans le générateur de tâches ("My Todolist") à gauche de l'écran, puis on la dépose dans n'importe quelle section souhaitée... et si on est des pros de la procrastination, alors ce n'est pas bien grave, on fera glisser la tache pour la déposer dans un autre jour de la semaine.... 
                </p>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Bientôt developpé en appli. 
                </p>

                <h4
                    className="ml-5 md:ml-10 mt-10 text-2xl font-bangers xl:text-3xl xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Stack Technique : 
                </h4>

                <ul
                    className="font-lilita italic ml-8 md:ml-14 mt-5 xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <li
                        className="text-xl">
                        <FaReact 
                            className="inline-block pr-2 text-4xl"/>
                            React.js
                    </li>

                    <li
                        className="text-xl">
                        <IoLogoNodejs 
                            className="inline-block pr-2 text-4xl"/>
                           Node.js
                    </li>

                    <li
                        className="text-xl">
                        <SiPostgresql
                            className="inline-block pr-2 text-4xl"/>
                            PostgreSQL
                    </li>
                </ul>

                <div
                    className="mt-10">
                        <video className=" w-[80%] md:w-[75%] lg:w-[50%] mx-auto" controls >
                            
                            <source 
                                src="/videos/WeekyPlanner/WeekyDemo.mp4" 
                                type="video/mp4"
                                className="" />

                    </video>
                </div>






  {/* // Code pour le site DEVELOP'ART :---------------------------------------------------------------------------------------------------------//  */}
                
                <h3
                    className="text-3xl mt-20 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Site Develop'Art : 
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-5 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Un CMS pour artiste, pour que celui-ci puisse entièrement moduler sa galerie d'art, avec changements de ses bannières, de son logo, de sa couleur de fond, de ses polices, etc etc ...
                </p>

                <h4
                    className="ml-5 md:ml-10 mt-10 text-2xl font-bangers xl:text-3xl xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Stack Technique : 
                </h4>

                <ul
                    className="font-lilita italic ml-8 md:ml-14 mt-5 xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <li 
                        className="text-xl">
                        <FaReact 
                            className="inline-block pr-2 text-4xl"/>
                            React.js
                    </li>

                    <li
                        className="text-xl">
                        <IoLogoNodejs 
                            className="inline-block pr-2 text-4xl"/>
                           Node.js
                    </li>

                    <li
                        className="text-xl">
                        <SiPostgresql
                            className="inline-block pr-2 text-4xl"/>
                            PostgreSQL
                    </li>

                    <li
                        className="text-xl">
                        <SiRedux
                            className="inline-block pr-2 text-4xl"/>
                            Redux
                    </li>
                </ul>

                <Swiper navigation={true} modules={[Navigation]} 
                        className="mySwiper w-full h-full mt-10 flex items-center justify-center">

                { tableDevArt.map((elem) => {

                    if (elem.type === "image") {
                        return (

                        <SwiperSlide 
                            className="flex justify-center items-center h-full"
                            key={elem.id}>
                            <div
                                className={`flex justify-center items-center ${elem.pt}`}>
                                <Image
                                    
                                    src= {elem.path}
                                    width={500}
                                    height={400}
                                    alt="image de la page d'accueil de developart"
                                />
                            </div>
                    </SwiperSlide> 
                    );

                    } else if (elem.type === "video") { 
                        return (
                            <SwiperSlide 
                                className="flex justify-center items-center h-full"
                                key={elem.id}>
                                <div
                                    className="flex justify-center items-center">
                                        <video 
                                            className= {`w-[80%] md:w-[75%] lg:w-[50%] mx-auto ${elem.ptMobile} md:${elem.ptLaptop}`}
                                            controls >
                                            <source 
                                                src= {elem.path}
                                                type="video/mp4"
                                                 />
    
                                        </video>
    
                                </div>
                            </SwiperSlide>
                        );            
                    } else {
                        return null; 
                    }
                    })}                    
                    
                </Swiper>




            

{/* // Code pour le site LVDP :---------------------------------------------------------------------------------------------------------//  */}
              
                <h3
                    className="text-3xl mt-20 font-bangers xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        "LVDP Rencontres": 
                </h3>

                <p
                    className="mt-5 ml-5 md:ml-11 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                        Accès en ligne : 
                        <Link 
                            className="underline ml-2"
                            href="https://lvdp-rencontres.vercel.app/">
                            Lvdp-rencontres
                        </Link>
                </p>
                <p
                    className="mt-5 ml-5 md:ml-11 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                        Lien vers le code source : 
                        <Link 
                            className="underline ml-2"
                            href="https://github.com/AurelieBlanc/LVDP-Rencontres">
                            code source lvdp
                        </Link>
                </p>
                <p
                    className="ml-5 md:ml-10 mt-5 text-lg font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Le but de ce site étant de mettre en lien des personnes partageant un même centre d'intérêt entre elles, pour favoriser des rencontres sur toute la France via un tableau où les adhérents volontaires peuvent se proposer en tant que contact.
                </p>

                <h4
                    className="ml-5 md:ml-10 mt-10 text-2xl font-bangers xl:text-3xl xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Stack Technique : 
                </h4>

                <ul
                    className="font-lilita italic ml-8 md:ml-14 mt-2  xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <li 
                        className="text-xl">
                        <SiNextdotjs 
                            className="inline-block pr-2 text-4xl"/>
                            Next.js
                    </li>

                    <li
                        className="text-xl">
                        <SiPrisma
                            className="inline-block pr-2 text-4xl"/>
                            Prisma
                    </li>

                    <li
                        className="text-xl">
                        <SiPostgresql
                            className="inline-block pr-2 text-4xl"/>
                            PostgreSQL
                    </li>
                </ul>

                <h4
                    className="ml-5 md:ml-10 text-2xl font-bangers mt-10 xl:text-3xl xl:text-center xl:w-[50%] xl:mx-auto"> 
                    <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3 text-3xl"/>
                        Fonctionnalités : 
                </h4>

                <Swiper navigation={true}
                        modules={[Navigation]} 
                        className="mySwiper w-full h-full mx-auto mt-5"
                        >

                    {tableLVDP.map((elem) =>
                        <SwiperSlide 
                            className="text-center flex justify-center items-center"
                            key={elem.id}>
                            <div
                                className={`flex justify-center items-center ${elem.ptMobile} md:pt-0`}>
                                    <Image
                                        src= {elem.path}
                                        width={elem.width}
                                        height={elem.height}
                                        alt="image de la page d'accueil de developart"
                            />
                            </div>
                            <div
                                className="font-bangers text-xl md:w-[30%] mx-auto mt-6">
                                <p>
                                {elem.text}
                                </p>
                                
                            </div>
                        </SwiperSlide> 
                    )}        
                    
                </Swiper>

              

                {/* <p
                    className="ml-5 md:ml-10 mt-6 text-lg font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                        <ImEye 
                            className="inline-block text-2xl pr-2 "/>
                            Un tableau de consultation accessible à tous, et triable soit par départements(par ordre numérique croissant), soit par villes (par ordre alphabétique).
                    
                </p>

                <p
                    className="ml-5 md:ml-10 mt-6 text-lg font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                        <MdSecurity 
                            className="inline-block pr-2 text-4xl text-red-500"/>
                            Un formulaire pour se proposer comme contact, protégé par un schéma de validation de données YUP ; si le remplissage du formulaire est correct et validé par YUP, un email automatique sera envoyé à l'admin via Nodemailer pour que celui-ci puisse créer un nouveau contact.
 
                </p>

                <p
                    className="ml-5 md:ml-10 mt-6 text-lg font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                        <ImEye 
                            className="inline-block text-3xl pr-2 "/>
                            Formulaire pour que l'admin puisse se logguer , avec possibilité de changer son mot de passe.
                    
                </p>

                <p
                    className="ml-5 md:ml-10 mt-6 text-lg font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                        <MdSecurity 
                            className="inline-block pr-2 text-4xl text-red-500"/>
                            Interface réservé à l'admin et sécurisé par la gestion d'un cookie httpOnly (donc défini coté serveur).
                    
                </p> */}

                <p
                    className="ml-5 md:ml-10 mt-6 text-lg font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                        <MdSecurity 
                            className="inline-block pr-2 text-4xl text-red-500"/>
                            Toutes les operations CRUD sont sécurisées par la verification systématique d'un cookie httpOnly, et les liens strictement réservés à l'admin sont non accessibles, car protégés par un middleware. 
                    
                </p>

                


                <p
                    className="ml-5 md:ml-10 mt-12 text-lg font-lilita italic pb-16 xl:text-center xl:w-[50%] xl:mx-auto">
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