const User = require("../models/user")

async function addUser(req, res){
    const newUser = req.body;
    try{
        const user = new User(newUser);
        await user.save();
        res.json({newUser : user})
    }catch(error){
        res.status(400).json(error)
    }
} 

async function logInUser(req, res){
    const {email, password} = req.body
    const tryingUser = await User.findOne({email : email})
    if(!tryingUser){
        res.status(401).json({message : "No hay ningun usuario con ese email"})
    }else{
        const validPass = (password === tryingUser.password)
        if(!validPass){
            res.status(401).json({message : "credenciales inválidas"})
        }else{
            res.status(201).json({message : "credenciales válidas"})
        }
    }
} 

module.exports = {addUser, logInUser}