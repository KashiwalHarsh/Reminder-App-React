import React, { useState } from 'react'
import LoginContext from './LoginContext'
// import useLocalStorage from 'use-local-storage'

const LoginContextProvider =({children})=>{
    //using localstorage to store the last theme user selected and rendering the same next time user visits
    // const [background,setBackground] = useLocalStorage('background','Forest')

    const [user,setLoginUser] = useState({})

    return(
        <LoginContext.Provider value={{user,setLoginUser}}>
            {children}
        </LoginContext.Provider>
    )


}

export default LoginContextProvider