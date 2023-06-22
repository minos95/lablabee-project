const express = require("express");
const mongoose = require("mongoose");
const Lab = mongoose.model("Lab");

const router = express.Router();

router.post("/api/labs", async (req, res) => {
  // route to add lab on mongodb
  console.log("api add lab executed", req.body);
  //get params from client side
  const { title, description, technology, start_date, end_date } = req.body;
  console.log("type de start_date", typeof start_date);
  console.log("type de title", typeof title);
  try {
    // create lab document
    const lab = new Lab({
      title,
      description,
      technology,
      start_date,
      end_date,
    });
    //save the docmuent to mongodb
    await lab.save();
    res.send(lab);
  } catch (err) {
    //send error to client side
    return res.status(422).send(err.message);
  }
});
router.put("/api/labs/:id", async (req, res) => {
  //update lab on mongodb databse
  //get params from client side
  const { title, description, technology, start_date, end_date } = req.body;
  try {
    //send request  to find and update lab on mongodb databse
    const lab = await Lab.findOneAndUpdate(
      { _id: req.params.id },
      { title, description, technology, start_date, end_date }
    );
    // send response to client side
    return res.send(lab);
  } catch (err) {
    //send error to client side
    return res.status(422).send(err.message);
  }
});
router.get("/api/Labs", async (req, res) => {
  try {
    //return all labs from mongodb
    const labs = await Lab.find({});
    console.log("/api/getLabs executed");
    //send labs to client side
    return res.send(labs);
  } catch (err) {
    //send error to client side
    res.status(422).send(err.message);
  }
});
router.delete("/api/labs/:id", async (req, res) => {
  // delete lab on database mongodb
  console.log("executer delete lab");
  console.log(req.params);
  const id = req.params.id;
  try {
    //filter and delete on database
    const response = await Lab.deleteOne({ _id: id });
    console.log(response);
    //send  response to client side
    return res.send(response);
  } catch (err) {
    console.log(err.message);
    //send error to client side
    return res.status(422).send(err.message);
  }
});

module.exports = router;
