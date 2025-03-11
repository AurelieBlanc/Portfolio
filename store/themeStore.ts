import { create } from "zustand"; 

interface ThemeStore {
    theme: "light" | "dark", 
    messagesBar: string, 

    toggleTheme: () => void, 
    toggleMessagesBar: () => void, 
}

const useThemeStore = create <ThemeStore> ((set) => ({
    theme : "light", // valeur initiale 
    messagesBar: "vertLight", 

    toggleTheme: () => 
        set((state) => ({
            theme: state.theme === "light" ? "dark": "light", 
        })), 

    toggleMessagesBar: () => 
    {
        set((state) => {
            
        })
    }
})); 

export default useThemeStore 