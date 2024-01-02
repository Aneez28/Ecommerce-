const express = require('express')
const { getAllcategories, getcategoriesbyId, addCategories, updateCategories, deleteCategories } = require('../controllers/categorycontrollers')
const router = express.Router()

router.get('/', getAllcategories)
router.get('/:categoriesId', getcategoriesbyId)
router.post('/',addCategories)
router.patch('/categoriesID', updateCategories)
router.patch('/categoriesID', deleteCategories)


module.exports = router