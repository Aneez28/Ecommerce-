const User = require("../models/usermodel");

const addUser = async(req, res) => {
    try {
        const newUser = await new User(req.body);
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(401).send("Check fields")
    }
}

module.exports = {
    addUser
}