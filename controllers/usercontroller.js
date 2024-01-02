const User = require("../models/usermodel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

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


module.exports = {
    addUser
}