const express = require('express');
const userController = require('../controller/users.js');
const router = express.Router();

router.get('/', userController.getAllUsers);

router.post('/', userController.createNewUser);

router.patch('/:id', userController.updateUserData);

router.delete('/:id', userController.deleteUserData);

module.exports = router;