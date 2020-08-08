const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({

exercises: {
    type: Array,
    default : []
},

day: {
    type: Number,
    default: Date.now
},

totalDuration:  {
    type: Number,
    default: 0
}

})

WorkoutSchema.methods.setTotalDuration = function(){

    console.log("Runnin set duration")
    for (const exercise of this.exercises) {
        console.log(exercise)
        this.totalDuration += exercise.duration
    }
    console.log("made it this far")
    console.log(this.totalDuration)
    return this.totalDuration

}

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout