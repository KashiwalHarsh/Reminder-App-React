//Whatsapp Reminding Functionality
// use pen paper to devise the functionality so that setInveral gets cleared only run the set interval when remidners are these else not
const interval = setInterval(async () => {
    try {
        const reminderList = await Reminder.find({ isReminded: false }); // Fetch only unremined reminders
        // if (reminderList.length === 0) {
        //     // clearInterval(interval); // If there are no more unremined reminders, stop the interval
        //     // console.log('No pending reminders.');
        //     // return;
        //     // console loging everyminute causing memory leak issue - MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit
        // }
        //work on this function to optimize it, it should clearInterval when no reminder and only run when there is reminder
        // do the smart optimization, if reminders are present then only scan every minute
        // else clear intervals and save memeory

        const now = new Date();
        for (const reminder of reminderList) {
            if (new Date(reminder.remindAt) - now < 0) {
                await Reminder.findByIdAndUpdate(reminder._id, { isReminded: true }); // Update reminder to mark as reminded

                const accountSid = process.env.ACCOUNT_SID;
                const authToken = process.env.AUTH_TOKEN;
                const client = require('twilio')(accountSid, authToken);

                client.messages
                .create({
                    body: reminder.reminderMsg,
                    from: 'whatsapp:+14155238886',
                    to: 'whatsapp:+919557195550'
                })
                console.log("Message Sent : ",reminder.reminderMsg)
                // .then(message => console.log(message.sid))
                // .done();
            }
        }
    } catch (err) {
        console.error('Error:', err);
    }
}, 60000);