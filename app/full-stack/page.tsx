"use client"

import useThemeStore from "@/store/themeStore"; // on importe le store global


export default function FullStackPage () {

    const { theme } = useThemeStore(); 

    const light = "bg-parchemin text-black"
    const dark = "bg-black text-white"

    return (
        <div
            className={`h-screen font-bangers flex justify-center pt-8 ${ theme === "light" ? light : dark}`}>
                ici c'est la full-stack page !!!!


        </div>
    )
}