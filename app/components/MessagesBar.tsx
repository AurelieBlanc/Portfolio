"use client"; 
import { useState, useEffect } from "react"; // pour mettre en place les states locaux
import useThemeStore from "@/store/themeStore";


export default function MessagesBar () {

    const { theme, toggleColorBar, colorBar } = useThemeStore(); 

    const [ themeActu , setThemeActu ] = useState<string>();
    
    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme"); 
        console.log("valueLocalStorage : ", valueLocalStorage); 
    
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }
      }, [])
    
      useEffect(() => {
        setThemeActu(theme)
      }, [theme])
    

    const couleurLight = " text-black border-black"; 
    const couleurDark = "text-white border-white "; 

    const messages = ([
        { message: "Cap ou pas Cap de me cliquer dessus !!?", color: "bg-vertLight"}, 
        { message: "Ah ouais t'es vraiment chaud toi !!!", color: "bg-vertDark"}, 
        { message: "Je te regarde toi, ô humain, t'agiter en vain ! ", color: "bg-blueDark"}, 
        { message: "Tu cherches la fight ?!", color: "bg-sable"}, 
        { message: "Arrete de m'irriter le clic !! ", color: "bg-prune"}, 
        { message: "Si tu embauches ma créatrice, tu seras bénie pour 20 générations !!! ", color: "bg-gris"}, 
    ]);

    useEffect(() => {
        toggleColorBar(messages[0].color); 
    }, [])


    const [ messageDisplay, setMessageDisplay ] = useState(
        messages[0].message); 
    
    // const [ couleur, setCouleur ] = useState(messages[0].color)
    

    function changeMessage () {
        let index = messages.findIndex (elem => elem.message === messageDisplay) 
        let newIndex = index +1 ; 
      
        if (newIndex !== 6) {
            setMessageDisplay (  
                messages[newIndex].message
            )
            // setCouleur (
            //     messages[newIndex].color
            // )
            toggleColorBar (
                messages[newIndex].color
            )
        } else {
            setMessageDisplay (  
                messages[0].message
            )
            // setCouleur (
            //     messages[0].color
            // )
            toggleColorBar (
                messages[0].color
            )
        }
        
    }

    return (
        <div    
            className={` ${ themeActu === "light" ? couleurLight : couleurDark } w-full h-[120px] md:h-[60px]  ${colorBar} mx-auto border-t-4 border-b-4 rounded-sm flex justify-center items-center font-bangers font-medium text-2xl tracking-wide text-center pl-5 pr-5`}
            onClick={changeMessage}>

                {messageDisplay}
        </div>
    )
}