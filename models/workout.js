var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
    exercises: [
        {
          type: {
              type: String,
              required: true
          },
          name: {
              type: String,
              trim: true,
          },       
          duration: Number,
          weight: Number,
          reps: Number,
          sets: Number,
        }
      ]
});


var Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;

