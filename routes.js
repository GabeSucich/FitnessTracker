const path = require('path')
const Workout = require("./Workout.js")

module.exports = function(app) {
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/exercise.html"))
    })

    app.get("/api/workouts", (req, res) => {
        Workout.find().then(data => {
            res.json(data)
        })
    })

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body).then(data => {
            res.end()
        })
    })

    app.put("/api/workouts/:id", (req, res) => {

    })

    app.get("/api/workouts/range", (req, res) => {

    })
}