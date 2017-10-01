const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//settup express app
const app = express();

// connect to mongodb
// db url is passed to the connect function which will manage create of
// db if doesn't already exists
mongoose.connect("mongodb://localhost/ninjadb");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//root path of all routes as /apis
app.use("/apis",routes);


//Error handling
app.use(function(err,req,res,next) {
  res.status(422).send({ error : err.message });
});

//listen for requests
app.listen(process.env.port||4000,function() {
  console.log("Listen for requests port[4000]");
});
