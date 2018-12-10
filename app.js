const express = require("express");
const path = require("path");
// const favicon = require('serve-favicon');
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
require("./db");

const index = require("./routes/index");

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

require("./passportAuth");

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, DELETE, POST, GET,");
  next();
});

app.use("/api", index);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "/public", "index.html")));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // res the error
  res.status(err.status || 500);
  res.json({
    error: { status: err.status || 500, message: err.message }
  });
});

module.exports = app;
