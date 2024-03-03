var express = require("express");
var router = express.Router();
const fs = require("fs");
const Category = require("../models/category");
const Product = require("../models/product");
const User = require("../models/user");
var mongoose = require("mongoose");
const { format } = require("date-fns");
const jwt = require("jsonwebtoken");
const UserLogin = require("../models/userLogin");

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
/* GET users listing. */

router.get("/", async function (req, res) {
  let total = {
    products: 100,
    users: 10,
    categories: 4,
  };

  total.products = await Product.countDocuments({});
  total.categories = await Category.countDocuments({});
  total.users = await User.countDocuments({});
  res.status(200).json(total);
});

router.post("/editProduct", async (req, res) => {
  const id = req.body._id;
  const checkExist = await Product.findById(id);
  if (
    req.body._id === null ||
    req.body._id === undefined ||
    checkExist === null
  ) {
    res.status(404).send({
      status: 404,
      data: "Product do not exist",
    });
    return;
  }
  delete req.body._id;
  await Product.updateOne({ _id: id }, req.body);
  res.status(200).json({
    status: 200,
    data: "Update successfully",
  });
});

router.post("/createProduct", async (req, res) => {
  try {
    await Product.validate({ ...req.body });
  } catch (err) {
    res.status(404).send({
      status: 404,
      data: `Validate fail, check form ${Object.keys(err.errors)} !`,
    });
  }
  let newId = new mongoose.Types.ObjectId().toHexString();
  await Product.create({ _id: newId, ...req.body });
  res.status(200).json("Done");
});

router.delete("/product/:id", async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      await Product.deleteOne({ _id: id });
      return res.status(200).json({ result: "Done" });
    } catch (error) {
      return res.status(404).json(error);
    }
  }
});

router.post("/seedDatabase", async (req, res) => {
  const { password } = req.body;
  if (password !== "cb23Yszx3x6C") {
    return res.status(404).json({ error: "Don't have permission !" });
  } else {
    await User.remove({});
    await Category.remove({});
    await Product.remove({});
    const usersResult = JSON.parse(
      fs.readFileSync("./users.json", "utf8")
    ).body;
    await User.insertMany(usersResult);
    const categoryResult = JSON.parse(
      fs.readFileSync("./categories.json", "utf8")
    ).body;
    await Category.insertMany(categoryResult);
    const productResult = JSON.parse(
      fs.readFileSync("./product.json", "utf8")
    ).body;
    await Product.insertMany(productResult);
    res.status(200).json({
      result: "Seed successfully",
    });
  }
});

//====================================================

router.get("/userlist", async (req, res) => {
  let allUser = [];
  if (req.query.searchText) {
    const text = req.query.searchText;
    allUser = await User.find({
      $or: [
        { firstName: { $regex: text, $options: "i" } },
        { lastName: { $regex: text, $options: "i" } },
      ],
    });
    console.log(allUser);
  } else {
    allUser = await User.find({});
  }
  const users = allUser.map((item) => {
    let date = format(new Date(item.dob), "MM/dd/yyyy");
    return { ...item._doc, dob: date };
  });
  res.status(200).json(users);
});

router.post("/users/uploadPhoto", async (req, res) => {
  const userDetails = req.body;
  console.log(req.body);
  const avatarFile = req.file;
  const { originalname, path: filePath } = avatarFile;
  const fs = require("fs");
  if (fs.existsSync(`public-images/${userDetails.id}.jpg`)) {
    fs.unlinkSync(`public-images/${userDetails.id}.jpg`);
  }
  fs.copyFileSync(filePath, `public-images/${userDetails.id}.jpg`);
  await User.updateOne(
    { _id: userDetails.id },
    {
      avatar: `http://${req.headers.host}/images/${userDetails.id}.jpg`,
    }
  );
  res.status(200).json({ status: "Update completed", status: 200 });
});

//===========================================================

router.get("/categories", async (req, res) => {
  const result = await Category.find({});
  res.status(200).json(result);
});

// PRODUCT ------------------------------

router.get("/products", async (req, res) => {
  const total = await Product.find({
    name: { $regex: req.query.keyword || "", $options: "i" },
  }).countDocuments();
  const items = await Product.find({
    name: { $regex: req.query.keyword || "", $options: "i" },
  })
    .sort({ _id: -1 })
    .skip((req.query.page || 0) * (req.query.pageSize || 0))
    .limit(parseInt(req.query.pageSize) || 2);

  return res.status(200).json({ items, total });
});

router.get("/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json(product);
});

// LOGIN ===========================================================

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserLogin.create({ email, password });
    const token = createToken(user._id, user.email);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user.email, jwt: token });
  } catch (err) {
    console.log(err);
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserLogin.login(email, password);
    const token = createToken(user._id, user.email);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    return res.status(200).json({ user: user.email, jwt: token });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
});

//===========================================================

//===========================================================

module.exports = router;
