const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post("/",(req,res)=>{
    const newUser= new User({...req.body})
    console.log(newUser)
    newUser.save()
    // .then(user => user.json())
    .then(user=> res.send({user}))
    .catch(err=>res.send(err))
})

// router.get("/",(req, res)=>{
//     User.find()
//     .then(users=>res.status(200).json(users))
//     .catch(err=>res.send(err))
//     )}
router.get("/", (req,res)=>{
    User.find()
    .then(users=>res.status(200).json(users))
    .catch(err=>res.send(err))
})

module.exports= router