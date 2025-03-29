"use client" // composant éxécuté coté client seulement


// Section pour les imports : --------------------------------------------------------------------------------//

import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante <PiFlyingSaucerDuotone />
import { useEffect, useState } from "react"; // import des hooks react
import useThemeStore from "@/store/themeStore"; // import du store global
import { motion, ResolvedValues, AnimatePresence } from "framer-motion"; // impprt pour créer des animations
//---------------------------------------------------------------------------------------------------------------//



export default function Banner() {


// Code pour gerer le theme dark ou light avec localStorage : ---------------------------------------------------------------//

    const { theme } = useThemeStore(); 

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
    
      useEffect(() => {
        setThemeActu(theme)
      }, [theme])

    const couleurLight = "bg-parchemin text-black"; 
    const couleurDark = "bg-black text-white"; 

//--------------------------------------------------------------------------------------------------------------// 






// CODE pour gérer les states des animations --------------------------------------------------------------------------------------------------------------// 

const [ message, setMessage ] = useState<string>(""); // pour générer un message à l'arrivée de la soucoupe volante
const [ messageShown, setMessageShown ] = useState(false); // pour eviter le clignotement des messages de la soucoupe

//----------------------------------------------------------------------------------------------------------------------------------------------// 





    return(
        <div
            className = {` w-full h-full border-red flex flex-col justify-center items-center ${ themeActu === 'light' ? couleurLight : couleurDark}`}>
           
            <motion.div
                 initial={{ x: 0, y:0 }}
                 animate={{
                     scale: [0, 1.2, 0.6, 1]
                 }}
                
                 transition={{ duration: 2,  ease: "easeInOut", }}>
                <h1 
                    className="font-bangers tracking-wide text-5xl w-[70%] md:text-7xl md:w-[60%]  mx-auto text-center mt-20 mb-2">
                    Miss White <br />
                    Dev web full-stack <br />
                </h1>
            </motion.div>

            <motion.div
                 initial={{ x: 0, y:0 }}
                 animate={{
                    scale: [0, 1.2, 0.5, 1]
                }}
               
                transition={{ duration: 2,  ease: "easeInOut", delay: 1 }}>

                <h2
                    className="font-bangers tracking-wide text-3xl w-[70%] md:text-4xl md:w-[60%]  mx-auto text-center mt-2 mb-10">
                    Pour vous servir </h2>
            </motion.div>

            <div className="relative w-[300px] h-[150px]">


            <motion.div
                className="absolute text-7xl"
                initial={{ x: -150, y: 70 }}
                animate={{
                    x: [-140, -130, -120, -110, -100, -90, -80, -70, -60,-50, -40, -30, -20, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130], 
                    y: [60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0, -10, -15, -20, -25, -20, -10, 0 ], 
                    rotate: [0, 10, -10, 10, -10, 10, -10, 10], 
                    scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3]
                }}
               
                transition={{ duration: 5,  ease: "easeInOut", repeat: Infinity, repeatType: "reverse", }}
                onUpdate={(latest: ResolvedValues ) => {

                    const max = latest.x ? latest.x : 0;  

                    const maxX = Number(max); 

                    const messages = [
                        "M'en Vais!!",
                        "Cloclo Forever",
                        "Flower power",
                        "UFO lover",
                        "NanaNanère", 
                        "Sur Terre, ça fouette !!", 
                        "Rebelle va !!", 
                        "opé pour la bagarre", 
                        "Pillier de bar va !", 
                        "je suis le + bo !"
                        ];
                   
                   
                    if(maxX >= 110 && messageShown === false ) {
                        
                        const indexHasard = Math.floor(Math.random()*messages.length); 
                        setMessage(messages[indexHasard]); 
                        setMessageShown(true); 

                    } else if(maxX < 110 && messageShown === true) {
                        setMessage(""); 
                        setMessageShown(false); 
                    }
                }}
            >

                <PiFlyingSaucerDuotone 
                    className=""/>

                {/* {message && <p className="text-center font-bangers text-2xl">{message}</p>} */}

                <AnimatePresence initial={false}>
                {message && (
                
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5}}
                        className="text-center font-bangers text-xl pr-10"
                    >{message}
                </motion.div>)}                
                </AnimatePresence>

            </motion.div>

            </div>
            

        </div>
    )
}; 