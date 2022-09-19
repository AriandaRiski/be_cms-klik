const router = require('express').Router();
const {
        getPost,
        getPostById,
        createPost,
        editPost,
        deletePost
} = require('./../../controllers/PostController');

router.get('/', getPost);
router.get('/:id', getPostById);
router.post('/insertPost', createPost);
router.put('/edit/:id', editPost);
router.delete('/delete/:id', deletePost);


module.exports = router;