const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.put('/deactivate/:id', userController.deactivateUser);

module.exports = router;
