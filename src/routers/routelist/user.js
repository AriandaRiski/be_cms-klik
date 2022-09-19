const router = require('express').Router();
const {
        getUser,
        getUserById,
        createUser,
        editUser,
        deleteUser
} = require('./../../controllers/UserController');

router.get('/', getUser);
router.get('/:id', getUserById);
router.post('/insertUser', createUser);
router.put('/edit/:id', editUser);
router.delete('/delete/:id', deleteUser);


module.exports = router;