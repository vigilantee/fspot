const express=require('express');
const db=require('../db/index.js');
const router=express.Router();

router.get('/:uid',(req,res,next)=>{
    try{

        db.executeQuery(`select id, username, profilePic from user where id=${req.params.uid}`, results=>res.json(results[0]));
    }catch(e){
        console.log('Error logged....',e);
        res.sendStatus(500);
    }
});

router.post('/addNew',(req,res,next)=>{
    try{
        const data = req.body;
        const username=data.username;
        const email=data.email;
        const name=data.name;
        const surname=data.surname;
        const firstName=data.firstName;
        const googleId=data.googleId;
        const profilePic=data.profilePic;
        if(!data||!username||!email||!name||!surname||!firstName||!googleId||!profilePic)
        {
            res.status(422);
            res.json({response:"Missing Parameters.\n1.username\n2.email\n3.name\n4.surname\n5.firstName\n6.googleId\n7.profilePic"});
            return res;
        }



        const defaultPassword="root";
        const values = `("${username}","${email}","${defaultPassword}","${name}","${surname}","${firstName}","${googleId}","${profilePic}")`;
        const query=`INSERT INTO user (username, email, password, name, surname, firstName, googleId, profilePic) VALUES ${values}`;
        // res.json(query);
        db.executeQuery(query, results=>res.json(results));
    }catch(e){
        console.log('Error logged....',e);
        res.sendStatus(500);
    }
});

router.post('/update',(req,res,next)=>{
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
