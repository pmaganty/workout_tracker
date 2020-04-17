const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workoutModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/api/workouts/range", function (req, res) {
    console.log("INSIDE /api/workouts/range ROUTE");
    Workout.find({})
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/workouts", function (req, res) {
  console.log("INSIDE GET /api/workouts ROUTE");

  /*Workout.findOne({}, {}, { sort: { 'created_at' : 1 } }, function(err, post) {
    console.log( post );
    res.json(post);
  });*/

  Workout.find({})
  .then(response => {
    console.log(response);
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  });
});

app.post("/api/workouts", function (req, res) {
    console.log("INSIDE POST /api/workouts ROUTE");
    Workout.create(req.body, function (err, response) {
        if (err) return handleError(err);
        res.json(response);
      });
});

app.put("/api/workouts/:id", function (req, res) {
    console.log("INSIDE /api/workouts/:id ROUTE");
    console.log(req.body);
    let newExercise = [req.body];

    Workout.create({ exercises: newExercise })
    .then(response => {
      console.log(response);
    })
    .catch(({message}) => {
      console.log(message);
    });

});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});