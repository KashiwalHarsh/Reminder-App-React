import React from 'react'
import ThemeContext from './ThemeContext'
import useLocalStorage from 'use-local-storage'

const ThemeContextProvider =({children})=>{
    //using localstorage to store the last theme user selected and rendering the same next time user visits
    const [darkTheme,setDarkTheme] = useLocalStorage('darkTheme',false)

    return(
        <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}

export default ThemeContextProvider