const express = require('express'); // 1
const router = express.Router();  // 2
const {tasks} = require('../models/data');


router.get('/', (req, res) => {  // get route to get all tasks
    res.status(200).json(tasks);
})

 
router.get('/:id', async(req, res) => {   // get route to get individual task
    try {
        const task = await tasks[req.params.id];
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
})

 
router.post('/', async(req, res) => {   // post route to add new tasks
    try {
        const task = req.body;
        tasks.push(task);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.put('/:id', async(req, res) => { // put route to update tasks
    try {
        const task = await tasks[req.params.id];
        task.reminder = !task.reminder;
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.delete('/:id', async(req, res) => {  // delete route to delete tasks
    try {
        const task = await tasks[req.params.id];
        task.reminder = !task.reminder;
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
})







module.exports = router;  