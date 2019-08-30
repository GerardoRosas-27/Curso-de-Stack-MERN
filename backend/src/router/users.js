const { Router } = require('express');
const { getUsers, getUser, postUsers, putUser, deleteUser } = require('../controllers/userscontrol');
const router = Router();

router.route('/')
    .get(getUsers)
    .post(postUsers);

router.route('/:id')
    .get(getUser) 
    .put(putUser)
    .delete(deleteUser)
    
module.exports = router;