const express=require('express')
const app=express()
const cors=require('cors')
const EventRoutes=require('./Routes/EventRoutes.js')

const {connect} =require('./db.js')

app.use(cors())
app.use(express.json())
app.use("/api/event",EventRoutes)
connect()


app.get('/',(req,res)=>{
  res.send("this is home page")
})


app.listen(3000,()=>{
  console.log('listening to port 3000')
})
