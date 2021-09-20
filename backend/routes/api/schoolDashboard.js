const express = require("express");
const router = express.Router();
const SchoolQuery = require("../../models/SchoolQuery.js");
const School = require("../../models/School.js");

router.post("/school/dashboard", async (req, res) => {
  let school = await School.findOne({ email: req.body.email });
  let schoolId = school._id;
  try {
    const schoolqueries = await SchoolQuery.find({ schoolId: schoolId });
    res.status(200).json(schoolqueries);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
