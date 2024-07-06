const express = require('express')
const app = express();
const db =require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Welcome to our Hotel')  
})


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(PORT, ()=>{
  console.log('listening to port 3000');
})


// app.get('/chicken', function(req, res) {
//     res.send('Yes i would definitely serve chicken')
// })
// app.listen(3000)


// console.log('server file is running');

// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }


// var add = (a,b) => {return a+b};

// var result = add(2,8);
// console.log(result);