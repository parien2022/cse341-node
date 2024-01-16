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

module.exports = { getAll, getSingle }
