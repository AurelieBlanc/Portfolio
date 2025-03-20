"use client"

import useThemeStore from "@/store/themeStore"; // on importe le store global
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) 
import { ImEye } from "react-icons/im"; // import eye <ImEye />
import { GiRotaryPhone } from "react-icons/gi"; // import icone tel retro <GiRotaryPhone />
import { AiTwotoneMail } from "react-icons/ai"; // import icone mail  <AiTwotoneMail />
import Image from "next/image";

 
import { useEffect, useState } from "react"; 


import Link from "next/link";

export default function ContactPage () {

    // Code pour le THEME avec gestion en LOCAL STORAGE :-------------------------------------------------------------// 

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

    //-----------------------------------------------------------------------------------------------------------------//




    // Code pour la GESTION DE l'AFFICHAGE DE L'EMAIL OU DU NUMERO :--------------------------------------------------//

    const [ hidden, setHidden ] = useState<boolean>(true); 

    function switchBooleanHidden() {
        setHidden(prevState => !prevState); 
        console.log(hidden, hidden, hidden)
    }

    //----------------------------------------------------------------------------------------------------------------//



    // Code pour la GESTION et soumission du FORMULAIRE DE CONTACT  : ------------------------------------------------//



    function handleInput () {

    }
    
    function submitForm() {

    }


    //------------------------------------------------------------------------------------------------------------------//

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
                   Bienvenue en Contact Zone !!! 
            </h2>
            
            <div
                className="w-[80%] mx-auto">

                <h3
                    className="text-3xl font-bangers ">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                       Interessé(e) pour rentrer en contact ? Voici mes coordonnées :
                </h3>

                <div
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                       <ul
                            className="pl-4 md:pl-8 pt-6">
                                <li
                                    className="">
                                     <GiRotaryPhone 
                                        className="inline-block pr-2 text-3xl"/>
                                        
                                      
                                        <ImEye 
                                            className="inline-block text-4xl pr-2"
                                            onClick={switchBooleanHidden}/> 
                                            Clique sur l'oeil pour voir le numéro.


                                        <span
                                            className={`block pt-2 ${ hidden === false ? "": "hidden"}`}>
                                            Téléphone : 06.60.72.79.51
                                        </span>
                                </li>
                                <li
                                    className="pt-8">
                                     <AiTwotoneMail 
                                        className="inline-block pr-2 text-3xl"/>

                                        <ImEye 
                                            className="inline-block text-4xl pr-2"
                                            onClick={switchBooleanHidden}/> 
                                            Clique sur l'oeil pour voir l'adresse mail. 

                                        <span
                                            className={`block pt-2 ${ hidden === false ? "": "hidden"}`}>
                                             Email : aurelieblanc86@gmail.com
                                        </span>  
                                       
                                </li>
                       </ul>
                </div>

                <h3
                    className="text-3xl mt-10 font-bangers">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>

                    Si tu préfères remplir un joli formulaire .... alors  voici :  
                </h3>

                <div
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic pb-10">
                       <form
                            className="flex flex-col w-[94%] md:w-[60%] mx-auto"
                            onSubmit={submitForm}>

                            {/* Champ Nom, Prénom */}
                            <label
                                className="pr-3">
                                    Votre nom, prénom : 
                            </label>
                            <input 
                                className="rounded-md mb-5"
                                required/>
                           

                            {/* Champ Email*/}
                            <label
                                className="pr-3">
                                    Votre Email : 
                            </label>
                            <input 
                                className="rounded-md mb-5"
                                required/>

                                 {/* Champ Téléphone*/}
                            <label
                                className="pr-3">
                                    Votre Téléphone : 
                            </label>
                            <input 
                                className="rounded-md mb-5"/>

                                 {/* Champ Message*/}
                            <label
                                className="pr-3">
                                    Votre demande : 
                            </label>
                            <textarea
                                className="rounded-md mb-5"/>
                           
                           
                            <button
                                className="border-4 rounded-md h-[104px] w-[200px] mx-auto">
                                    <Image
                                        src="/images/boutons/boutonRose.png"
                                        alt="bouton pour valider le formulaire"
                                        width={200}
                                        height={100}
                                    />
                            </button>

                        </form>
                </div>
                
            </div>

        </div>
    )
}