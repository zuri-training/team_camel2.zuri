const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");


//register or signup
exports.createUser = async function (req, res) {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).json("User Already Exist. Please Login");

  const validatePassword = (password) => {
    const re =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
    return re.test(password);
  };
  if (!validatePassword(req.body.password)) {
    return res.status(400).send({
      error:
        "Password must contain at least 8 characters including uppercase, lowercase and special characters",
    });
  }

  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = req.body;
  User.create(
    {
      nameOfOrganisation: user.nameOfOrganisation,
      email: user.email,
      password: hashedPassword,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res
          .status(201)
          .json({ message: "new user created", newUser });
      }
    }
  );
};

//login
exports.loginUser = async function (req, res) {
  //checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("Email is not found");

  //password check
  const validPass = await bcrypt.compareSync(
    req.body.password,
    user.password
  );
  if (!validPass) {
    return res.status(400).json("invalid password");
  } else {
    return res.status(200).json({
      data: user,
    });
  }
};

//forget password 
exports.forgetPassword = async function(req, res) {
  const user = User.findOne({ email : req.email.email }) 
  if(!user) 
  {
   return res.status(400).json("User is not valid");
  } else 
  
    if(req.body.newPassword !== req.body.confirm) 
    {
     return res.status(400).json("Password confirmation not the same");
    } 
    try {
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password, salt);
     const updatePassword = await User.findByIdAndUpdate({_id : user.id}, {
       $set : {password : hashedPassword}
     }, {new : true}) 
     if(!updatePassword) 
     {
       throw new Error("Sorry something went wrong")
     } 
    return res.status(200).json({msg : "Password have been updated"})
    } catch (error) {
      if(error) return res.status(500).json({ msg : error.message})
    }     
} 