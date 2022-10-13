const router = require('express').Router();
const {
        getPost,
        getPostById,
        createPost,
        editPost,
        deletePost
} = require('./../../controllers/PostController');

const {
        getToken,
        getLogin  
} = require('./../../controllers/auth/AuthController');

const {cekLogin} = require('./../../middleware/Auth');

const validation = require('./../../validation/post/post.validation');

router.get('/', getPost);
router.get('/:id', getPostById);
router.post('/insertPost', cekLogin, validation.valid_post ,createPost);
router.put('/edit/:id', cekLogin, validation.valid_post, editPost);
router.delete('/delete/:id', deletePost);


module.exports = router;