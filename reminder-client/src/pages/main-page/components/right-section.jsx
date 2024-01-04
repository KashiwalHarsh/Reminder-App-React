import './right-section.css';
import React, { useContext, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ThemeContext from '../../../context/ThemeContext';
import BackgroundContext from '../../../context/BackgroundContext';
import ReminderContext from '../../../context/ReminderContext';
import axios from 'axios';


const RightSection = () => {

  const { darkTheme } = useContext(ThemeContext)
  const { background } = useContext(BackgroundContext)
  const { reminderList, setReminderList } = useContext(ReminderContext)


  useEffect(() => {
    axios.get("https://reminder-app-server-phi.vercel.app/getAllReminders" || "http://localhost:5000/getAllReminders")
      .then(res => setReminderList(res.data))
  }, [setReminderList])

  const deleteReminder = (id) => {
    axios.post("https://reminder-app-server-phi.vercel.app/deleteReminder" || "http://localhost:5000/deleteReminder", { id })
      .then(res => setReminderList(res.data))
  }


  return (
    <div style={{ backgroundImage: `linear-gradient(#00000094,#00000094),url(https://source.unsplash.com/random/1920x1080/?${background})` }} className='right-section' data-theme={darkTheme && 'dark'}>
      <div className="reminder-card">
        <h2>DEMO 1: Reminder Note Demo that complete this work or call someone and check mail</h2>
        <h3>Remind me at : </h3>
        <span> Time to be displayed</span>
        <h3>Reminder Status : </h3>
        <span style={{ color: "orange", fontWeight: 'bold' }}> Pending</span>
        <div className="button"><DeleteIcon className='delete-icon' />&nbsp; Delete</div>
      </div>
      <div className="reminder-card">
        <h2>DEMO 2: Check whatsapp and instagram scroll for 15 minutes</h2>
        <h3>Remind me at : </h3>
        <span> Time to be displayed</span>
        <h3>Reminder Status : </h3>
        <span style={{ color: "yellowgreen", fontWeight: 'bold' }}> Sent</span>
        <div className="button"><DeleteIcon className='delete-icon' />&nbsp; Delete</div>
      </div>
      {reminderList.map(reminder => (
        <div className="reminder-card" key={reminder._id}>
          <h2>{reminder.reminderMsg}</h2>
          <h3>Remind me at : </h3>
          <span> {new Date(reminder.remindAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata', weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', })}</span>
          <br />
          <h3>Reminder Status : </h3>
          <span style={reminder.isReminded ? { color: 'yellowgreen', fontWeight: 'bold' } : { color: 'orange', fontWeight: 'bold' }}>{reminder.isReminded ? " Sent" : " Pending"}</span>
          <div className="button" onClick={() => deleteReminder(reminder._id)}><DeleteIcon className='delete-icon' />&nbsp; Delete</div>
        </div>
      ))}
    </div>
  )
}

export default RightSection