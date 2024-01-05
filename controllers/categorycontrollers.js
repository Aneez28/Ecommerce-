const Category = require("../models/categorymodel");

const getAllcategories = async(req, res) => {
    try {
       const data = await Category.find({});
       res.status(200).json(data)
    } catch (error) {
        res.status(500).send("Server Error")
    }
}
const getcategoriesbyId = async(req, res) => {
    try {
        const data = await Category.findById(req.params.categoryId).exec();
        res.status(200).json(data)     
    } catch (error) {
        res.status(500).send("Server Error")
    }   
}
const addCategories = async(req, res) => {
    try {
        const data = await new Category(req.body)
        await data.save()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send("Server Error")
    }
    
}
const updateCategories = async(req, res) => {
    try {
      const data = await Category.findByIdAndUpdate(req.params.categoryId, req.body,{new:true} )
      res.status(200).json(data)
    } catch (error) {
        res.status(500).send("Server Error")  
    }
}
const deleteCategories = async(req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.categoryId)
        res.status(201).send("deleted")
    } catch (error) {
        res.status(500).send("Server Error")  
    }
}


module.exports = {
    getAllcategories,
    getcategoriesbyId,
    addCategories,
    updateCategories,
    deleteCategories
}