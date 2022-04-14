var express = require("express");
var route = express.Router();
const emailService = require("../service/email-service");

route.post("/createEmail", (req, res) => {
  emailService
    .createEmail(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

route.put("/updateEmail/:id", (req, res) => {
  let payload = req.body;
  payload["id"] = req.params.id;
  emailService
    .updateEmail(payload)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = route;
