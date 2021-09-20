const router = require("express").Router();
const Request = require("../model/SchoolQuery.js");
const Volunteer = require("../model/volunteerform.js");

// show list of suitable volunteers to admin
router.get("/admin/available/volunteers", async (req, res) => {
  const pincode = Request.pincode;
});
