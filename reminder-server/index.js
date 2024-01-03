require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//mongodb Atlas
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
const userSchema = new mongoose.Schema(
    {
        name:{type:String},
        email:{type:String},
        password:{type:String},
    }
)

const Reminder = new mongoose.model("reminder",reminderSchema)
const User = new mongoose.model("user",userSchema)

let reminderTimeout = null;
async function checkReminders(){
    try {
        console.log("started checking...")
        var reminderList = await Reminder.find({ isReminded: false });
        

        const now = new Date();
        for (const reminder of reminderList) {
            if (new Date(reminder.remindAt) - now < 0) {
                await Reminder.findByIdAndUpdate(reminder._id, { isReminded: true });

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
            }
        }
    } catch (err) {
        console.error('Error:', err);
    }finally {
        if (reminderList.length === 0) {
            console.log('No pending reminders.');
            clearTimeout(reminderTimeout);
            return;
        }
        else{
            if (reminderTimeout) {
                clearTimeout(reminderTimeout); // Clear the previous timeout if exists
            }
            reminderTimeout = setTimeout(checkReminders, 60000);
        }
    }
}


//APIs- Login/Register
app.post("/register", async (req,res)=>{
    const {name,email,password} = req.body;

    const userfound = await User.findOne({email:email})
    if(userfound ){
        res.status(200).json({message:"User Already Exist"})
    }else{
        const user = new User({
            name,
            email,
            password
        })
        try{
            user.save();
            res.status(200).json({message:"Succesfully Registered. Please Login Now!"})
        }catch(err){
            res.status(500).json(err)
        }
    }
    
})
app.post("/login", async (req,res)=>{
    const {email,password} = req.body;

    const userfound = await User.findOne({email:email})

    if(userfound){
        if(password===userfound.password){
            res.status(200).json({message:"Login Successful",userfound:userfound})
        }else{
            res.status(200).json({message:"Password Didn't Match"})
        }
    }else{
        res.status(200).json({message:"User Not Registered"})
    }
})


//APIs- Reminder
app.get("/getAllReminders", async (req,res)=>{

    try{
        const reminderList = await Reminder.find()
        checkReminders();
        
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
        const reminderList = await Reminder.find()
        if (reminderList.length === 1) {
            checkReminders();
        }
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
    console.log("Server is up and running on 5000")
})

