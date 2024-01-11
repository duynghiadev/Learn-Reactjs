var express = require("express");
var app = express();

app.get("/testConnection", function(req, res) {
  var status = parseInt(req.query.status, 10);
  var param = req.query.status;
  if (isNaN(status) || status < 100 || status > 1000) {
    res.status(400).send("Your parameter was: " + param);
  } else {
    res.status(status).send("Your parameter was: " + param);
  }
});

app.get("/profileConstructor", function(req, res) {
  var name = req.query.name;
  var surname = req.query.surname;
  var email = req.query.email;
  var filled = 50;
  var age;
  if (!isNaN(req.query.age) && parseInt(req.query.age, 10) > 0) {
    age = parseInt(req.query.age, 10);
  }

  if (!name && !email) {
    res.send(JSON.stringify({ error: "Name and Email is required" }));
  } else if (!name) {
    res.send(JSON.stringify({ error: "Name is required" }));
  } else if (!email) {
    res.send(JSON.stringify({ error: "Email is required" }));
  } else {

    var validator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = validator.test(email);

    if (valid) {
      var profile = {
        name,
        email
      }
      if (surname) {
        filled += 25;
        profile["surname"] = surname;
      }
      if (age) {
        filled += 25;
        profile["age"] = age;
      }

      profile["filled"] = filled;

      res.send(JSON.stringify(profile));
    } else {
      res.send(JSON.stringify({ error: "Email is incorrect" }));
    }
  }
});


app.listen(3000);
