const express=require('express');
const db=require('../db/index.js');
const router=express.Router();

router.post('/order',(req,res,next)=>{
    try{
        const data = req.body;
        if(!data.user_id||!data.total) throw "User ID or Total is not defined";
        db.executeQuery(`insert into orders(userId,total,totalDiscount,cgst,sgst)values(${data.userId},${data.total},${data.totalDiscount?data.totalDiscount:0},${data.cgst?data.cgst:0},${data.sgst?data.sgst:0})`,results=>res.json({response:"Order successfully placed",order_id:results.insertId}));
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
