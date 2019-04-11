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
app.use(cors());


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/jobverse";
const client = new MongoClient(url, { useNewUrlParser: true });
client.connect((err, db) => {
  if (err) throw err;
  const nestdb = db.db("jobverse");
  nestdb.collection('hierarchy').aggregate([
    {
      from:'attributes',
      localField: 'name',
      foreignField: 'title', 
      as: 'jobdetails'
    }
  ]).toArray((err, res) => {
    if (err) throw err;
    console.log(JSON.stringify(res))
    db.close();
  });
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
});



// const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://nyleve9:Teach2019!@jobverse-cluster-ow6iv.mongodb.net/test?retryWrites=true";
// // const uri = "mongodb+srv://nyleve9:Teach2019!@jobverse-cluster-ow6iv.mongodb.net/test?authSource=admin";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   if (err) {
//     console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
//   }
//   console.log('A connection was made!');
//   const collection = client.db("jobverse").collection("hierarchy");
//   // perform actions on the collection object

//   // console.log(collection);
//   client.close();
// });


// route to get jobverse data
app.get("/jobverse", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});






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