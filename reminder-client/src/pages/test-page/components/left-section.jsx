import './left-section.css';
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupIcon from '@mui/icons-material/Backup';
import Person2Icon from '@mui/icons-material/Person2';
import PopupBTN from './popup-btn';

const LeftSection = () => {
  return (
    <div className='left-section'>
        <div className='upper'>
          <PopupBTN/>
        </div>
        <div className='lower'>
          <div className='icon-container'>
            <GitHubIcon className='nav-icons'/>
            <span>Contribute</span>
          </div>
          <div className='icon-container'>
            <AccessibilityIcon className='nav-icons' />
            <span>Help</span>
          </div>
          <div className='icon-container'>
            <DarkModeIcon className='nav-icons'/>
            <span>Dark Mode</span>
          </div>
          <div className='icon-container'>
            <SettingsIcon className='nav-icons'/>
            <span>Setting</span>
          </div>
          <div className='icon-container'>
            <BackupIcon className='nav-icons'/>
            <span>Backup</span>
          </div>
          <div className='icon-container'>
            <Person2Icon className='nav-icons'/>
            <span>Profile</span>
          </div>
        </div>
      </div>
  )
}

export default LeftSection