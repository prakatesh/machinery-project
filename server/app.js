var express = require("express");
var app = express();

require("./connect");

app.listen(8000, () => {
  console.log("Port is listening on 8000");
});
