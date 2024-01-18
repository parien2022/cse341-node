const swaggerAutoGen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'
    },
    host: 'localhost:8080',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

swaggerAutoGen(outputFile, endpointsFiles, doc);