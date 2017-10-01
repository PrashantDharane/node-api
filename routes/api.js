const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const Ninja = require('../schemas/ninja');



routes.get("/ninjas",function(req,res) {
  res.send({type : "GET"})
});


routes.post("/ninjas",function(req,res,next) {
  // var ninja = new Ninja(req.body);
  // ninja.save();
  //
  // res.send({
  //   requestPayload : req.body
  // });
  //or
  Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
  }).catch(next);
});

routes.delete("/ninjas/:id",function(req,res,next) {
  var idToDelete = req.params.id;
  Ninja.findByIdAndRemove({ _id: idToDelete }).then(function(ninja) {
    res.send(ninja);
  }).catch(function(err) {
    res.status(422).send(err);
  });
})


module.exports = routes;
