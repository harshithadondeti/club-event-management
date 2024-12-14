const express=require('express')
const router=express.Router()
const Event=require('../Models/EventModel')

router.post('/',(req,res)=>{
  const newEvent=new Event({
    name:req.body.name,
    time:req.body.time,
    venue:req.body.venue,
    topic:req.body.topic,
    members:req.body.members,
  })
  newEvent.save().then((data)=>{
    res.json(data)
  }).catch((err)=>{
    console.log(err,"unable to post data")
  })

})

router.get('/', async (req,res)=>{
try{
  const data= await Event.find()
  res.status(200).json(data)
}
catch(err){
  console.log(err.message)
  res.status(404).json({error:"cannot fetch data"})
}

})

router.get('/:id', async (req,res)=>{
  try{
    const data= await Event.findById(req.params.id)
    if(data){
      res.status(200).json(data)
    } else{
      res.json({error:"Event is not found"})
    }
 
  }
  catch(err){
    console.log(err.message)
    res.status(404).json({error:"cannot fetch data"})
  }
  
  })

  router.put('/:id', async (req,res)=>{
    const {id}=req.params
    const newdata=req.body
    try{
      const Updateddata= await Event.findByIdAndUpdate(id,{$set: newdata},{new:true})
      if(Updateddata){
        res.status(200).json({success:true,data:Updateddata})
      } else{
        res.json({error:"Unable to update the data"})
      }
   
    }
    catch(err){
      console.log(err.message)
      res.status(404).json({error})
    }
    
    })


    router.delete('/:id', async (req,res)=>{
      try{
        const data= await Event.findByIdAndDelete(req.params.id)
        if(data){
          res.status(200).json(data)
        } else{
          res.json({error:"Event is not found"})
        }
     
      }
      catch(err){
        console.log(err.message)
        res.status(404).json({error})
      }
      
      })

      module.exports=router
