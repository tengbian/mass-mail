const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./mondels/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

/*
heroku login
heroku create
git remote add heroku https://...
git push heroku master
*/

// https://accounts.google.com/o/oauth2/v2/auth?
// response_type = code & scope=profile % 20email & client_id=P_kgr7JhwfXKOdnNkfaCxMDi
