//<<<<<<< HEAD

const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");

//const express = require("express");
//const connectDB = require("./config/db");
//const path = require("path");
const normalize = require("normalize-url");
const gravatar = require("gravatar");
const SchoolSchema = require("./models/SchoolQuery.js");
const VolunteerSchema = require("./models/VolunteerQuery.js");
//=======
//const express = require('express');
//const connectDB = require('./config/db');
//const path = require('path');
//>>>>>>> ce7e42ac0bc317b7d7fde110a58846d1179b8860
const app = express();
const config = require("config");
const SECRETKEY = config.get("jwtSecret");
const User = require("./models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const { db } = require("./models/SchoolQuery.js");
const School = require("./models/School.js");

// Connect Database
connectDB();
app.use(cors());

// Init Middleware
app.use(express.json());
app.set("view engine", "ejs");

// Define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api", require("./routes/api/volunteerLogin"));
app.use("/api", require("./routes/api/volunteerRegister"));
app.use("/api", require("./routes/api/schoolLogin"));
app.use("/api", require("./routes/api/schoolRegister"));
app.use("/api", require("./routes/api/schoolDashboard.js"));
//app.use(cors());
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
var fetchRouter = require('./routes/api/resource');
app.use('/', fetchRouter);
const PORT = process.env.PORT || 8000;

app.post("/schools/addRequest", async (req, res) => {
  
    const { queryType, description, fund } = req.body;
    const school = await School.findOne({ email: req.body.email });
    let link = "https://ngo-chat-app.herokuapp.com/";
    let schoolId = school._id;
    let schoolName = school.name;
    let pincode = school.pincode;
    let room = "room" + school.name;

    // console.log(req.body.queryType);'
    const status = "pending";
    try {
      newQuery = new SchoolSchema({
        queryType,
        link,
        room,
        pincode,
        schoolName,
        schoolId,
        description,
        fund,
        status,
      });
      await newQuery.save();
      res.send("ok");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  // else {
  //   const { queryType, description, fund } = req.body;
  //   // console.log(req.body.queryType);
  //   const status = "0";
  //   try {
  //     newQuery = new SchoolSchema({
  //       queryType,
  //       description,
  //       fund,
  //       status,
  //     });
  //     await newQuery.save();
  //     res.send("ok");
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send("Server error");
  //   }
  // }
});

app.post("/admin/school", async (req, res) => {
  try {
    const data = await SchoolSchema.find({ queryType: req.body.type });
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/volunteer/all", async (req, res) => {
  try {
    const data = await VolunteerSchema.find();
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

const getData = async (query) => {
  let qfield = "type";
  let ar = [];
  try {
    await SchoolSchema.find({
      [qfield]: { $regex: new RegExp("^" + query.toLowerCase(), "i") },
    }).then((fields) => {
      fields.forEach((item) => {
        const jbody = {
          queryType: item.queryType,
          subject1: item.subject1,
          subject2: item.subject2,
          description: item.description,
          fund: item.fund,
        };
        ar.push(jbody);
      });
    });
    // console.log(ar);
    return ar;
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

app.post("/admin/query", async (req, res) => {
  try {
    const data = getData(req.body.type);
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.post("/modifyQuery", async (req, res) => {
  const status = req.body.status;
  console.log(status);
  if (status == "approved") {
    // console.log(req.body._id);
    // const x=await SchoolSchema.findById(req.body._id);
    // console.log(x);
    const data = await SchoolSchema.findById(req.body._id);
    console.log(data);
    if (data.queryType != "") {
      // console.log(req.body.queryType);'
      // const status="1";
      //console.log("hi");
      try {
        const { queryType,description, fund, status } =
          data;
        newQuery = new VolunteerSchema({
          queryType,
          description,
          fund,
          status,
        });
        await newQuery.save();
        //await data.remove();
        data.status = "approved";
        res.send("ok");
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
    } else {
      // const{
      //   queryType,description,fund,status
      // }=req.body;
      // console.log(req.body.queryType);
      // const status="1";
      try {
        const { queryType, description, fund, status } = data;
        newQuery = new VolunteerSchema({
          queryType,
          description,
          fund,
          status,
        });
        await newQuery.save();
        await data.remove();
        res.send("ok");
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
    }
  } else if (status == "rejected") {
    const data = await SchoolSchema.findById(req.body._id);
    console.log(data);
    if (data.queryType != "") {
      // console.log(req.body.queryType);'
      // const status="1";
      //console.log("hi");
      try {
        await data.remove();
        res.send("ok");
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
    } else {
      try {
        await data.remove();
        res.send("ok");
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
    }
  }
});

app.post("/admin", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  // console.log(req.body)
  var isAdmin = true;
  User.findOne({ email: email, isAdmin: isAdmin }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.sendStatus(403);
        }
        if (result && isAdmin === true) {
          //  console.log(username);
          token = jwt.sign({ email: email }, SECRETKEY);
          // res.setHeader('Authorization', token);
          res.json({
            message: "login",
            token,
          });
        } else {
          res.json({
            message: "Incorrect userrname or password",
          });
        }
      });
    } else {
      res.json({
        message: "Incorrect userrname or password",
      });
    }
  });
});



app.get('/getQuery',async(req,res)=>{

  console.log(req.body);
  const school = await School.findById(req.body.schoolId)
  res.send(school);

})



app.post("/volunter/filter", async (req, res) => {
  try {
    var ar = [];
    for (let i = -2; i <= 2; i++) {
      const pn = parseInt(req.body.pincode) + i;
      const pin = pn.toString();
      console.log(pin);
      const pincode = { pincode: pin };
      // const pincode=JSON.parse({"pincode": "pin"});
      console.log(pincode);
      await School.find(pincode).then((pin) => {
        pin.forEach((item) => {
          console.log(item);
          ar.push(item);
        });
      });
      console.log(ar);
    }
    res.send(ar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// app.post('/admin', (req, res) => {
//   var email= req.body.email;
//   var password = req.body.password;
//   console.log(req.body)
//   var isAdmin=true;
//   User.findOne({ email: email, isAdmin:isAdmin})
//       .then(user => {
//           if (user) {
//               bcrypt.compare(password, user.password, function (err, result) {
//                   if (err) {
//                       res.sendStatus(403)
//                   }
//                   if (result && isAdmin===true) {
//                       //  console.log(username);
//                       token = jwt.sign({ email: email }, SECRETKEY);
//                       // res.setHeader('Authorization', token);
//                       res.json({
//                           message: 'login',
//                           token
//                       })
//                   } else {
//                       res.json({
//                           message: 'Incorrect userrname or password'
//                       })
//                   }
//               })
//           } else {
//               res.json({
//                   message: 'Incorrect userrname or password'
//               })
//           }
//       })
// })

// app.post('/modifyQuery',async(req,res)=>{
//     const status=req.body.status;
//     console.log(status);
//     if(status=="1")
//     {

// ......................already commented.........
// console.log(req.body._id);
// const x=await SchoolSchema.findById(req.body._id);
// console.log(x);
// ..............................................

// const data=await SchoolSchema.findById(req.body._id);
// console.log(data);
// if(data.queryType=="teaching"){

// ...................already commented........
// console.log(req.body.queryType);'
// const status="1";
//console.log("hi");
// ................................

//  try{
//    const {queryType,subject1,subject2,description,fund,status,}=data;
//   newQuery=new VolunteerSchema({
//     queryType,
//     subject1,
//     subject2,
//     description,
//     fund,
//     status,
//   });
//   await newQuery.save();
//   SchoolSchema.remove(req.body._id)
//    res.send("ok");
// } catch (err) {
//   console.error(err.message);
//   res.status(500).send('Server error');
// }
//   }
//   else{

// ..................already commenetd..............
// const{
//   queryType,description,fund,status
// }=req.body;
// console.log(req.body.queryType);
// const status="1";
// ...................................................

//          try{
//           const {queryType,description,fund,status,}=data;
//           newQuery=new VolunteerSchema({
//             queryType,
//             description,
//             fund,
//             status,
//           });
//           await newQuery.save();
//           SchoolSchema.remove(req.body._id)
//            res.send("ok");
//         } catch (err) {
//           console.error(err.message);
//           res.status(500).send('Server error');
//         }
//         }
//     }
// })

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));