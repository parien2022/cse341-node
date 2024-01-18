const express = require('express');
const contactsController = require('../controllers/contacts');

const router = express.Router();

router.use('/', require('./swagger'));

router.get('/contacts', contactsController.getAll);

router.get('/contacts/:id', contactsController.getSingle);

router.post('/contacts/', contactsController.createContact);

router.put('/contacts/:id', contactsController.updateContact);

router.delete('/contacts/:id', contactsController.deleteContact);


module.exports = router;