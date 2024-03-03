const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const ProductSchema = new Schema({
	_id: SchemaTypes.String,
	name: { type: String, required: true },
	image: String,
	thumbnail: String,
	shortDescription: String,
	salePrice: Number,
	originalPrice: SchemaTypes.Number,
	images: [SchemaTypes.String],
	thumbnails: [SchemaTypes.String],
	categoryId: {
		type: SchemaTypes.String,
		ref: 'Category',
		localField: 'categoryId',
		foreignField: '_id',
	},
});

ProductSchema.virtual('saleOff').get(function () {
	return this.originalPrice ? (this.originalPrice - this.salePrice) / this.originalPrice : 0;
});

const Product = mongoose.model('Product', ProductSchema, 'products');

module.exports = Product;
