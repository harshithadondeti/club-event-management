const mongoose =require('mongoose')
require('dotenv').config();
const url= process.env.DB_URL;

module.exports.connect=()=>{
  mongoose.connect(url,console.log("Data base is connected"))
}