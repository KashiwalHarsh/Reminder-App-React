import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import './Main.css';

function App() {

  const [reminderMsg,setReminderMsg] = useState("")
  const [remindAt,setRemindAt] = useState()
  const [reminderList,setReminderList] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/getAllReminders")
    .then(res=>setReminderList(res.data))
  },[])

  const addReminder = () =>{
    axios.post("http://localhost:5000/addReminder",{reminderMsg,remindAt})
    .then(res=>setReminderList(res.data))
    setReminderMsg("")
    setRemindAt()
  }
  const deleteReminder=(id)=>{
    axios.post("http://localhost:5000/deleteReminder",{id})
    .then(res=>setReminderList(res.data))
  }
  return (
    <div className="App">
    {/* {console.log(reminderList)} */}
      <div className="homepage">
        <div className="homepage-header">
            <h1>Remind Me</h1>
            <input type='text' placeholder='Reminder note here...' value={reminderMsg} onChange={e=>setReminderMsg(e.target.value)}></input>
            <DateTimePicker 
              value={remindAt}
              onChange={setRemindAt}
              minDate={new Date()}
              minutePlaceholder="mm"
              hourPlaceholder="hh"
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
            />
            <div className='button' onClick={addReminder}>Add Reminder</div>
        </div>
        <div className="homepage-body">
          {reminderList.map(reminder =>(
            <div className="reminder-card" key={reminder._id}>
              <h2>{reminder.reminderMsg}</h2>
              <h3>Remind me at:</h3>
              <p>{String(new Date(reminder.remindAt.toLocaleString("en-us",{timezone:"Asia/Kolkata"})))}</p>
            <div className="button" onClick={()=>deleteReminder(reminder._id)}>Delete</div>
          </div>
          ))}

          
        </div>
      </div>
    </div>
  );
}

export default App;
