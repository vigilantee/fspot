import React from "react";

import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';
import ItemIncrementor from '../ItemIncrementor/ItemIncrementor';


const CartSummaryCard = data => {
    const { cartItem, quantity, count, plus,minus,addToCart } = data;
    const mark = cartItem.type == "veg" ? veg : nonveg;
    const netPrice = cartItem.price * quantity;
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1, height: 224, marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <img src={cartItem.image_url} style={{ width: 170, height: 150 }} />
                    <img src={mark} style={{ height: 30, width: 30 }} />
                </div>
                {cartItem.name}
            </div>
            <div>
                <ItemIncrementor
                    count={count}
                    plus={plus}
                    minus={minus}
                    cart
                    addToCart={(data) => addToCart(data)}
                />
            </div>
            <div>Price/Plate:{cartItem.price}</div>
            <div>Sub Total: {netPrice}</div>
        </div>
    );
};

export default CartSummaryCard;
