var express = require("express");
var router = express.Router();
const fs = require("fs");
const { format } = require("date-fns");
const Product = require("./models/product");
const Category = require("./models/category");
const User = require("./models/user");
const jwt = require("jsonwebtoken");

const { requireAuth } = require("./auth/authMiddleware");

// //----------------------------------

// router.get('/', function (req, res, next) {
// 	res.render('index', { title: 'Express' });
// });

// router.get('/set-cookies', (req, res) => {
// 	res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
// 	res.send('you got the cookies');
// });

// router.get('/read-cookies', (req, res) => {
// 	const cookies = req.cookies;
// 	console.log(cookies);

// 	res.json(cookies);
// });

// router.get('/auth-page', requireAuth, (req, res) => {
// 	const authUser = jwt.verify(req.cookies.jwt, 'long secret');
// 	if (authUser.email) {
// 		res.render('checkAuthPage', { message: authUser.email });
// 	} else {
// 		res.redirect('/login');
// 	}
// });

// //------------------------------------------------

// // USER -----------------------------------------------------
// router.get('/userlist', async (req, res) => {
// 	let allUser = [];
// 	if (req.query.searchText) {
// 		const text = req.query.searchText;
// 		allUser = await User.find({
// 			$or: [{ firstName: { $regex: text, $options: 'i' } }, { lastName: { $regex: text, $options: 'i' } }],
// 		});
// 		console.log(allUser);
// 	} else {
// 		allUser = await User.find({});
// 	}
// 	const users = allUser.map((item) => {
// 		let date = format(new Date(item.dob), 'MM/dd/yyyy');
// 		return { ...item._doc, dob: date };
// 	});
// 	res.render('tableUsers', { users: users });
// });
// //----------------------------------

// // CATEGORY -----------------------------
// router.get('/categories', async (req, res) => {
// 	const result = await Category.find({});
// 	res.render('tableCategory', { categories: result });
// });
// //----------------------------------

// // LOGIN ---------------------------
// router.get('/login', (req, res) => {
// 	res.render('userLogin');
// });

// router.get('/logout', (req, res) => {
// 	res.cookie('jwt', '', { maxAge: 1 });
// 	res.redirect('/');
// });

// router.get('/register', (req, res) => {
// 	res.render('register');
// });

// //----------------------------------

// // PRODUCT ------------------------------

// router.get('/products', async (req, res) => {
// 	const result = await Product.find({ name: { $regex: req.query.data_keyword || '', $options: 'i' } }).limit(
// 		parseInt(req.query.data_length) || 2
// 	);
// 	return res.render('tableProduct', { products: result });
// });

// router.get('/product/create', async (req, res) => {
// 	res.render('productCreate');
// });

// router.get('/product/:id', async (req, res) => {
// 	const product = await Product.findById(req.params.id);

// 	res.render('productDetails', { product: product });
// });

module.exports = router;
