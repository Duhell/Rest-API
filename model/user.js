const mongoose = require('mongoose')

// Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        required: true,
        default: Date.now
    }
})


module.exports = mongoose.model('User',userSchema)