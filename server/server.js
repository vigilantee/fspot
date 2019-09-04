// import express from 'express'
const express = require('express');
const api_v1_router=require('./routes');
const user_api=require('./routes/user');
const app=express();
var cors = require('cors')

const APP_PORT = 4000;
app.use(cors());
app.use(express.json());
app.use('/v1/user',user_api);
app.use('/v1',api_v1_router);
app.listen(APP_PORT,()=>{
    console.log('server is running on port 4000');
});