
const router = require('express').Router();
const {cekLogin} = require('./../middleware/Auth');
const {getToken} = require('./../controllers/auth/AuthController');

const user = require('./routelist/user');
const category = require('./routelist/category');
const post = require('./routelist/post');
const postCategory = require('./routelist/postCategory');

router.use('/auth', getToken);
router.use('/user', user);
router.use('/category', category);
router.use('/post', cekLogin, post);
router.use('/postCategory', postCategory);

router.use('/', (req, res) => {
    res.send('HALOO');
});


module.exports = router;