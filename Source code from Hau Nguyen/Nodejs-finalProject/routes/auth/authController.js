const jwt = require('jsonwebtoken');

const maxAge = 30 * 24 * 60 * 60;
const createToken = (id) => {
	return jwt.sign({ id }, 'long secret', {
		expiresIn: maxAge,
	});
};

const token = createToken('somethingcoolwithyou2099loveyou3000');
console.log('Token', token);
const decodeToken = (token) => {
	return jwt.verify(token, 'long secret');
};
setTimeout(() => {
	const decodeTokenData = decodeToken(token);
	console.log('Decode Token:', decodeTokenData);
}, 5000);

app.get('/set-cookies', (req, res) => {
	res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
	res.send('you got the cookies');
});

app.get('/read-cookies', (req, res) => {
	const cookies = req.cookies;
	console.log(cookies);

	res.json(cookies);
});
