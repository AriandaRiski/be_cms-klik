const router = require('express').Router();
const validation = require('./../../validation/category/category.validation');
const { 
    category,
    createCategory,
    editCategory, 
    deleteCategory, 
    categoryById
} = require('../../controllers/CategoryController');

router.get('/category', category);
router.post('/insertCategory', validation.valid_category, createCategory);
router.put('/update/:id', validation.valid_category, editCategory);
router.delete('/delete/:id', deleteCategory);
router.get('/categoryId/:id', categoryById);

module.exports = router;