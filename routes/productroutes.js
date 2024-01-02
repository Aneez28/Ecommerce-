const express = require('express')
const { getAllproducts, getProductsbyId, addProducts, updateProducts, deleteProducts } = require('../controllers/productcontrollers')
const router = express.Router()


router.get('/', getAllproducts ) // all products
  
router.get('/:productId', getProductsbyId) // get products by id
  
router.post('/', addProducts) // add products
  
router.patch('/:productId', updateProducts) // edit products
  
router.delete('/:productId', deleteProducts) // delete products


module.exports = router