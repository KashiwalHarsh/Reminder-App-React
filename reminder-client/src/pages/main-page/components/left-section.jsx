import './left-section.css';
import React, {useContext } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import PopupBTN from './popup-btn';
import PopupAbout from './popup-about';
import PopupSetting from './popup-setting';
import PopupProfile from './popup-profile';
import DarkToggle from './toggle-dark';
import ThemeContext from '../context/ThemeContext';
import PopupBackup from './popup-backup';

const LeftSection = () => {

  const {darkTheme,setDarkTheme}= useContext(ThemeContext)

  const handle = (e)=>{    
    e.preventDefault()
    setDarkTheme(prevState =>(
      !prevState
    ))
  }

  return (
    <div className='left-section' data-theme={darkTheme&&'dark'}>
        <div className='upper'>
          <PopupBTN />
        </div>
        <div className='lower'>
          <div className='icon-container'>
            <a href='https://github.com/KashiwalHarsh/Reminder-App-React' target='_blank' rel='noreferrer'>
              <GitHubIcon className='nav-icons'/>
            </a>
            <span>Contribute</span>
          </div>
          <div className='icon-container'>
              <PopupAbout/>
              <span>About</span>
          </div>
          <div className='icon-container'>
            <DarkToggle 
              handleChange={handle}
            />
            <span>{darkTheme?'Light Mode':'Dark Mode'}</span>
          </div>
          <div className='icon-container'>
              <PopupSetting/>
              <span>Setting</span>
          </div>
          <div className='icon-container'>
              <PopupBackup/>
              <span>Backup</span>
          </div>
          <div className='icon-container'>
              <PopupProfile/>
              <span>Profile</span>
          </div>
        </div>
      </div>
  )
}

export default LeftSection