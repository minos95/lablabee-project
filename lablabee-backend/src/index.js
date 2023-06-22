//this project has been created by rahal amine
//find all route in routes folder
//find all model schema in models folder

require("./models/lab");
const express = require("express"); //import express
const mongoose = require("mongoose"); //import mongoose
const bodyParser = require("body-parser"); //import bodyParser
const labsRoute = require("./routes/labsRoute"); //import labs Route
const cors = require("cors"); //import cors

const app = express();

//to  avoid cors error authorization
app.use(cors());

app.use(bodyParser.json());
app.use(labsRoute);

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

//------------Open server on port 3001
app.listen(3001, () => {
  console.log("Listening on port 3001");
});
