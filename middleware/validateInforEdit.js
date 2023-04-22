const User = require('../model/user')
const validateInfoEdit = async function(req,res,next){
    let user = await User.findById(req.params.idNum)
    try {
       if(req.body.name != null){
        user['name'] = req.body.name
       }
       if(req.body.email != null){
        user['email'] = req.body.email
       }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.validateInfoEdit = user
    next()
}


module.exports = validateInfoEdit