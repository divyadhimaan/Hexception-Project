const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    age:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },

    Pincode:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    BloodGroup:{
        type:String,
        required:true
    },
    Profession:{
        type:String,
        required:true
    },
    Interests:{
        type:String,
        required:true
    },
    interestDesc:{
        type:String,
        required:true
    },
    Area:{
        type:String,
        required:true
    },
    Work:{
        type:String,
        required:true

    },
     date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = mongoose.model('volunteer', VolunteerSchema);
  