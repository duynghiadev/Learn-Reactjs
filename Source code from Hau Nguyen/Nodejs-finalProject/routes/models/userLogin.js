const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
var { isEmail } = require('validator');
// Define schema with supported data type
const UserLoginSchema = new Schema({
	email: {
		type: String,
		required: [true, 'Please enter your email !'],
		unique: true,
		lowercase: true,
		validate: [isEmail, 'Please enter a valid email !'],
	},
	password: {
		type: String,
		required: [true, 'Please enter a password'],
		minlength: [8, 'Min password length is 8 characters'],
	},
});

UserLoginSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next;
});

// static method to login user

UserLoginSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });

	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			return user;
		}
		throw Error('Incorrect password !');
	}
	throw Error('Incorrect email !');
};

const UserLogin = mongoose.model('UserLogin', UserLoginSchema);

module.exports = UserLogin;
