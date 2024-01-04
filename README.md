# WhatsApp Reminder App

Live Link ->[https://reminder-app-client.vercel.app/]

Stay on top of your tasks and events effortlessly with the WhatsApp Reminder App! This web application allows users to schedule reminders and receive notifications via WhatsApp using the Twilio API. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), Material UI, and Twilio integration.

## Features

- **Reminder Creation:** Easily add, edit, and delete reminders with a user-friendly interface.
- **Real-Time Notifications:** Implementation includes the utilization of a Cron job mechanism, systematically assessing pending messages or reminders at predetermined intervals, and triggering notifications to receive reminders via WhatsApp at the specified time.
- **Secured Login:** User Login/Logout functionality and persistence by using Local Storage and Session.
- **Dynamic Design:** Built with Material UI for a visually appealing user interface along with customizable UI as per user Preference with Night mode.


## Tech Stack

- **Frontend:** React.js, Material UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API:** Twilio API for WhatsApp

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/whatsapp-reminder-app.git
   cd whatsapp-reminder-app
   ```

2. **Install Dependencies:**
   - Frontend:
     ```bash
     cd client
     npm install
     ```
   - Backend:
     ```bash
     cd server
     npm install
     ```

3. **Set Up Environment Variables:**
   - Create `.env` files for both frontend and backend and include necessary environment variables like MongoDB connection string, Twilio API credentials, etc.

4. **Run the Application:**
   - Frontend:
     ```bash
     cd client
     npm start
     ```
   - Backend:
     ```bash
     cd server
     npm start
     ```

5. **Open in Browser:**
   - Visit `http://localhost:3000` to access the application.

## Usage

1. **Register/Login:** Create an account or log in to start scheduling reminders.
2. **Add Reminders:** Set the date, time, and content for your reminder.
3. **Receive WhatsApp Notifications:** Get notified on WhatsApp at the specified time.

## Contribution

Contributions are welcome! If you have any ideas for improvements or bug fixes, feel free to open an issue or create a pull request.


## Acknowledgements

- [Twilio API Documentation](https://www.twilio.com/docs/whatsapp/api)
- [Material UI Documentation](https://material-ui.com/)
- [MERN Stack](https://www.mongodb.com/mern-stack)
```

Replace `yourusername` with your actual GitHub username in the clone URL. Feel free to modify and add more information as needed to better suit your project and its specifics.
