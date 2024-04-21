const express = require('express'); // 1
const router = express.Router();  // 2
const { tasks } = require('../models/data');
// const { render } = require('ejs');

const mytile = "Express Server App";
router.get('/profile', (req, res) => { // get route for index page using ejs template engine  //3
    res.render('index.ejs', {tile: mytile});
});




router.get('/', (req, res) => { 
    // get route to get all tasks
    res.status(200).json(tasks);
})


router.get('/:id', (req, res) => {  // get route for individual tasks
    res.status(200).json(tasks[req.params.id]);  
}); 


router.post('/', (req, res) => {  // post route for tasks
    res.status(200).json(tasks);
}); 


router.put('/:id', (req, res) => {  // put route for tasks
    res.status(200).json(tasks[req.params.id]);
});


router.delete('/:id', (req, res) => {  // delete route for tasks
    res.status(200).json(tasks[req.params.id]);
});


router.patch('/:id', (req, res) => {  // patch route for tasks
    res.status(200).json(tasks[req.params.id]);
});








module.exports = router;  // 4