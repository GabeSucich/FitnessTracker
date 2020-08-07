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
}

})

WorkoutSchema.methods.setTotalDuration = function(){
    this.TotalDuration = this.exercises.reduce(function(acc, curr) {
        acc += curr.duration
    }, 0)

    return this.TotalDuration
}

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout