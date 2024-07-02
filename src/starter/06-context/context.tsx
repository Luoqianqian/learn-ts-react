import { createContext, useContext, useState } from "react";

type themeType = 'light' | 'dark' | 'system';

type themeProviderType = {
    theme: themeType,
    setTheme: (theme: themeType) => void
}

const themeProviderContext = createContext<themeProviderType | undefined>(undefined)

type propsType = {
    defaultTheme?: themeType,
    children: React.ReactNode
}

export function ThemeProvider({defaultTheme = 'light', children}: propsType) {
    const [theme, setTheme] = useState<themeType>(defaultTheme)
    return (
        <themeProviderContext.Provider value={{theme, setTheme}}>
            {children}
        </themeProviderContext.Provider>
    )
}

export const useTheme =  (): themeProviderType => {
    const themeContext = useContext(themeProviderContext);
    if(themeContext === undefined) {
        throw new Error('context error')
    }
    return themeContext;
}
