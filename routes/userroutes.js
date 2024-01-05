const express = require('express')
const { addUser, removeUser, loginUser, getUserbyId } = require('../controllers/usercontroller')
const router = express.Router()


  
router.post('/signup', addUser) // add user
router.post('/signin', loginUser) // login user
router.delete('/:userid', removeUser)



module.exports = router