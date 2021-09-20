const mongoose = require("mongoose");

const VolunteerQuerySchema = new mongoose.Schema({
    queryType:{
        type: String,
        required:true,
    },
    subject1:{
        type:String,
    },
    subject2:{
        type:String,
    },
    description:{
        type:String,
        required:true,
    },
    fund:{
        type:Number,
        required:true,
    },
});

module.exports = mongoose.model('volunteerQuery', VolunteerQuerySchema);
