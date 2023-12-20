require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Db connected succesfully"))
.catch((err) => console.log(err)
);

const reminderSchema = new mongoose.Schema(
    {
        reminderMsg:{type:String},
        remindAt:{type:String},
        isReminded:{type:Boolean},
    }
)

const Reminder = new mongoose.model("reminder",reminderSchema)

//Whatsapp Reminding Functionality
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




//APIs
app.get("/getAllReminders", async (req,res)=>{

    try{
        const reminderList = await Reminder.find()
        res.status(200).json(reminderList)
    }catch(err){
        // console.log(err)
        res.status(500).json(err)
    }
})
app.post("/addReminder", async (req,res)=>{
    const {reminderMsg,remindAt} = req.body
    const reminder = new Reminder({
        reminderMsg,
        remindAt,
        isReminded:false
    })

    try{
        const savedReminder = await reminder.save()
        // res.status(200).json(savedReminder)
        // console.log(savedReminder)
        try{
            const reminderList = await Reminder.find()
            res.status(200).json(reminderList)
        }catch(err){
            // console.log(err)
            res.status(500).json(err)
        }
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})
app.post("/deleteReminder", async (req,res)=>{
    try{
        await Reminder.findByIdAndDelete(req.body.id)
        // res.status(200).json("Product has been deleted")
        console.log("reminder has been deleted")
        try{
            const reminderList = await Reminder.find()
            res.status(200).json(reminderList)
        }catch(err){
            // console.log(err)
            res.status(500).json(err)
        }
    }catch(err){
        res.status(500).json(err)
    }
})
app.get("/",(req,res)=>{
    res.send("Test message from backend")
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is up and running on 3000")
})

