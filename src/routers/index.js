
const router = require('express').Router();
const {cekLogin} = require('./../middleware/Auth');


const user = require('./routelist/user');
const category = require('./routelist/category');
const post = require('./routelist/post');
const postCategory = require('./routelist/postCategory');
const auth = require('./routelist/auth');

router.use('/auth', auth);
router.use('/user', user);
router.use('/post', post);
router.use('/category', cekLogin, category);
router.use('/postCategory', postCategory);

router.use('/', (req, res) => {
    res.send('HALOO');
});

module.exports = router;