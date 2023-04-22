require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true})
const DB = mongoose.connection
DB.on('error',(error)=>console.error(error))
DB.once('open',()=>console.log('Connected to DB'))

const userRouter = require('./route/userRoute')
app.use(express.json())
app.use('/users',userRouter)

app.listen(process.env.PORT,()=>console.log(`Server Running on port ${process.env.PORT}`))