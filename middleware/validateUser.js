const validateUser = async function(req,res,next){
    let user
    try {
        if(req.body.name === null || req.body.name === "" || req.body.password === null || req.body.password === null || req.body.email === null || req.body.email === ""){
            return res.json({message: "All Fields are required!",status: "Data wass not inserted to DB"})
        }else{
            user = {
                name: req.body.name,
                password: req.body.password,
                email: req.body.email
            }
            
        }
    } catch (error) {
        return res.status(422).json({message: "Error Validating"})
    }
    res.validated = user
    next()
}


module.exports = validateUser