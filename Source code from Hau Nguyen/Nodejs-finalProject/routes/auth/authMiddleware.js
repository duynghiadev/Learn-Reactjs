const jwt = require("jsonwebtoken");
const UserLogin = require("../models/userLogin");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "long secret", (err, decodeToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodeToken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

const checkCurrentUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "long secret", async (err, decodeToken) => {
      if (err) {
        console.log(err.message);
        res.set("User-Email", null);
        res.locals.user = null;
        next();
      } else {
        let user = await UserLogin.findById(decodeToken.id);
        res.set("User-Email", user._doc);
        res.locals.user = user._doc;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
module.exports = { requireAuth, checkCurrentUser };
