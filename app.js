const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const contactRoutes = require('./routes/contacts');

const port = process.env.PORT || 8080;
const app = express();

app.use('/contacts', contactRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})