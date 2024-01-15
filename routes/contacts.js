const express = require('express');
const contactsController = require('../controllers/contacts');

const router = express.Router();

router.get('/contacts', contactsController.getAll);
router.get('/contacts/:id', contactsController.getSingle);

module.exports = router;