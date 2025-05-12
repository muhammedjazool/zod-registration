import { json } from 'body-parser';
import express from 'express';
import { Router } from 'express';
import User from '../models/user.model'


const router=Router()

const path=require('path');

const app = express();




app.use(express.json());


router.get("/register",(req,res)=>{
   res.sendFile(path.join(__dirname,"../../public/index.html")) 
})


router.post("/register",async(req,res)=>{
     try{  
     const {username,email,phone,age,password}= req.body
     const newUser= new User({username,email,phone,age,password})
     await newUser.save()
     console.log('User registered:', newUser);
     res.send('registration successful')
     }
     catch(err){
          console.log("error",err)}
})


export default router