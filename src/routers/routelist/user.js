const router = require('express').Router();
const validation = require('./../../validation/user/user.validation');
const {cekLogin} = require('./../../middleware/Auth');

const {
        getUser,
        getUserById,
        createUser,
        editUser,
        deleteUser
} = require('./../../controllers/UserController');

router.get('/', getUser);
router.get('/:id', getUserById);
router.post('/insertUser', cekLogin, validation.valid_user, createUser);
router.put('/edit/:id', cekLogin, validation.valid_user, editUser);
router.delete('/delete/:id', deleteUser);


module.exports = router;