const mongoose = require('mongoose')
  

const userSchema = new mongoose.Schema({

        name:{
            required:true,
            type:string
        }

},{timestamps:true})

module.exports= mongoose.model('User', userSchema);