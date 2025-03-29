"use client" // composant éxécuté uniquement coté client


// Code pour les imports : ---------------------------------------------------------------------------------------------------------//

import Image from "next/image";  // import de l'outil Image
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante  <PiFlyingSaucerDuotone />
import { BsFillCloudFog2Fill } from "react-icons/bs";// import icone nuage speed (pour Exit) <BsFillCloudFog2Fill />
import { ImEye } from "react-icons/im"; // import eye , icone oeil  <ImEye />
import { FaInstagram } from "react-icons/fa"; // import icone insta   <FaInstagram />
import { useEffect, useState } from "react"; // import des outils React
import Link from "next/link"; // import de l'outil Lien

//------------------------------------------------------------------------------------------------------------------------------------//




export default function CreationPage () {



// CODE pour le thème dark/light géré par le localStorage :-------------------------------------------------------------------------------------------------//

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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------//





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
                className="text-4xl md:text-6xl mx-auto text-center mb-10 mt-10 font-bangers">
                Bienvenue sur la page création de contenus !
                <div
                    className="inline-block">
                
                    <Image
                        src="/images/logos/vectos/creationBulle.svg"
                        width={70}
                        height={80}
                        alt="petite bulle de BD avec écrit full-stack area à l'intérieur"
                                    />
                </div> 
            </h2>
            </div>
            
            <div
                className="w-[80%] mx-auto">
                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto">
                    Sur cette page, je vous partagerais quelques unes de mes créations. 
                </p>

                <h3
                    className="text-3xl mt-20 font-bangers mb-5 xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Les Logos :
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic mb-7 xl:text-center xl:w-[50%] xl:mx-auto">
                     <ImEye 
                            className="inline-block text-3xl pr-2 "/>
                            Quelques logos réalisés. 
                      
                </p>

                <div
                    className="flex gap-3 flex-wrap items-center justify-center w-[90%] mx-auto mb-10">

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/beWild2Triangles.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/beWildFondNoir.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/beWildLaurier.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/bwClass.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/beWildFondBlanc.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/bwDiff.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/beWildTrianglesFleches.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/bwGreen.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/nonVect/beWildFondBlancOcre.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                </div>


               
                <h3
                    className="text-3xl mt-20 font-bangers mb-5 xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto ">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Les Vignettes :
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic mb-5 xl:text-center xl:w-[50%] xl:mx-auto">
                        <ImEye 
                            className="inline-block text-3xl pr-2 "/>
                            100% créées par Miss White: 
                      
                </p>

                <div
                    className="flex gap-3 flex-wrap items-center justify-center w-[90%] mx-auto mt-10 ">

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/vignettes/VignettesFS.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/vignettes/VignettesInterface.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/vignettes/VignettesCreation.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/vignettes/VignettesQui.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/vignettes/VignettesContact.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/vignettes/VignettesYinYangSoleilBlanc.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/vignettes/VignettesYinYangSoleilNoir.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                </div>

                <h3
                    className="text-3xl mt-20 font-bangers mb-5 xl:text-4xl xl:text-center xl:w-[50%] xl:mx-auto">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Les images générées par IA pour différents projets :
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-10 text-xl font-lilita italic mb-5 xl:text-center xl:w-[50%] xl:mx-auto">
                         <ImEye 
                            className="inline-block text-3xl pr-2 "/>
                            WeekyPlanner : 
                      
                </p>

                <div
                    className="flex gap-3 flex-wrap items-center justify-center w-[90%] mx-auto mt-10">

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/imprEcran/WeekyPlanner/design1.jpeg"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/imprEcran/WeekyPlanner/design2.jpeg"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/imprEcran/WeekyPlanner/design2.jpeg"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/imprEcran/WeekyPlanner/interfaceWP.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                </div>

                <p
                  className="ml-5 md:ml-10 mt-20 text-lg font-lilita italic xl:text-center xl:w-[50%] xl:mx-auto pb-20">
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