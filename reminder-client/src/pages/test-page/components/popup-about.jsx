import { Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react'
import './popup-about.css';


const PopupAbout = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="about-container">
            <div onClick={handleOpen}>
                <InfoIcon className='icon' />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="about-modal">
                    <h2>About</h2>
                    <p>
                        Never miss a beat with this WhatsApp Reminder App! This open-source web application allows users to seamlessly schedule reminders for important tasks or events and receive timely alerts directly to their WhatsApp account using the Twilio API.
                    </p>
                    <p>
                        Empowering users with the convenience of receiving timely WhatsApp reminders, this application ensures better task management and helps streamline daily schedules effortlessly, keeping users on track and organized with ease
                    </p>
                    <div className='center-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PopupAbout