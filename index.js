const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

/*
heroku login
heroku create
git remote add heroku https://...
git push heroku master
*/
