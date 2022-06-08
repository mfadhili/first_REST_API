//have installed express, nodemon for const monitoring and updatting, 
import express, { application } from "express"; 
 // previous method const express = require('express) with type = module in package
 import bodyParser from "body-parser";
 // allows to take in post request bodies
 import usersRoutes from "./routes/users.js"; // importing with our decsriptive name followed with file with extension


//initialise application 
const app = express(); // as a function app
const PORT = 5001; 

//initialise bodyparse middleware
app.use(bodyParser.json()); // call as a function

app.use('/users',usersRoutes); // once use goes to /users the usersRoutes file is used

//creating first server route to home page '/'  and accepts two par req and res
app.get('/',(req,res) => {
    //console.log("[TEST]!"); // response fro the get/visit
    res.send('Hello from homepage');
})

// GET to find all users /users


// POST to create users /users
// GET find users details /users/:id
// DELETE delete users /users/:id
//PATCH updates a user /users/:id
 

//make app listen to incoming requests with a call back function once it gets a request
app.listen(PORT, ()=> {
    console.log(`Server Running on port : http://localhost:${PORT}`);//using back tick qoutes ` not '

})


