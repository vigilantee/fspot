import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';
import AddToCartButton from '../AddToCartButton/AddToCartButton';


const FoodCard = data => {
    const { cartItem, quantity } = data;
    const mark = cartItem.type == "veg" ? veg : nonveg;
    const netPrice = cartItem.price*quantity;
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1,height:224, marginBottom:20}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <img src={cartItem.image_url} style={{ width: 170, height: 150 }} />
                    <img src={mark} style={{ height: 30, width: 30 }} />
                </div>
                {cartItem.name}
            </div>
            <div>Qty:{quantity}</div>
            <div>Price/Plate:{cartItem.price}</div>
            <div>Price: {netPrice}</div>
        </div>
    );
};

export default FoodCard;
