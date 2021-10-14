const Mongoose = require('mongoose') 
const Schema = Mongoose.Schema

const BlogPost = new Schema({

    title:{
        type:String ,
        required : true

    } , 
    password : {
            type:password , 
            required:true


    },
   body:{
        type:String,
        required: true,
    },
    username:{
        type:String,
        required:true,

    },catagories:{
        type:array,
        required: false,

    }
    



}, {timestamps:true})
  
//code below looks for Blog first para , then connects to DB and changes the BlogPost
const Blog = Mongoose.model('Blog' , BlogPost)


module.exports =Mongoose.model('Blog' , BlogPost)