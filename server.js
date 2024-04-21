const express = require('express');  //1
const taskRouters = require('./routes/taskRoutes'); // 9
const app = express();  // 2
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const tasks = require('./models/data.js');
// const taskRoutes = require('./routes/taskRoutes');  // 9
// const bodyParser = require('body-parser');


// app.use(bodyParser.json({ extended: true }));
app.use('/api/tasks', require('./routes/taskRoutes'));
// app.use('/api/tasks', taskRoutes);


 

// view engine config for ejs template engine:
app.set('views', 'views');  // 3
app.set('view engine', 'ejs');  // 4
app.use(express.json()); // 5
app.use(express.urlencoded({ extended: true })); // 6
app.use(express.static('public')); // 7
app.use('/', taskRouters); // 8



// app.use((req, res, next) => {  // another middleware way for using in our routes file for logging requests
// to help us keep track of requests during testing!
//     const time = new Date();
//     console.log(`${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
//     if (Object.keys(req.body).length > 0) {
//       console.log("Containing the data:");
//       console.log(`${JSON.stringify(req.body)}`);
//     }
//     next();
// })




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