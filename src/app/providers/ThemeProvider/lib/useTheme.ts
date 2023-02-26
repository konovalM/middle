import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext';

interface useThemeResult {
    theme: Themes,
    toggleTheme: () => void
}
export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    document.body.className = theme;
    const toggleTheme = () => {
        const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };
    return { theme, toggleTheme };
}
