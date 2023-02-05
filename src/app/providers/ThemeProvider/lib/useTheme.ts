import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "./ThemeContext";
import {useContext} from "react";

interface useThemeResult {
    theme: Themes,
    toggleTheme: () => void
}
export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {theme: theme, toggleTheme}
}
