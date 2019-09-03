// import express from 'express'
const express = require('express');
const api_v1_router=require('./routes');
const user_api=require('./routes/user');
const cart_api=require('./routes/cart');
const app=express();

const APP_PORT = 4000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.json());
app.use('/v1/user',user_api);
app.use('/v1/cart',cart_api);
app.use('/v1',api_v1_router);
app.listen(APP_PORT,()=>{
    console.log('server is running on port 4000');
});