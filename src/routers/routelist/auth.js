const router = require('express').Router();
const validation  = require('./../../validation/login/login.validation');

const {
      getToken,
      getLogin

} = require('./../../controllers/auth/AuthController');

router.get('/', getToken);
router.post('/login', validation.valid_login, getLogin);


module.exports = router;