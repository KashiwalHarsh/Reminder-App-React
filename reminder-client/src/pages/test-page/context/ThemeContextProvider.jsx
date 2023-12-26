import React,{useState} from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextProvider =({children})=>{
    const [darkTheme,setDarkTheme] = useState(true)

    return(
        <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}

export default ThemeContextProvider