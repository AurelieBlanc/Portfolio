"use client"; 

import Image from "next/image";
import useThemeStore from "@/store/themeStore"; // on importe le store global

export default function Home() {

  const { toggleTheme, theme } = useThemeStore(); 

  function switchTheme() {
    toggleTheme(); 
    console.log(theme); 
  }

  const soleilBlanc = "/images/vignettes/VignettesYinYangSoleilBlanc.png"
  const soleilNoir = "/images/vignettes/VignettesYinYangSoleilNoir.png"


  return (
    
  <div 
    className={`w-full h-[100%]  ${ theme === "light" ? "bg-parchemin" : "bg-black"}`}>
    
    <div className={`w-[70%] mx-auto  flex justify-center flex-wrap gap-8 pt-8 pb-8 ${ theme === "light" ? "bg-parchemin" : "bg-black"}`}>
     

        <div
          className={theme === "light" ? "border-4 border-black" : "border-4 border-white"}>

            <Image
              src="/images/vignettes/VignettesFS.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className={theme === "light" ? "border-4 border-black" : "border-4 border-white"}>

            <Image
              src="/images/vignettes/VignettesInterface.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className={theme === "light" ? "border-4 border-black" : "border-4 border-white"}>

            <Image
              src="/images/vignettes/VignettesCréation.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className={theme === "light" ? "border-4 border-black" : "border-4 border-white"}>

            <Image
              src="/images/vignettes/VignettesQui.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className={theme === "light" ? "border-4 border-black" : "border-4 border-white"}>

            <Image
              src="/images/vignettes/VignettesContact.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

       
        <div
          className={theme === "light" ? "border-4 border-black" : "border-4 border-white"}
          onClick={switchTheme}>

            <Image
              
              src={ theme === "light" ? soleilNoir : soleilBlanc }
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>
       
       

    </div>

  </div>
  );
}
