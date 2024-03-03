require("dotenv").config();
var express = require("express");
const UserLogin = require("./models/userLogin");
var router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("./models/user");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, email) => {
  return jwt.sign({ id, email }, "long secret", {
    expiresIn: maxAge,
  });
};

const handleError = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "That email is already registered !";
    return errors;
  }

  if (err.message === "Incorrect email !") {
    errors.email = "That email is not registered !";
  }

  if (err.message === "Incorrect password !") {
    errors.password = "That password is incorrect !";
  }
  if (err.message.includes("UserLogin validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

// router.post('/signup', async (req, res) => {
// 	const { email, password } = req.body;
// 	try {
// 		const user = await UserLogin.create({ email, password });
// 		const token = createToken(user._id, user.email);
// 		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
// 		res.status(201).json({ user: user._id });
// 	} catch (err) {
// 		console.log(err);
// 		const errors = handleError(err);
// 		res.status(400).json({ errors });
// 	}
// });

// router.post('/login', async (req, res) => {
// 	const { email, password } = req.body;
// 	try {
// 		const user = await UserLogin.login(email, password);
// 		const token = createToken(user._id, user.email);
// 		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
// 		return res.status(200).json({ user: user._id });
// 	} catch (err) {
// 		const errors = handleError(err);
// 		res.status(400).json({ errors });
// 	}
// });

// router.post('/uploadPhoto', async (req, res) => {
// 	const userDetails = req.body;
// 	const avatarFile = req.file;
// 	const { originalname, path: filePath } = avatarFile;
// 	const fs = require('fs');
// 	fs.copyFileSync(filePath, `public-images/${userDetails.id + '-' + originalname}`);
// 	await User.updateOne(
// 		{ _id: userDetails.id },
// 		{ avatar: `${req.headers.origin}/images/${userDetails.id + '-' + originalname}` }
// 	);
// 	res.status(200).json({ status: 'Update completed', statusCode: 200 });
// });

module.exports = router;
