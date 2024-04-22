 const tasks = [    // array of objects for tasks
     {
         id: 1,
         text: 'Doctor Appointment',
         day: 'Feb 5th at 2:30pm',
         reminder: true
     },
     {
         id: 2,
         text: 'Meeting at School',
         day: 'Feb 6th at 1:30pm',
         reminder: true
     },
     {
         id: 3,
         text: 'Food Shopping',
         day: 'Feb 5th at 2:30pm',
         reminder: false
     },
     {
         id: 4,
         text: 'Grocery Shopping',
         day: 'Feb 5th at 2:30pm',
         reminder: true
     }
 ]



 const fruits = [      // array of objects for fruits 
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    },
    {
        name:'orange',
        color: 'orange',
        readyToEat: false
    }
];



const vegitables = [   // array of objects for vegitables
    {
        name:'carrot',
        color: 'orange',
        readyToEat: true
    },
    {
        name:'broccoli',
        color: 'green',
        readyToEat: false
    },
    {
        name:'celery',
        color: 'purple',
        readyToEat: true
    },
    {
        name:'peas',
        color: 'green',
        readyToEat: false
    }
]





module.exports = { tasks, fruits, vegitables };

