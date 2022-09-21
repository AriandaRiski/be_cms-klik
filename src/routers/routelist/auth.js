const router = require('express').Router();
const {
      getToken
} = require('./../../controllers/auth/AuthController');

router.get('/', getToken);

module.exports = router;