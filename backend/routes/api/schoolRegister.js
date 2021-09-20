const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const normalize = require("normalize-url");

const School = require("../../models/School");
const SchoolTeaching = require("../../models/SchoolTeaching");

// @route    POST api/schools
// @desc     Register school
// @access   Public
router.post(
  "/school/register",
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, address, pincode, phone } = req.body;

    try {
      let school = await School.findOne({ email });

      if (school) {
        return res
          .status(400)
          .json({ errors: [{ msg: "School already exists" }] });
      }

      school = new School({
        name,
        email,
        password,
        address,
        pincode,
        phone,
      });

      const salt = await bcrypt.genSalt(10);

      school.password = await bcrypt.hash(password, salt);

      await school.save();

      const payload = {
        school: {
          id: school.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
