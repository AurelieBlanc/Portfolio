import Image from "next/image"; 
import { PiFlyingSaucerDuotone } from "react-icons/pi"; // import icone secoupe volante


export default function Banner() {
    return(
        <div
            className="w-full h-full border-red flex flex-col justify-center items-center bg-black">
           
           {/* <div
                className="">
                    <Image 
                        className=""
                        src= "/images/logos/BeWildFondNoir.svg"
                        alt="logo BeWild"
                        width={200}
                        height={200}
                    />
            </div> */}

            <h1 
                className="font-bangers tracking-wide text-5xl text-white w-[300px]  mx-auto text-center mt-20 mb-10">
                    BIENVENUE sur Un site complètement Zinzin
            </h1>

            <PiFlyingSaucerDuotone 
                className="text-white text-6xl mb-10"/>


        </div>
    )
}; 