import { create } from "zustand"; // on importe create de zustand

interface ThemeStore { // on type les constantes et les fonctions
    theme: "light" | "dark", 
    colorBar: string, 

    toggleTheme: () => void, 
    toggleColorBar: (newColor: string) => void, 
}

const getStoredTheme = (): "light" | "dark" => {  // typage qui signifie que la fonction doit retourner soit "light", soit "dark"
    if (typeof window !== "undefined") { // on s'assure qu'on est coté front et que l'on n'essaie pas d'acceder à localStorage coté serveur, l'objet window est un objet global du navigateur
        return (localStorage.getItem("theme") as "light" | "dark" || "light");  // on cherche sil ya une propriété "thème" stockée dans le local Storage, si ce n'est pes le cas, localStorage.getItem("theme") retournera "null" ; ici on forcera le type soit par light, soit par dark et si la valeur retournée est null, on forcera la valeur par light ; on aura donc toujours light ou dark comme retour 
    }

    return "light"; 
}


const useThemeStore = create <ThemeStore> ((set) => ({
    theme : getStoredTheme(),   // valeur initiale , celle stockée dans le localStorage (donc light si encore rien stocké, car cette fonction retournera light s'il n y a rien dans le localStorage sous thème); 
    colorBar: "bg-vertLight", // valeur initiale stockée pour la couleur du messageBar

    toggleTheme: () => // cette fonction permettra de switcher de thème dark ou light
        set((state) => {
            const newTheme = state.theme === "light" ? "dark" : "light" ; 
            localStorage.setItem("theme", newTheme); // on crée un localStorage pour enregistrer la valeur du thème (dans la propriété thème)
            return { theme: newTheme }
        }), 

    toggleColorBar: (newColor: string) => // fonction créee pour switcher de couleurs dans la messagesBar, et que cette couleur puisse se répercuter dans la barre du footer
        set (() => ({
            colorBar: newColor
        }))
    
})); 

export default useThemeStore; 