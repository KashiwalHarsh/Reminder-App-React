import './Test.css';
import React,{useState,useEffect} from 'react';
// import axios from 'axios';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
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
          <GitHubIcon/>
          <AccessibilityIcon/>
          <DarkModeIcon/>
          <SettingsApplicationsIcon/>
          <BackupIcon/>
          <Person2Icon/>
        </div>
      </div>
      <div className='right-section'>
      </div>
    </div>
  );
}

export default App;
