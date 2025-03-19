import { create } from "zustand"; 

interface ThemeStore {
    theme: "light" | "dark", 
    colorBar: string, 

    toggleTheme: () => void, 
    toggleColorBar: (newColor: string) => void, 
}

const getStoredTheme = (): "light" | "dark" => {  // typage qui signifie que ka fonction doit retourner soit "light", soit "dark"
    if (typeof window !== "undefined") { // on s'assure qu'on est coté front et que l'on n'essaie pas d'acceder à localStorage coté serveur, l'objet window est un objet global du navigateur
        return (localStorage.getItem("theme") as "light" | "dark" || "light");  // on cherche sil ya une valeur "theme" stocké dans le local Storage, si ce n'est pes le cas, localStorage.getItem("theme") retournera "null" ; ici on forcera le type soit par light, soit par dark et si la valeur retournée est null, on forcera la valeur par light ; on aura donc toujours light ou dark comme retour 
    }

    return "light"; 
}


const useThemeStore = create <ThemeStore> ((set) => ({
    theme : getStoredTheme(),   // valeur initiale , celle stockée dans le localStorage (light si encore rien stocké); 
    colorBar: "bg-vertLight", 

    toggleTheme: () => 
        set((state) => {
            const newTheme = state.theme === "light" ? "dark" : "light" ; 
            localStorage.setItem("theme", newTheme); 
            return { theme: newTheme }
        }), 

    toggleColorBar: (newColor: string) =>
        set (() => ({
            colorBar: newColor
        }))
    
})); 

export default useThemeStore 