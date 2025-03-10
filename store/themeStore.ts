import { create } from "zustand"; 

interface ThemeStore {
    theme: "light" | "dark", 
    toggleTheme: () => void, 
}

const useThemeStore = create <ThemeStore> ((set) => ({
    theme : "light", // valeur initiale 

    toggleTheme: () => 
        set((state) => ({
            theme: state.theme === "light" ? "dark": "light", 
        })), 
})); 

export default useThemeStore 