import './Test.css';
import React,{useState,useEffect} from 'react';
// import axios from 'axios';
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
      <PopupBTN/>
    </div>
  );
}

export default App;
