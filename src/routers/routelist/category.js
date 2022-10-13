const router = require('express').Router();
const validation = require('./../../validation/category/category.validation');
const {cekLogin} = require('./../../middleware/Auth');

const { 
    category,
    createCategory,
    editCategory, 
    deleteCategory, 
    categoryById
} = require('../../controllers/CategoryController');

router.get('/', category);
router.post('/insertCategory', cekLogin,validation.valid_category, createCategory);
router.put('/update/:id', cekLogin, validation.valid_category, editCategory);
router.delete('/delete/:id', deleteCategory);
router.get('/categoryId/:id', categoryById);

module.exports = router;