// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const path = require('path');

// app.use(express.json());
// app.use(express.static(path.join(__dirname, './frontend/build')));
// app.use('/api',require('./api'));
// app.get('/*', (req,res) => {
//     res.sendFile(path.join(__dirname, './frontend/build/index.html'));
// });

// app.listen(port, () => {
//     console.log(`App started at http://localhost:${port}`)
// });

const express = require('express')
const mongoose = require('mongoose')
const routerIndex = require("./api/routes/getProject");
const path = require('path');

const app = express();
const cors = require('cors');
let bodyParser = require("body-parser");
const {MongoClient} = require('mongodb');
const projectRoute = require('./api/routes/getProject')
const mongoUrl = "mongodb://ass3:2020@assignment3-shard-00-00.3zfwi.mongodb.net:27017,assignment3-shard-00-01.3zfwi.mongodb.net:27017,assignment3-shard-00-02.3zfwi.mongodb.net:27017/freelancer?ssl=true&replicaSet=atlas-7i888h-shard-0&authSource=admin&retryWrites=true&w=majority"


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

app.use('/getProject',routerIndex);
// app.get('/generatebill', (req, res) =>{
//     message = '';
//     console.log("enterd");
//     try{
//        const projection = { "_id": 0, "name": 1 };
//        const Clients = client.db('freelancer').collection('clients').find().project(projection).then((data) =>{
//             console.log(data)   
//             res.send(data)
//        });
//        //Clients.forEach(console.dir);
//     }catch(e){
//         console.log(e)
//     }
   
    // if(Clients)
    //     {   message = "Succesfull! Your account has been created.";
    //         return Clients
    //     }
    //     else
    //     {
    //         console.log(error)
    //         return "Error"
    //     }    
//});//call for registration page

//Middleware
app.listen(3000)
console.log("Server Running")
