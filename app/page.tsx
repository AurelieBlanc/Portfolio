"use client"; // composant éxécuté uniquement coté client


// CODE pour les IMPORTS : ------------------------------------------------------------------------------------------------------------------------------//

import Image from "next/image"; // import du hook Image
import useThemeStore from "@/store/themeStore"; // on importe le store global
import Link from "next/link"; // on importe Link pour créer des liens entre nos différentes pages
import * as motion from "motion/react-client"; // on importe motion de react pour créer des animations
import { useEffect, useState } from "react"; // import des outils react 
import { TbBubbleFilled } from "react-icons/tb"; // icone bulle nuage : <TbBubbleFilled />


//---------------------------------------------------------------------------------------------------------------------------------------------------------//




export default function Home() {

// Code pour gerer le theme dark/light à partir du localStorage: --------------------------------------------------------------------------------------------//

  const { toggleTheme, theme } = useThemeStore(); 

  const [ themeActu , setThemeActu ] = useState<string>(); 

  function switchTheme() {  // cette fonction sert à switcher entre le theme dark et light et est déclenchée lors du clc sur la vignette ying yang
    toggleTheme();  
  }; 

  useEffect (() => {  // ce 1er useEffect se déclenche au montage du composant et s'éxécute seulement s'il y'a un localStorage avec la propriété thème
    const valueLocalStorage = localStorage.getItem("theme"); 

    if(valueLocalStorage) {  // s'il ya le localStorage existant on remet à jour themeActu avec la valeur enregistrée du localStorage
    setThemeActu(valueLocalStorage);  
    }
  }, [])

  useEffect(() => {  // ce 2ème useEffect s'éxécute si theme change (lorsque la fonction switchTheme est activée) et met à jour themeActu avec la bonne valeur 
    setThemeActu(theme)
  }, [theme])

  
// pour solution localStorage en temps reel 
// https://stackoverflow.com/questions/72918582/why-local-storage-not-working-react-js-in-real-time

  const soleilBlanc = "/images/vignettes/VignettesYinYangSoleilBlanc.png"
  const soleilNoir = "/images/vignettes/VignettesYinYangSoleilNoir.png"

//----------------------------------------------------------------------------------------------------------------------------------------------------------------//




  return (
    
  <div 
    className={`w-full h-[100%]  ${ themeActu === "light" ? "bg-parchemin" : "bg-black"}`}>

      <h2
        className={`${themeActu === "light" ? "text-black" : "text-white"} font-bangers text-center pt-6 text-2xl w-[90%] mx-auto`}>
          Pour Découvrir mon travail, veuillez cliquer sur les vignettes ci-dessous
          <TbBubbleFilled 
            className="inline-block ml-2"/>

        </h2>
    
    <div className={`w-[70%] mx-auto  flex justify-center flex-wrap gap-8 pt-8 pb-8 ${ themeActu === "light" ? "bg-parchemin" : "bg-black"}`}>
     
        <motion.div
          className={themeActu === "light" ? "border-4 border-black" : "border-4 border-white"}
          animate={{ rotate: 180 }}
          transition={{ duration: 2}}
          whileHover = {{
            scale: [null, 1.1, 1.2], 
            transition: {
              duration: 0.5, 
              times: [0, 0.6, 1], 
              ease: [ "easeInOut", "easeOut"]
            }
          }}
          >
            <Link href="full-stack">
              <Image
                src="/images/vignettes/VignettesFS.png"
                alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
                width={400}
                height={400}
                className="transform rotate-180"
              />
            </Link>
        </motion.div>

        <motion.div
          className={themeActu === "light" ? "border-4 border-black" : "border-4 border-white"}
          animate={{ rotate: 180 }}
          transition={{ duration: 2}}
          whileHover = {{
            scale: [null, 1.1, 1.2], 
            transition: {
              duration: 0.5, 
              times: [0, 0.6, 1], 
              ease: [ "easeInOut", "easeOut"]
            }
          }}
          >
            <Link href="interfaces">
              <Image
                src="/images/vignettes/VignettesInterface.png"
                alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
                width={400}
                height={400}
                className="transform rotate-180"
              />
            </Link>
        </motion.div>

        <motion.div
          className={themeActu === "light" ? "border-4 border-black" : "border-4 border-white"}
          animate={{ rotate: 180 }}
          transition={{ duration: 2}}
          whileHover = {{
            scale: [null, 1.1, 1.2], 
            transition: {
              duration: 0.5, 
              times: [0, 0.6, 1], 
              ease: [ "easeInOut", "easeOut"]
            }
          }}>
            <Link
              href="creation">
              <Image
                src="/images/vignettes/VignettesCreation.png"
                alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
                width={400}
                height={400}
                className="transform rotate-180"
              />
            </Link>
        </motion.div>

        <motion.div
          className={themeActu === "light" ? "border-4 border-black" : "border-4 border-white"}
          animate={{ rotate: 180 }}
          transition={{ duration: 2}}
          whileHover = {{
            scale: [null, 1.1, 1.2], 
            transition: {
              duration: 0.5, 
              times: [0, 0.6, 1], 
              ease: [ "easeInOut", "easeOut"]
            }
          }}
         >
            
            <Link href="presentation">
              <Image
                src="/images/vignettes/VignettesQui.png"
                alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
                width={400}
                height={400}
                className="transform rotate-180"
              />
            </Link>
        </motion.div>

        <motion.div
          className={themeActu === "light" ? "border-4 border-black" : "border-4 border-white"}
          animate={{ rotate: 180 }}
          transition={{ duration: 2}}
          whileHover = {{
            scale: [null, 1.1, 1.2], 
            transition: {
              duration: 0.5, 
              times: [0, 0.6, 1], 
              ease: [ "easeInOut", "easeOut"]
            }
          }}>

            <Link href="contact">
              <Image
                src="/images/vignettes/VignettesContact.png"
                alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
                width={400}
                height={400}
                className="transform rotate-180"
              />
            </Link>
        </motion.div>

        <motion.div
          className={themeActu === "light" ? "border-4 border-black" : "border-4 border-white"}
          onClick={switchTheme}
          animate={{ rotate: 180 }}
          transition={{ duration: 2}}
          whileHover = {{
            scale: [null, 1.1, 1.2], 
            transition: {
              duration: 0.5, 
              times: [0, 0.6, 1], 
              ease: [ "easeInOut", "easeOut"]
            }
          }}>
            
              <Image
              
                src={ themeActu === "light" ? soleilNoir : soleilBlanc }
                alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
                width={400}
                height={400}
                className="transform rotate-180"
              />  
        </motion.div>
       
    </div>

  </div>
  );
}
