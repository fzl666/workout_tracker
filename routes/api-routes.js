const router = require("express").Router();
const workout = require("../models/workout.js");


router.post("/api/workouts", ({ body }, res) => {
  workout.create({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  workout.insertMany(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  workout.aggregate([{$addFields:{ totalDuration: { $sum:"$exercises.duration" }}}])
    .sort({ date: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.get("/api/workouts/", (req, res) => {
  workout.aggregate([{$addFields:{ totalDuration: { $sum:"$exercises.duration" }}}])
      .sort({ date: -1 })
      .then(dbworkout => {
        console.log(dbworkout)
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  
module.exports = router;
