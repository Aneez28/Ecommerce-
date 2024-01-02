const express = require('express')
const { addUser } = require('../controllers/usercontroller')
const router = express.Router()


  
router.post('/', addUser) // add user

  



module.exports = router