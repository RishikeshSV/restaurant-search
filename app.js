require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./connection");
const Restaurant = require("./model/model");

const app = express();

const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

// HOME

app.get("/", async (req, res) => {
  await Restaurant.find()
    .then((data) => {
      res.render("home", { restaurants: data });
    })
    .catch((data) => {
      res.send({ message: "Error retriving information" });
    });
});

// SEARCHING

app.post("/", async (req, res) => {
  if (req.body.search_term) {
    const term = req.body.search_term.toLowerCase();
    let regex = new RegExp(term);
    await Restaurant.find({
      $or: [{ name: regex }, { location: regex }, { tags: regex }],
    })
      .then((data) => {
        res.render("home", { restaurants: data });
      })
      .catch((err) => {
        res.send({ message: "Error retrieving restaurant " + term });
      });
  } else {
    await Restaurant.find()
      .then((data) => {
        res.render("home", { restaurants: data });
      })
      .catch((data) => {
        res.send({ message: "Error retriving information" });
      });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
