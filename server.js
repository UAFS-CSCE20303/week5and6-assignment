const express = require("express");
const app = express();
const PORTNO = 3000;

// ** Required Middlewate
// Add here app.use statements

//*** Routes
app.get("/", function (req, res) {
  res.send(`Response from localhost:${PORTNO}/`);
});

app.listen(PORTNO, function () {
  console.log(`Listening on Port: ${PORTNO}`);
});
