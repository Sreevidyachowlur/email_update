var express = require("express");
var route = express.Router();
const userService = require("../service/user-service");

route.post("/createUser", (req, res) => {
  userService
    .createUser(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

route.get("/getUser", (req, res) => {
  let payload = req.query;
  console.log(payload);
  userService
    .getUser(payload)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

route.get("/getAge", (req, res) => {
  let payload = req.query;
  console.log(payload);
  userService
    .getAge(payload)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

route.get("/pagination", (req, res) => {
  let payload = req.query;
  console.log(payload);
  userService
    .pagination(payload)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = route;
