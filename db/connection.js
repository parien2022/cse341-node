const dotenv = require('dotenv')
dotenv.config()

const MongoClient = require('mongodb').MongoClient

let database

const initDb = (callback) => {
  if (database) {
    console.log('Database is already initialized!')
    return callback(null, database)
  }

  MongoClient.connect(process.env.MONGO_URI)
    .then((client) => {
      database = client
      callback(null, database)
    })
    .catch((err) => {
      callback(err)
    })
}

const getDataBase = () => {
  if (!database) {
    throw Error('Database not initialized')
  }
  return database
}

module.exports = { initDb, getDataBase }
