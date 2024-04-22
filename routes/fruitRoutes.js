const express = require('express'); 
const router = express.Router();  
const {fruits} = require('../models/data');


router.get('/', (req, res) => {  // get route to get all fruits
    res.status(200).json(fruits);
})

router.get('/:id', async(req, res) => {   // get route to get individual fruit
    try {
        const fruit = await fruits[req.params.id];
        res.status(200).json(fruit);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', (req, res) => {  // post route to add new fruits
    try {
        fruits.push(req.body);
        res.status(200).json(fruits);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async(req, res) => { // put route to update fruits
    try {
        const fruit = await fruits[req.params.id];
        fruit.reminder = !fruit.reminder;
        res.status(200).json(fruit);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async(req, res) => {  // delete route to delete fruits
    try {
        const fruit = await fruits[req.params.id];
        fruit.reminder = !fruit.reminder;
        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;

