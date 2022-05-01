const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./db");

app.use("/User", require("./controller/user-controller"));

app.listen(3000 || process.env.PORT, () => {
  console.log(`listening on port 3000,server started..`);
});
