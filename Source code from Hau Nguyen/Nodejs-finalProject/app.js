var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var apiRouter = require("./routes/api/productApi");
const {
  requireAuth,
  checkCurrentUser,
} = require("./routes/auth/authMiddleware");
const debug = require("debug")("app");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
var app = express();

const { MONGO_URL } = process.env;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// cors setup

var whitelist = [
  "http://localhost:8081",
  "http://localhost:3001",
  "http://longvpv.info",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
//

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(upload.single("avatar"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "public-images")));

app.use(cors());
app.use("*", checkCurrentUser);
// app.use("/", indexRouter);
// app.use('/admin', requireAuth, adminRouter);
// app.use("/admin", adminRouter);
// app.use("/users", usersRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const initDB = () => {
  return mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connect success");
    })
    .catch((err) => {
      console.log("Database connection error:" + err);
    });
};
const initDBStatus = initDB();

app.start = (PORT) => {
  return new Promise(async (resolve, reject) => {
    await initDBStatus;
    const server = app.listen(PORT, (err) => {
      if (err) {
        return reject(err);
      }
      console.log("App started and listening on port", PORT);
      resolve(server);
    });
  });
};

module.exports = app;
