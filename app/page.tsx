import Image from "next/image";

export default function Home() {
  return (
    
  <div 
    className="w-full h-full bg-black">
    
    <div className="w-[70%] mx-auto  flex justify-center flex-wrap gap-8 pt-8 pb-8 bg-black">
     

        <div
          className="">

            <Image
              src="/images/vignettes/VignettesFS.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className="">

            <Image
              src="/images/vignettes/VignettesInterface.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className="">

            <Image
              src="/images/vignettes/VignettesCréation.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className="">

            <Image
              src="/images/vignettes/VignettesQui.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className="">

            <Image
              src="/images/vignettes/VignettesContact.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>

        <div
          className="">

            <Image
              src="/images/vignettes/VignettesYinYangSoleilBlanc.png"
              alt="vignette avec paysage minimaliste pour présenter le travail en Full-Stack"
              width={400}
              height={400}
            />
        </div>
       

    </div>

  </div>
  );
}
