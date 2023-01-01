const jwt = require('jsonwebtoken')


function authenticateToken(req, res, next){
    const token = req.headers['x-access'];
    if(!token){
        res.status(400).json({message : 'no token'})
    }else{
        jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err)=>{
            if(err){
                res.status(403).json({message: "invalid token"})
            }else{
                next()
            }
        })
    }

}

module.exports = authenticateToken;