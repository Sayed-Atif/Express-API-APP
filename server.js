/*SBA 318: Express Server App*/
const express = require('express');  
const taskRouters = require('./routes/taskRoutes'); 
const app = express(); 
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const tasks = require('./models/data.js');
const mongoose = require('mongoose');


app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/fruits', require('./routes/fruitRoutes'));
app.use('/api/vegitables', require('./routes/vegiRoutes'));


const mytile = "Express Server App";
app.get('/Home', (req, res) => { // get route for Home Page using template engine  
    res.render('index.ejs', {tile: mytile});
});

app.set('views', 'views');  
app.set('view engine', 'ejs');  
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public')); 
app.use('/', taskRouters); 



// error handling middleware:
app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message;
    const data = err.data;
    res.status(status).json({
        message: message,
        data: data
    })
})




app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
});