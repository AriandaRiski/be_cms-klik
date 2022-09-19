const router = require('express').Router();

const { 
    category,
    createCategory,
    editCategory, 
    deleteCategory, 
    categoryById
} = require('../../controllers/CategoryController');

router.get('/category', category);
router.post('/insertCategory', createCategory);
router.put('/update/:id', editCategory);
router.delete('/delete/:id', deleteCategory);
router.get('/categoryId/:id', categoryById);

module.exports = router;