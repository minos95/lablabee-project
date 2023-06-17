require("./models/lab");
const express = require("express"); //import express
const mongoose = require("mongoose"); //import mongoose
const bodyParser = require("body-parser");
const labsRoute = require("./routes/labsRoute");

const app = express();

app.use(bodyParser.json());
app.use(labsRoute);

app.get("/", (req, res) => {
  res.send("hi there");
});

//------------------Connect to mongodb database
const mongoUri =
  "mongodb+srv://amine:amine@cluster0.95zkz.mongodb.net/lablabee?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

//------------Open server port 3001
app.listen(3001, () => {
  console.log("Listening on port 3001");
});
