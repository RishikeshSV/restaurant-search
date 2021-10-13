require("dotenv").config();

const express = require("express");
const connectDB = require("./connection");
const Restaurant = require("./model/model");

const app = express();

const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const restaurants = await Restaurant.find().sort({ name: "asc" });
  res.render("home", { restaurants: restaurants });
});

app.get("/:name", async (req, res) => {
  if (req.body.search_term) {
    const term = req.body.search_term.toLowerCase();
    console.log(term);
    Restaurant.find({ name: term })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Restaurant not found" + term });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving restaurant " + term });
      });
  } else {
    Restaurant.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occurred while retriving information",
        });
      });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
