const User = require("../models/usermodel");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const addUser = async(req, res) => {
    try {
        const data = req.body
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        const newUser = new User({
            username : data.username,
            email : data.email,
            password : hash
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(401).send("Check fields")
    }
}

const loginUser = async(req, res) =>{
   
    try {
        const {email,password} = req.body
        const user =  await User.findOne({email: email }) // checking email match on datbase  & passing object to use variable if email in found db
          if (!user){
             return res.status(401).send("email not found")
          }
        const passWord = bcrypt.compareSync(password, user.password); // comparing hash passwords
          if (!passWord){
            return res.status(401).send("Unauthorised access")
          } 
        const token = jwt.sign({email: user.email, username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '1800s' }) //creating token using jwttoken
        res.cookie('token', token,{
           httpOnly : true,       // preventing javascript to access cookie
            maxAge : 60*60*1000    // setting cookie timelimit
        })
        res.send("Login Success")   
    } 
    catch (error) {
         res.status(500).send("Internal server error")
    }
        
 }

  const removeUser = async(req, res) => {
    try {
       await User.findByIdAndDelete(req.params.userid)
       res.status(201).send("deleted")
        
    } catch (error) {
       res.status(400).send("user not found")
        
    }
}
const getUserbyId = async(req, res) => {
    try {
        const user= await User.findById(req.params.productId).exec();
        res.status(200).json(user)

    } catch (error) {
        res.status(404).send("not found")
    }
}   

module.exports = {
    addUser,
    loginUser,
    removeUser
}