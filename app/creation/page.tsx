"use client"

import Image from "next/image";
import useThemeStore from "@/store/themeStore"; // on importe le store global
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante
import { BsFillCloudFog2Fill } from "react-icons/bs";//icone nuage speed (pour Exit) 
import { ImEye } from "react-icons/im"; // import eye



import Link from "next/link";

export default function CreationPage () {

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
                className="text-4xl md:text-6xl w-[90%] mx-auto text-center mb-10 mt-5 font-bangers">
                  Bienvenue sur la page création de contenus 
            </h2>
            
            <div
                className="w-[80%] mx-auto">

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                       Sur cette page, je vous partagerais quelques unes de mes créations. 
                </p>


                <h3
                    className="text-3xl mt-10 font-bangers mb-10">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Les Logos :
                </h3>

                <div
                    className="flex gap-3 flex-wrap items-center justify-center w-[90%] mx-auto mb-10">

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/png/beWfondNoir.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/png/beWildfondBlanc.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/png/beWild2triangles.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/png/beWildtrianglesFleches.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/png/BlackWhite.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>

                        <div
                            className="w-full md:w-1/4">
                                <Image
                                    src="/images/logos/png/BWgreen.png"    
                                    alt="logo"
                                    width={300}
                                    height={300}
                                />
                        </div>
                        


                        

                </div>


                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur vel quo eius dolores debitis saepe, cumque illo odit qui sapiente sed natus nam repellendus maiores vitae placeat accusantium dolorem!
                      
                </p>

                <h3
                    className="text-3xl mt-10 font-bangers mb-10">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Les Vignettes :
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic mb-10">
                       100% créées par Lili : 
                      
                </p>

                <div
                    className="flex gap-3 flex-wrap items-center justify-center w-[90%] mx-auto pb-10 ">

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
                                    src="/images/vignettes/VignettesCréation.png"    
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
                    className="text-3xl mt-10 font-bangers mb-10">
                     <PiFlyingSaucerDuotone 
                        className=" inline-block mr-3"/>
                        Les images générées par IA pour différents projets :
                </h3>

                <p
                    className="ml-5 md:ml-10 mt-2 text-xl font-lilita italic mb-10">
                         <ImEye 
                            className="inline-block text-3xl pr-2 "/>
                            WeekyPlanner : 
                      
                </p>

                <div
                    className="flex gap-3 flex-wrap items-center justify-center w-[90%] mx-auto pb-10 ">

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

                
                
            </div>

        </div>
    )
}