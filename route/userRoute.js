const express = require('express')
const route = express.Router()
const User = require('../model/user')
const getUser = require('../middleware/getUser')
const validateUser = require('../middleware/validateUser')
const validateInfoEdit = require('../middleware/validateInforEdit')

// Get ALl

route.get('/',async (req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})
// Get Specific

route.get('/user=:idNum',getUser,(req,res)=>{
    res.json(res.user)
})

// Create New

route.post('/',validateUser,async (req,res)=>{
    const user = new User(res.validated)
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Update Specific
route.patch('/user=:idNum',validateInfoEdit, async(req,res)=>{
    try {
        const updatedInfo = await res.validateInfoEdit.save()
        res.json({updatedInfo,status:"Success"})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
})

// Delete Specific
route.delete('/user=:idNum',getUser,async (req,res)=>{
    try {
        await User.findByIdAndDelete(res.user)
        return res.json({message: "Deleted Successfully"})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

module.exports = route