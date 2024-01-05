const express = require('express')
const { getAllcategories, getcategoriesbyId, addCategories, updateCategories, deleteCategories } = require('../controllers/categorycontrollers')
const router = express.Router()

router.get('/', getAllcategories)
router.get('/:categoryId', getcategoriesbyId)
router.post('/',addCategories)
router.patch('/:categoryId', updateCategories)
router.delete('/:categoryId', deleteCategories)


module.exports = router