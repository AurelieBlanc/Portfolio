"use client"; // composant éxécuté uniquement coté client 

import { useState, useEffect } from "react"; // pour mettre en place les states locaux
import useThemeStore from "@/store/themeStore"; // import du store global


export default function MessagesBar () {

// CODE pour gérer le theme avec localStorage : ----------------------------------------------------------------------------//

    const { theme, toggleColorBar, colorBar } = useThemeStore();  // !!! ici il yaura aussi toggleColorBar qui est une fonction permettant de changer la couleur du messagesBar

    const [ themeActu , setThemeActu ] = useState<string>();
    
    useEffect (() => {
        const valueLocalStorage = localStorage.getItem("theme"); 
    
        if(valueLocalStorage) {
        setThemeActu(valueLocalStorage);  
        }
      }, [])
    
      useEffect(() => {
        setThemeActu(theme)
      }, [theme])
    

    const couleurLight = " text-black border-black"; 
    const couleurDark = "text-white border-white "; 

//----------------------------------------------------------------------------------------------------------------------------------//







// CODE pour gérer les messages de la NavBar : ---------------------------------------------------------------------------------------//

    const messages = ([ // tableau des messages
        { message: "Cap ou pas Cap de me cliquer dessus !!?", color: "bg-vertLight"}, 
        { message: "Ah ouais t'es vraiment chaud toi !!!", color: "bg-vertDark"}, 
        { message: "Je te regarde toi, ô humain, t'agiter en vain ! ", color: "bg-blueDark"}, 
        { message: "Tu cherches la fight ?!", color: "bg-sable"}, 
        { message: "Arrete de m'irriter le clic !! ", color: "bg-prune"}, 
        { message: "Si tu embauches ma créatrice, tu seras bénie pour 20 générations !!! ", color: "bg-gris"}, 
    ]);

    useEffect(() => { // ce useEffect permet de reinitialiser au remontage du composant la couleur qui se trouve à index 0 soit bg-vertLight
        toggleColorBar(messages[0].color); 
    }, [])


    const [ messageDisplay, setMessageDisplay ] = useState(
        messages[0].message);  //ce state est initialisé au message à index 0 soit "Cap ou pas Cap de me cliquer dessus !!?"
    
    // on dissocie le message et la couleur car comme la couleur va aussi se repercuter dans le footer, il va falloir qu elle soit gérée à partir du store global, et le message peut etre géré en local

    function changeMessage () {  //cette fonction changera le state local setMessageDisplay et le state global toggleColorBar à chaque fois que le messageBar sera cliqué 
        let index = messages.findIndex (elem => elem.message === messageDisplay) // ici on recherche l'index actuel ...
        let newIndex = index + 1 ;  //... pour s'en servir pour creer un nouvel index newIndex

        if (newIndex !== 6) {
            setMessageDisplay (  
                messages[newIndex].message
            )
            
            toggleColorBar (
                messages[newIndex].color
            )
        } else {
            setMessageDisplay (  
                messages[0].message
            )
            
            toggleColorBar (
                messages[0].color
            )
        }
        
    }

    //------------------------------------------------------------------------------------------------------------------------------//




    
    return (
        <div    
            className={` ${ themeActu === "light" ? couleurLight : couleurDark } w-full h-[120px] md:h-[60px]  ${colorBar} mx-auto border-t-4 border-b-4 rounded-sm flex justify-center items-center font-bangers font-medium text-2xl tracking-wide text-center pl-5 pr-5`}
            onClick={changeMessage}>

                {messageDisplay}
        </div>
    )
}