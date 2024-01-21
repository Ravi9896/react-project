import React,{useContext,createContext} from "react";

export const ThemeContext = createContext(
    {
        themeMod:"blue ",
        darkMode:()=>{},
        lightMode:()=>{},
    }
)

export const  ThemeProvider= ThemeContext.Provider

export const useTheme= ()=>{
    return(
        useContext(ThemeContext)
    )
}
