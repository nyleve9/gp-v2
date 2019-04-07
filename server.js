const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

const API_PORT = 3001;
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest";




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nyleve9:<password>@jobverse-cluster-ow6iv.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(collection);
  client.close();
});





// // connects our back end code with the database
// mongoose.connect(
//   dbRoute,
//   { useNewUrlParser: true }
// );

// let db = mongoose.connection;

// db.once("open", () => console.log("connected to the database"));

// // checks if connection with the database is successful
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// router.get("/getData", (req, res) => {
//   Data.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });






//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//Route setup
// app.get('/', (req, res) => {
//   res.send('Welcome to the root route!');
// })

//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//Start server
app.listen(port, (req, res) => {
  console.log(`Server now listening on port: ${port}`)
});