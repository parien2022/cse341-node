const mongodb = require('../db/connection')
const ObjectId = require('mongodb').ObjectId

const getAll = async (req, res) => {
  const queryResult = await mongodb
    .getDataBase()
    .db('contacts')
    .collection('contacts')
    .find()
  queryResult.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(contacts)
  })
}

const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id)
  const queryResult = await mongodb
    .getDataBase()
    .db('contacts')
    .collection('contacts')
    .find({ _id: contactId })
  queryResult.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(contacts[0])
  })
}

const createContact = async (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
}
  const response = await mongodb
    .getDataBase()
    .db('contacts')
    .collection('contacts')
    .insertOne(user);

  if (response.acknowledged) {
    res
    .status(200).json({_id: response.insertedId})
    .send();
  } else {
    res.status(500).json(response.error || 'Some error ocurred while creating the user');
  }
}

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id)
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
}

  const response = await mongodb
    .getDataBase()
    .db('contacts')
    .collection('contacts')
    .replaceOne({ _id: contactId }, user)
  
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error ocurred while updating the user');
    }
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id)

  const response = await mongodb
    .getDataBase()
    .db('contacts')
    .collection('contacts')
    .deleteOne({ _id: contactId })

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error ocurred while updating the user');
    }
}

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact }
