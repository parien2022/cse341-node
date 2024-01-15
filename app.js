const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contacts');
const mongodb = require('./db/connection');

const port = process.env.PORT || 8080;
const app = express();

app.use('/', contactRoutes)


mongodb.initDb((err) => {
    if(err){
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Database is listening and Server running on port ${port}`);
        })
    }
})

