const Workout = require("./Workout.js")
const Mongoose  = require("mongoose")


module.exports = function (app) {

    app.get("/api/workouts", async (req, res) => {
        var workouts = await Workout.find()
        for (const workout of workouts) {
            await workout.setTotalDuration()
        }
        res.json(workouts)

    })

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body).then(data => {
            res.json(data)
        })
    })

    app.put("/api/workouts/:id", async (req, res) => {
        var workoutId = req.params.id
        Workout.findOneAndUpdate({ _id: Mongoose.Types.ObjectId(workoutId) }, {
            $push: {
                exercises: req.body
            }
        }).then(data => {
            res.json(data)
        })
        
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find().then(data => {
            var range = findRange(data)
            res.json(range)
        })        
    })

    function findRange(workouts) {
        workoutRange = []
        for (i=workouts.length - 1; i>=0; i--) {
            workoutRange.unshift(workouts[i])
            if (new Date(workouts[i].day).getDay() === 0) {
                break
            }
        }
        return workoutRange
    }
}