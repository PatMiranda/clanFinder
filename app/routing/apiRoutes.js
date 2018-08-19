var friendsData = require("./data/friends");
var express = require("express");
var app = express();
var path = require("path");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  

  app.post("/api/friends", function(req, res) {
   
    var userInput = req.body;
    var userResponse = userInput.class;
      res.json(friendsData);
    
  });
};