const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js");



router.post("/create", async(req, res) => {
    try {
        const task = await Task.create({...req.body, completed: false });
        res.status(201).send({ message: "Task successfully created", task });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a task" });
    }
});



router.get("/", async(req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        console.error(error);
    }
});



router.get("/id/:_id", async(req, res) => {
    try {
        const task = await Task.findById(req.params._id);
        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was a problem with the task with _id number: " +
                req.params._id,
        });
    }
}, )



router.put("/markAsCompleted/:_id", async(req, res) => {
        try {
            const task = await Task.findByIdAndUpdate(
                req.params._id, {
                    completed: true,
                }, { new: true }
            );
            res.send({ message: "Task successfully updated", task });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "There was a problem trying to update the task with _id: " +
                    req.params._id,
            });
        }
    }),



    router.put("/id/:_id", async(req, res) => {
        try {
            const task = await Task.findByIdAndUpdate(req.params._id, req.body, { new: true })
            res.send({ message: "task successfully updated", task });
        } catch (error) {
            console.error(error);
        }
    }),



    router.delete("/id/:_id", async(req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params._id);
            res.send({ message: "task deleted", task });
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .send({ message: "There was a problem trying to delete a task" });
        }
    })
module.exports = router;