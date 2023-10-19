/*
server.js 
Name: Divya Patel (301309543)
Oct 16,2023 
*/
const express = require('express');
const app = express()
const mongoose = require('mongoose');
var db = require('./config/db');
const router = require('./routes/products');

//connect to mongoDB


var message = "Welcome to the WareHouse! Prices more competitve than average retailers";

//declare routes to show on computer
app.get('/',(req,res)=> {
    res.send('Hello, welcome to Divs clothing store')
});

//app.get('/Products',(req,res)=> {
   // res.send('PRODUCTS PAGE. Take a look at our most trendy items')
//});

app.use(router);
db();

const PORT = process.env.PORT||3000;
app.listen(PORT,()=> {
    console.log('NODE API APP IS RUNNING ON PORT 3000');
});

db();
