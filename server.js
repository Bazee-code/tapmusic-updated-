// we are going to use nodejs to create an express server for our app

const express = require('express');
const http = require('http');

// create express app
const app = express();
// bind express app to http 
const server = http.createServer(app);

// create an express middleware that will give us access to our webpage
app.use(express.static('./client'));

// bind app to port
server.listen(3000,()=>{
	console.log("Successfully connected to port 3000!");
});