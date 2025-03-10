import Image from "next/image"; 

export default function Banner() {
    return(
        <div
            className="w-full h-[350px] border-red flex justify-center items-center">
           
           <div
                className="">
                    <Image 
                        className=""
                        src= "/images/logos/BeWildFondBlanc.svg"
                        alt="logo BeWild"
                        width={500}
                        height={350}
                    />
            </div>
              
        </div>
    )
}