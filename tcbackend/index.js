const express = require('express');
const dotenv= require('dotenv');
const connectDB = require('./dbconfig');
dotenv.config();

const PORT= process.env.PORT;
const app= express();
app.use(express.json())//JSON Parser
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello World From Twitter Clone")
})
app.use("/api/user",require('./routes/user_routes'));

//Global Error Handler
app.use((err,req,res,next)=>{
    // console.log("Error",err);
     res.status(500).json({error: 'Something went wrong'})
 })

app.listen(PORT,()=>{
    console.log(`Server is listining on PORT ${PORT}`);
})