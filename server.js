const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express();
const cors = require('cors');
let bodyParser = require("body-parser");
const {MongoClient} = require('mongodb');
const mongoUrl = "mongodb://ass3:2020@assignment3-shard-00-00.3zfwi.mongodb.net:27017,assignment3-shard-00-01.3zfwi.mongodb.net:27017,assignment3-shard-00-02.3zfwi.mongodb.net:27017/freelancer?ssl=true&replicaSet=atlas-7i888h-shard-0&authSource=admin&retryWrites=true&w=majority"

const todoListRouter = require('./api/routes/TodoListRoutes')

try {
    mongoose.connect(mongoUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    });
    
    console.log("Connected DB Successfully")

} catch (e) {
    console.error(e);
}

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(cors())

app.use('/todoLists', todoListRouter)

app.listen(8080)
console.log("Server Running")
