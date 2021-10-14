const express = require('express')
const router = express.Router()
 const User = require("../blog/User")
const Blog = require('../blog/blog')


//REGISTER
router.post('/', async(req,res)=>{
    try{
        const  newUser =new User({

            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })

        const user = await  newUser.save()
        res.status(200)
    }
catch(err){
    res.status(500).send('Could not connect to server.')

}
    
    

     
})