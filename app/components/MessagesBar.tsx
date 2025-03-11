"use client"; 

import useThemeStore from "@/store/themeStore";


export default function MessagesBar () {


    const { theme } = useThemeStore(); 

    const couleurLight = " text-black border-black"; 
    const couleurDark = "text-white border-white "; 

    return (
        <div    
            className={` ${ theme === "light" ? couleurLight : couleurDark } w-full h-[60px] bg-prune  mx-auto border-t-4 border-b-4 rounded-sm flex justify-center items-center font-bangers font-medium text-2xl tracking-wide `}>
                Cap ou Pas Cap de me cliquer dessus ???!
        </div>
    )
}