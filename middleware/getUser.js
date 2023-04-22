const User = require('../model/user')
const getUser = async function(req,res,next){
    let user;
    try {
       user = await User.findById(req.params.idNum)
       if(user == null){
        return res.status(404).json({message: "User not found"})
       }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.user = user
    next()
}


module.exports = getUser