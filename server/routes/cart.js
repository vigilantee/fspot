const express = require('express');
const db = require('../db/index.js');
const router = express.Router();
var emaildata = "manish";

router.post('/addToCart', (req, res, next) => {
    try {
        const data = req.body;
        const { productId, quantity, userId } = data;
        // Extract product details
        const q1 = `SELECT price, discount from product where id=${productId}`;
        db.executeQuery(q1, results => {
            const data = results[0];
            // Got the price and discount
            const { price, discount } = data;

            // calculate discount and total
            const totalDiscount = discount * quantity;
            const subtotal = price * quantity;
            const total = subtotal - totalDiscount;


            // Extract blade id detail if it exists
            const q2 = `SELECT id from cart_detail where userId=${userId} and productId=${productId}`;
            db.executeQuery(q2, results2 => {
                const data2 = results2[0];
                const alreadyExist = Boolean(data2);
                if (alreadyExist) {
                    const { id } = data2;
                    let q3 = '';
                    if (quantity) {
                        // if quantity is not zero update row
                        q3 = `UPDATE cart_detail set quantity=${quantity}, subtotal=${subtotal}, discount=${totalDiscount}, total=${total} where id=${id}`;
                    }
                    else {
                        //if quantity is zero
                        q3 = `DELETE from cart_detail where id=${id}`;
                    }
                    db.executeQuery(q3, result => res.json({ result }));
                }
                else {
                    // make row
                    let q3 = `INSERT into cart_detail(userId, productId, price, quantity, subtotal, discount, total) values( ${userId}, ${productId}, ${price}, ${quantity}, ${subtotal}, ${totalDiscount}, ${total})`;
                    db.executeQuery(q3, result => res.json({ result }));
                    return res;
                }
                // return res.json(Boolean(data2));
            });
        });

    } catch (e) {
        console.log('Error logged....', e);
        res.sendStatus(500);
    }
});


module.exports = router;
