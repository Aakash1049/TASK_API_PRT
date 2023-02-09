const express=require("express")
const app=  express()
const mongoose= require("mongoose")

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/TASK_API_TEST",()=>{
    console.log("Connected to database")
})

const tasks=require("./routes/task")
app.use(tasks)

app.listen(5000,()=>{
    console.log("server running")
})