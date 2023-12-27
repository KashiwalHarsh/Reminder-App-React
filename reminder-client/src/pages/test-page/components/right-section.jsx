import './right-section.css';
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ThemeContext from '../context/ThemeContext';
import BackgroundContext from '../context/BackgroundContext';



const RightSection = () => {

  const {darkTheme} = useContext(ThemeContext)
  const {background} = useContext(BackgroundContext)


  return (
    <div style={{backgroundImage: `linear-gradient(#00000094,#00000094),url(https://source.unsplash.com/random/1920x1080/?${background})`}} className='right-section'  data-theme={darkTheme&&'dark'}>
            <div className="reminder-card">
              <h2>Reminder Note Demo that complete this work or call someone and check mail</h2>
              <h3>Remind me at : </h3>
              <span> Time to be displayed</span>
              <h3>Reminder Status : </h3>
              <span style={{color:"orange",fontWeight:'bold'}}> Pending</span>
              <div className="button"><DeleteIcon className='delete-icon'/>&nbsp; Delete</div>
            </div>
            <div className="reminder-card">
              <h2>Check whatsapp and instagram scroll for 15 minutes</h2>
              <h3>Remind me at : </h3>
              <span> Time to be displayed</span>
              <h3>Reminder Status : </h3>
              <span style={{color:"yellowgreen",fontWeight:'bold'}}> Sent</span>
              <div className="button"><DeleteIcon className='delete-icon'/>&nbsp; Delete</div>
            </div>
            <div className="reminder-card">
              <h2>Reminder Note Demo that complete this work or call someone and check mail</h2>
              <h3>Remind me at : </h3>
              <span> Time to be displayed</span>
              <h3>Reminder Status : </h3>
              <span style={{color:"yellowgreen",fontWeight:'bold'}}> Sent</span>
              <div className="button"><DeleteIcon className='delete-icon'/>&nbsp; Delete</div>
            </div>
    </div>
  )
}

export default RightSection