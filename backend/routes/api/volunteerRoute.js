const express = require("express");
const router = express.Router();
const ApprovedRequest = require("../../model/approvedvolunteer.js");
const Volunteer = require("../../model/volunteer.js");

router.post("/volunteer/approved", async (req, res) => {
  let volunteer = await Volunteer.findOne({ email: req.body.email });
  let id = volunteer._id;
  let requests = await ApprovedRequest.find({ volunteerId: id });
  try {
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
