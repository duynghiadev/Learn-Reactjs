var express = require('express');
const Category = require('./models/category');
var router = express.Router();
const Product = require('./models/product');
const User = require('./models/user');

router.get('/', async function (req, res) {
	let total = {
		products: 100,
		users: 10,
		categories: 4,
	};

	total.products = await Product.countDocuments({});
	total.categories = await Category.countDocuments({});
	total.users = await User.countDocuments({});
	res.render('admin', { total: total });
});

router.get('/getProduct', async (req, res, next) => {
	const result = await Product.find({})
		.populate('categoryId', ['description', 'name'])
		.limit(5)
		.then((results) => {
			console.log('Results');
			console.log(results);
		});
	res.send(result);
});

module.exports = router;
