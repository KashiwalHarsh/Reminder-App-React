import React, { useContext, useState } from 'react';
import { Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import './popup-btn.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import ThemeContext from '../../../context/ThemeContext';
import ReminderContext from '../../../context/ReminderContext';
import axios from 'axios';


const PopupBTN = () => {

    const [reminderMsg, setReminderMsg] = useState("")
    const [remindAt, setRemindAt] = useState('')
    const { setReminderList } = useContext(ReminderContext)


    const addReminder = () => {
        axios.post("https://reminder-app-server-phi.vercel.app/addReminder" || "http://localhost:5000/addReminder", { reminderMsg, remindAt })
            .then(res => setReminderList(res.data))
        setReminderMsg("")
        setRemindAt()
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { darkTheme } = useContext(ThemeContext)

    const darkStyles = {
        input: { color: '#fff' },
        label: { color: '#fff' },
        svg: { color: '#fff' },
        "& label.Mui-focused": { color: '#fff' },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white'
            },
        },
    }

    const customfn = () => {
        addReminder()
        handleClose()
    }

    return (
        <div className="reminder-container">
            <div className='add-btn' onClick={handleOpen}>
                <AddIcon
                    className='add-icon'
                    fontSize='large'
                >
                </AddIcon>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="reminder-modal" data-theme={darkTheme && 'dark'}>
                    <h2 id="reminder-modal-title">Remind Me</h2>
                    <textarea className='reminder-input' type='text' cols="40" rows="4" placeholder='Reminder note here...' value={reminderMsg} onChange={e => setReminderMsg(e.target.value)}></textarea>
                    <div className='picker-container'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                value={remindAt}
                                onChange={setRemindAt}

                                label="Date and Time"
                                viewRenderers={{
                                    hours: renderTimeViewClock,
                                    minutes: renderTimeViewClock,
                                    seconds: renderTimeViewClock,
                                }}
                                disablePast
                                slotProps={{ popper: { placement: 'right' } }}
                                sx={darkTheme && darkStyles}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='center-btn'>
                        <div className='submit-btn' onClick={customfn}>Add Reminder</div>
                    </div>
                    <div className='center-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PopupBTN;
