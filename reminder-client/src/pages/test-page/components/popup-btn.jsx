import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './popup-btn.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { alignProperty } from '@mui/material/styles/cssUtils';

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
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleOpen}
            >
                Add Reminder
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="reminder-modal">
                    <h2 id="reminder-modal-title">Remind Me</h2>
                    <input className='reminder-input' type='text' placeholder='Reminder note here...'></input>
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
                            border="none"
                            outline="none"
                        // value={value}
                        // onChange={(newValue) => setValue(newValue)}
                        />
                    </LocalizationProvider>
                    </div>
                    <div className='submit-btn'>Add Reminder</div>
                    {/* <div className='submit-btn' onClick={addReminder}>Add Reminder</div> */}
                    <div className='close-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PopupBTN;
