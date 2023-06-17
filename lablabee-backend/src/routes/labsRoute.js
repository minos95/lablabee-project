const express = require("express");
const mongoose = require("mongoose");
const Lab = mongoose.model("Lab");

const router = express.Router();

router.post("api/lab", async (req, res) => {
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
router.put("api/lab", async (req, res) => {
  return res.send("updated");
});
router.get("/");
router.delete("api/lab", async (req, res) => {
  return res.send("/delete");
});

module.exports = router;
