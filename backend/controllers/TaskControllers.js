const TaskModel = require("../models/TaskModel")

module.exports.getTasks = async (req, res) => {
    const task = await TaskModel.find()
    res.send(tasks)
// res.send("Hello from getTasks!")
}

module.exports.saveTask = (req, res) => {

    const {task} = req.body

    TaskModel.create({task})
    .then((data) => {
        console.log("Saved successfully.")
        res.status(201).send(data)
    }).catch((error) => {
        console.log(error)
        res.send({error: error, msg: "Something went wrong!!!"})
    })

}

module.exports.updateTask = (req, res) => {
    const {id} = req.params
    const {task} = req.body

    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => {
        res.send("Updated successfully.")
    })
    .catch((error) => {
        console.log(error)
        res.send({error: error, msg: "Something went wrong!!!"})
    })

}

module.exports.deleteTask = (req, res) => {
    const {id} = req.params

    TaskModel.findByIdAndDelete(id)
    .then(() => {
        res.send("Task DELETED successfully.")
    })
    .catch((error) => {
        console.log(error)
        res.send({error: error, msg: "Something went wrong!!!"})
    })

}