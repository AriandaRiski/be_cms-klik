const router = require('express').Router();

const {
    testJoin
} = require('./../../controllers/PostCategoryController');

router.get('/', testJoin);

module.exports = router;