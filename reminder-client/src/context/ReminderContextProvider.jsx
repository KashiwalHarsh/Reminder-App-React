import React, { useState } from 'react'
import ReminderContext from './ReminderContext'

const ReminderContextProvider =({children})=>{
    //using localstorage to store the last theme user selected and rendering the same next time user visits
    const [reminderList,setReminderList] = useState([])

    return(
        <ReminderContext.Provider value={{reminderList,setReminderList}}>
            {children}
        </ReminderContext.Provider>
    )


}

export default ReminderContextProvider