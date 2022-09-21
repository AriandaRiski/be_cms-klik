const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const router = require('./src/routers/index');
// const knex = require('./src/config/db');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit : '10mb'}))

app.use(router);

app.listen(port,() =>{
    console.log('server running port' +port)
})