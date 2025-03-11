import { create } from "zustand"; 

interface ThemeStore {
    theme: "light" | "dark", 
    colorBar: string, 

    toggleTheme: () => void, 
    toggleColorBar: (newColor: string) => void, 
}

const useThemeStore = create <ThemeStore> ((set) => ({
    theme : "dark", // valeur initiale 
    colorBar: "bg-vertLight", 

    toggleTheme: () => 
        set((state) => ({
            theme: state.theme === "light" ? "dark": "light", 
        })), 

    toggleColorBar: (newColor: string) =>
        set (() => ({
            colorBar: newColor
        }))
    
})); 

export default useThemeStore 