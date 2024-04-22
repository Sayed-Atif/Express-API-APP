const express = require('express'); 
const router = express.Router();  
const {vegitables} = require('../models/data');

router.get('/', (req, res) => {  // get route to get all vegitables
    res.status(200).json(vegitables);
})


router.get('/:id', async(req, res) => {   // get route to get individual vegitables
    try {
        const vegitable = await vegitables[req.params.id];
        res.status(200).json(vegitable);
    }
    catch (err) {
        res.status(500).json(err);
    }
})


router.post('/', (req, res) => {  // post route to add new vegitables
    try {
        vegitables.push(req.body);
        res.status(200).json(vegitables);
    }
    catch (err) {
        res.status(500).json(err);
    }
})


router.put('/:id', async(req, res) => { // put route to update vegitables
    try {
        const vegitable = await vegitables[req.params.id];
        vegitable.readyToEat = !vegitable.readyToEat;
        res.status(200).json(vegitable);
    }
    catch (err) {
        res.status(500).json(err);
    }
})


router.delete('/:id', async(req, res) => {  // delete route to delete vegitables
    try {
        const vegitable = await vegitables[req.params.id];
        vegitable.readyToEat = !vegitable.readyToEat;
        res.status(200).json(vegitable);
    }
    catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;