const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const Volunteer = require('../../models/volunteerform');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/volunteer/register',
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { 
        name,
        email,
        password,
        age,
        Address,
        Pincode,
        Phone,
        BloodGroup,
        Profession,
        Interests,
        interestDesc,
        Area,
        Work
     } = req.body;

    try {
      let volunteer = await Volunteer.findOne({ email });

      if (volunteer) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

       volunteer= new Volunteer({
         name,
         email,
        password,
        age,
        Address,
        Pincode,
        Phone,
        BloodGroup,
        Profession,
        Interests,
        interestDesc,
        Area,
        Work
      });

      const salt = await bcrypt.genSalt(10);

      volunteer.password = await bcrypt.hash(password, salt);

      await volunteer.save();

      const payload = {
        volunteer: {
          id: volunteer.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;