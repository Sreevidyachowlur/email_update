const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./db");

app.use("/email", require("./controller/email-controller"));

app.listen(3000, () => {
  console.log(`listening on port 3000,server started..`);
});
