const express = require('express');
const app = express();
const { port } = require('./app/config')
const apiRouter = require('./app/routes/api')
const bodyParser = require('body-parser')
const cors = require('cors')

//MongoDB
require('./app/database/mongoose')

app.use(bodyParser.json());

app.use(cors())

app.use('/api/', apiRouter)

app.listen(port, () => {
    console.log('serwer słucha... http://localhost:' + port)
})