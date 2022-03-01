const express = require('express')
const mongoose  = require('mongoose')
const user = require('../models/user')
const router = express.Router()
const User = require('../models/user')


const db = "mongodb+srv://TEST:TEST@cluster0.hjnfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
router.get('/',function(req,res){
  res.send('from api')
})

mongoose.connect(db, err =>{
  if(err){
    console.log("ERROR" + err)
  }
  else{
    console.log("connected")
  }
})



// register api


router.post('/register',(req,res)=>{

  let userData = req.body
  let user = new User(userData)
  user.save((error,registeruser)=>{
    if(error){
      console.log('error api'+error)
    }
    else{
      res.send({status:200,message:'success',registeruser})
    }
  })
})


// login
router.post('/login',(req,res)=>{
  let userData = req.body
  User.findOne({username:userData.user},(error,user)=>{
    if(error){
      console.log("Error" + error)
    }
    else{
      if(!user){
      res.status(401).send('invalid UserName')
    }
    else if(user.password !== userData.password){
      res.status(401).send('invalid password')
    }
    else{
      res.status(200).send('successfully')
   }
  }
  })
})














module.exports = router

