const express=require('express');
const url=require('url');
const db=require('../db/index.js');
const router=express.Router();

router.get('/user_info',(req,res,next)=>{
    try{
        db.executeQuery('select id, username, profile_pic from user', results=>res.json(results));
    }catch(e){
        console.log('Error logged....',e);
        res.sendStatus(500);
    }
});

router.post('/order',(req,res,next)=>{
    try{
        const data = req.body;
        if(!data.user_id||!data.total) throw "User ID or Total is not defined";
        db.executeQuery(`insert into orders(user_id,total,total_discount,cgst,sgst)values(${data.user_id},${data.total},${data.total_discount?data.total_discount:0},${data.cgst?data.cgst:0},${data.sgst?data.sgst:0})`,results=>res.json({response:"Order successfully placed",order_id:results.insertId}));
    }catch(e){
        console.log('Error logged....',e);
        res.sendStatus(500);
    }
});

router.get('/user_info/:uid',(req,res,next)=>{
    try{

        db.executeQuery(`select id, username, profile_pic from user where id=${req.params.uid}`, results=>res.json(results[0]));
    }catch(e){
        console.log('Error logged....',e);
        res.sendStatus(500);
    }
});

router.get('/menu',(req,res,next)=>{
    try{
        let filters = '1 ';
        if(req.query.veg)
            filters += 'and type = "veg" ';
        else if(req.query.nonveg)
            filters += 'and type = "non-veg" ';
        db.executeQuery(`select * from product where ${filters}`, results=>res.json(results));
    }catch(e){
        console.log('Error logged....',e);
        res.sendStatus(500);
    }
});

router.post('/addtocart',(req,res,next)=>{
    try{
        let items = req.body.items;
        let user_id = req.body.userid;
        if(req.query.veg)
            filters += 'and type = "veg" ';
        else if(req.query.nonveg)
            filters += 'and type = "non-veg" ';
        db.executeQuery(`select * from product where ${filters}`, results=>res.json(results));
    }catch(e){
        console.log('Error logged....',e);
        res.sendStatus(500);
    }
});

module.exports=router;
