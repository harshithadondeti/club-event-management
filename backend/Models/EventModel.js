const mongoose=require('mongoose')

const EventSchema= new mongoose.Schema({

  name:String,
  time:String,
  venue:String,
  topic:String,
  members:String,
  createAt:{
    type:Date,
    default:()=>Date.now()
  }

})

module.exports=mongoose.model('Events',EventSchema)