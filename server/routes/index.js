const express = require('express');
const db = require('../db/index.js');
const router = express.Router();

router.post('/order', (req, res, next) => {
    try {
        const data = req.body;
        if (!data.user_id || !data.total) throw "User ID or Total is not defined";
        db.executeQuery(`insert into orders(userId,total,totalDiscount,cgst,sgst)values(${data.userId},${data.total},${data.totalDiscount ? data.totalDiscount : 0},${data.cgst ? data.cgst : 0},${data.sgst ? data.sgst : 0})`, results => res.json({ response: "Order successfully placed", order_id: results.insertId }));
    } catch (e) {
        console.log('Error logged....', e);
        res.sendStatus(500);
    }
});

router.get('/menu', (req, res, next) => {
    try {
        let filters = '1 ';
        if (req.query.veg)
            filters += 'and type = "veg" ';
        else if (req.query.nonveg)
            filters += 'and type = "non-veg" ';
        db.executeQuery(`select * from product where ${filters}`, results => res.json(results));
    } catch (e) {
        console.log('Error logged....', e);
        res.sendStatus(500);
    }
});

router.post('/addtocart', (req, res, next) => {
    try {
        let items = req.body.items;
        let user_id = req.body.userid;
        if (req.query.veg)
            filters += 'and type = "veg" ';
        else if (req.query.nonveg)
            filters += 'and type = "non-veg" ';
        db.executeQuery(`select * from product where ${filters}`, results => res.json(results));
    } catch (e) {
        console.log('Error logged....', e);
        res.sendStatus(500);
    }
});

router.get('/cocodevs', (req, res, next) => {
    try {
        db.executeQuery(`select * from cocodevs order by id desc`, results => res.json(results));
    } catch (e) {
        console.log('Error logged......', e);
        res.sendStatus(500);
    }
});

router.post('/cocodevs/post', (req, res, next) => {
    try {
        const data = req.body;
        const url = data.url;
        const name = data.name;
        const title = data.title;
        const description = data.description;
        db.executeQuery(`INSERT INTO cocodevs (url, name,title,description) VALUES ("${url}","${name}","${title}","${description}")`, results => res.json(results));

    } catch (e) {
        console.log('Error logged......', e);
        res.sendStatus(500);
    }
})

router.post('/test/branch', (req, res, next) => {
    try {
        const data = req.body;
        const branch = data.branch;
        const execSync = require('child_process').execSync;
        const command = (branch = `master`) => {
            try {
                execSync('ls', { encoding: 'utf-8' });
                const simpleGit = require('simple-git')('./');
                simpleGit.fetch(branch, () => {
                    simpleGit.checkout(branch, () => {
                        // TODO Command to run pm2
                        // execSync('npm start', { encoding: 'utf-8' });
                        res.json({ "success": true, "message": "The branch changed successfully" });
                        res.sendStatus(200);
                    })
                })
                return true;
            } catch (e) {
                // Todo Remove Files To Write in case of failure
                console.log("Failed To change Retry... ", e);
                res.json({ "error": true, "message": "The branch couldn't be changed" });
                res.sendStatus(500);
                return false;
            }
        }
        command(branch);
    } catch (e) {
        console.log('Error logged......', e);
        res.sendStatus(500);
    }
})

module.exports = router;
