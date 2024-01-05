const Product = require("../models/productmodel");

const getAllproducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products) 
    } catch (error) {
        res.status(500).send("Server Error")
    }
}
const getProductsbyId = async(req, res) => {
    try {
        const products= await Product.findById(req.params.productId).exec();
        res.status(200).json(products)

    } catch (error) {
        res.status(404).send("not found")
    }
}
const addProducts = async(req, res) => {
    try {
        const product = await new Product(req.body);
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        res.status(400).send("Check product fields")
    }
}
const updateProducts = async(req, res) => {
    try {
        const updatedproduct = await Product.findByIdAndUpdate(req.params.productId, req.body , {new:true})
        res.status(201).json(updatedproduct)

    } catch (error) {
        res.status(400).send("product not found")
        
    }
}
const deleteProducts = async(req, res) => {
    try {
       await Product.findByIdAndDelete(req.params.productId)
       res.status(201).send("deleted")
        
    } catch (error) {
       res.status(400).send("product not found")
        
    }
}

module.exports = {
    getAllproducts,
    getProductsbyId,
    addProducts,
    updateProducts,
    deleteProducts
}