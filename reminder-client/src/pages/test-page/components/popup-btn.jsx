import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './popup-btn.css';

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
                    <input type='text' placeholder='Reminder note here...'></input>
                    {/* <input type='text' placeholder='Reminder note here...' value={reminderMsg} onChange={e => setReminderMsg(e.target.value)}></input> */}
                    {/* <DateTimePicker
                        value={remindAt}
                        onChange={setRemindAt}
                        minDate={new Date()}
                        minutePlaceholder="mm"
                        hourPlaceholder="hh"
                        dayPlaceholder="DD"
                        monthPlaceholder="MM"
                        yearPlaceholder="YYYY"
                    /> */}
                    <div className='submit-btn'>Add Reminder</div>
                    {/* <div className='submit-btn' onClick={addReminder}>Add Reminder</div> */}
                    <Button onClick={handleClose}>Close</Button>
                </div>
            </Modal>
        </div>
    );
};

export default PopupBTN;
