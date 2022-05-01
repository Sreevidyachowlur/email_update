const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
var port = process.env.PORT || 3000;

require("./db");

app.use("/User", require("./controller/user-controller"));

app.listen(port, () => {
  console.log(`listening on port 3000,server started..`);
});
