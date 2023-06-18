const express = require("express");
const mongoose = require("mongoose");
const Lab = mongoose.model("Lab");

const router = express.Router();

router.post("/api/lab", async (req, res) => {
  // add lab on mongodb
  const { title, description, technology, start_date, end_date } = req.body; //get argument

  try {
    const lab = new Lab({
      title,
      description,
      technology,
      start_date,
      end_date,
    }); // create lab document
    await lab.save(); //save the docmuent to mongodb
    res.send("You add lab");
  } catch (err) {
    return res.status(422).send(err.message);
  }
});
router.put("/api/labs", async (req, res) => {
  //update lab on mongodb
  return res.send("updated");
});
router.get("/api/Labs", async (req, res) => {
  try {
    const labs = await Lab.find({}); //return all labs from mongodb
    console.log("/api/getLabs executed");

    return res.send(labs);
  } catch (err) {
    res.status(422).send(err.message);
  }
});
router.delete("/api/labs/:id", async (req, res) => {
  // delete lab on database mongodb
  console.log("executer delete lab");
  console.log(req.params);
  const id = req.params.id;
  try {
    const response = await Lab.deleteOne({ _id: id });
    return res.send(response);
  } catch (err) {
    console.log(err.message);
    return res.status(422).send(err.message);
  }
});

module.exports = router;
