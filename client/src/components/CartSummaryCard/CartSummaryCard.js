import React from "react";

import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';
import ItemIncrementor from '../ItemIncrementor/ItemIncrementor';
import { FaTrash } from 'react-icons/fa';

const CartSummaryCard = data => {
    const { cartItem, quantity, count, plus, minus, addToCart } = data;
    const mark = cartItem.type == "veg" ? veg : nonveg;
    const netPrice = cartItem.price * quantity;
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: 20, boxShadow: "2px 2px 2px 2px #6666", padding: "40px 0px" }}>
            <div style={{ display: "flex", alignItems: "center", fontSize: 24 }}>
                <div>
                    <img src={cartItem.image_url} style={{ width: 170, height: 150 }} />
                    <img src={mark} style={{ height: 30, width: 30 }} />
                </div>
                <b>{cartItem.name}</b>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <ItemIncrementor
                    count={count}
                    cart
                    addToCart={(data) => addToCart(data)}
                />
            <button
                style={{ background: "none", border: "none", outline: "none" }}
                onClick={() => addToCart(0)}
            >
                <FaTrash/>
            </button>
            </div>
            <div style={{ fontSize: 20 }}><b>Price/Plate:{cartItem.price}</b></div>
            <div style={{ fontSize: 20 }}><b>Sub Total: {netPrice}</b></div>
        </div>
    );
};

export default CartSummaryCard;
