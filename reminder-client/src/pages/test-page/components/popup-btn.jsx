import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import './popup-btn.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const PopupBTN = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                <div className="reminder-modal">
                    <h2 id="reminder-modal-title">Remind Me</h2>
                    <textarea className='reminder-input' type='text' cols="40" rows="4"  placeholder='Reminder note here...'></textarea>
                    {/* <input type='text' placeholder='Reminder note here...' value={reminderMsg} onChange={e => setReminderMsg(e.target.value)}></input> */}
                    {/* <DateTimePicker
                        value={remindAt}
                        onChange={setRemindAt}
                        minDate={new Date()}
                    /> */}
                    <div className='picker-container'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Date and Time"
                            viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                            }}
                            disablePast

                        // value={value}
                        // onChange={(newValue) => setValue(newValue)}
                        />
                    </LocalizationProvider>
                    </div>
                    <div className='center-btn'>
                        <div className='submit-btn'>Add Reminder</div>
                    </div>
                    {/* <div className='submit-btn' onClick={addReminder}>Add Reminder</div> */}
                    <div className='center-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PopupBTN;
