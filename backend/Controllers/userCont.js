var jwt = require("jsonwebtoken");
const User = require("../Model/User")
require("dotenv").config();

exports.signup = ( req,res) => {
     console.log(req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
          return res.status(400).json({
            err: "NOT able to save user in DB"
          });
        }
        res.json({
          name: user.userName,
          password : user.encry_password
        });
      });

}


exports.signin = (req, res) => {
    console.log(req.body);
    const { userName , Password } = req.body;
  
    User.findOne({ userName }, (err, user) => {
        console.log("zzzz",user)
      if (err || !user) {
        return res.status(400).json({
          error: "USER userName does not exists"
        });
      }

  
      //create token
      const token = jwt.sign({ _id: req.body.userName }, process.env.SECRET);
      //put token in cookie
      res.cookie("token", token, { expire: new Date() + 9999 });
  
      //send response to front end
      const { userName, encry_password } = user;
      return res.json({ token, user: { userName, encry_password } });
    });
  };