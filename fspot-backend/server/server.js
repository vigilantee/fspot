const express=require("express");
const api_v1_router=require('./routes');
const app=express();

const APP_PORT = 4000;

app.use(express.json());
app.use('/v1',api_v1_router);
app.listen(APP_PORT,()=>{
    console.log('server is running on port 3000');
});