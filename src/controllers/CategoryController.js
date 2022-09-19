const categoryModel = require('../models/categoryModel');

const category = async(req, res) => {
    try{
        const category = await categoryModel.getCategory();        
        res.json({category : category});

    } catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const categoryById = async(req, res) => {
    try{
        const id = req.params.id

        const category = await categoryModel.getCategorybyId(id); 
        res.json({category : category});


    } catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const createCategory = async(req, res) => {
    try{
        const categoryData = {
            parentId : req.body.parentId,
            title : req.body.title,
            slug : req.body.slug,            
            content : req.body.content
        }
        const createCategory = await categoryModel.insertCategory(categoryData)        
        res.status(201).json({message :  "berhasil di insert" })        

    }
    catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const editCategory = async (req, res) => {
    try{
        const id = req.params.id;
        const categoryData = {            
            title : req.body.title,
            slug : req.body.slug,            
            content : req.body.content
        }

        await categoryModel.updateCategory(categoryData, id)
        res.status(201).json({message :  "berhasil di update" })                
    }
    catch(error){        
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const deleteCategory = async (req, res) =>{
    try{
        const id = req.params.id;
        await categoryModel.deleteCategory(id)
        res.status(201).json({message :  "data berhasil di HAPUS" })        
        
    }catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

module.exports = {
    category,
    createCategory,
    editCategory,
    deleteCategory,
    categoryById
}