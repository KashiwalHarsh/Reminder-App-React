import './Test.css';
import React,{useState,useEffect} from 'react';
// import axios from 'axios';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupIcon from '@mui/icons-material/Backup';
import Person2Icon from '@mui/icons-material/Person2';
import PopupBTN from './components/popup-btn';

function App() {

  // const [reminderMsg,setReminderMsg] = useState("")
  // const [remindAt,setRemindAt] = useState()
  // const [reminderList,setReminderList] = useState([])

  // useEffect(()=>{
  //   axios.get("http://localhost:5000/getAllReminders")
  //   .then(res=>setReminderList(res.data))
  // },[])

  // const addReminder = () =>{
  //   axios.post("http://localhost:5000/addReminder",{reminderMsg,remindAt})
  //   .then(res=>setReminderList(res.data))
  //   setReminderMsg("")
  //   setRemindAt()
  // }
  // const deleteReminder=(id)=>{
  //   axios.post("http://localhost:5000/deleteReminder",{id})
  //   .then(res=>setReminderList(res.data))
  // }
  return (
    <div className='parent'>
      <div className='left-section'>
        <div className='upper'>
          <PopupBTN/>
        </div>
        <div className='lower'>
          <div className='icon-container'>
            <GitHubIcon className='nav-icons'/>
            <span>Github</span>
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
      <div className='right-section'>
      </div>
    </div>
  );
}

export default App;
