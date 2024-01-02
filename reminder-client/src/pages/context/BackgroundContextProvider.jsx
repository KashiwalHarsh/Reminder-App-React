import React from 'react'
import BackgroundContext from './BackgroundContext'
import useLocalStorage from 'use-local-storage'

const BackgroundContextProvider =({children})=>{
    //using localstorage to store the last theme user selected and rendering the same next time user visits
    const [background,setBackground] = useLocalStorage('background','Forest')

    return(
        <BackgroundContext.Provider value={{background,setBackground}}>
            {children}
        </BackgroundContext.Provider>
    )


}

export default BackgroundContextProvider