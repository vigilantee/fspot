import React from "react";
import { connect } from 'react-redux';

import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';
// import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { getMenu, incrementQuantity, decrementQuantity, updateItem, addToCart } from '../../actions';
import ItemIncrementor from '../ItemIncrementor/ItemIncrementor';


const CartSummaryCard = data => {
    const { cartItem, quantity, count, plus,minus } = data;
    const mark = cartItem.type == "veg" ? veg : nonveg;
    const netPrice = cartItem.price * quantity;
    const i = 0;
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: 20,boxShadow:"2px 2px 2px 2px #6666",padding:"40px 0px"}}>
            <div style={{ display: "flex", alignItems: "center",fontSize:24 }}>
                <div>
                    <img src={cartItem.image_url} style={{ width: 170, height: 150 }} />
                    <img src={mark} style={{ height: 30, width: 30 }} />
                </div>
                <b>{cartItem.name}</b>
            </div>
            <div>
                <ItemIncrementor
                    count={count}
                    plus={plus}
                    minus={minus}
                    updateInputValue={false}
                />
            </div>
            <div style={{fontSize:20}}><b>Price/Plate:{cartItem.price}</b></div>
            <div style={{fontSize:20}}><b>Sub Total: {netPrice}</b></div>
        </div>
    );
};

const mapDispatchToProps = {
    getMenu: getMenu,
    incrementQuantity: incrementQuantity,
    decrementQuantity: decrementQuantity,
    updateItem: updateItem,
    addToCart: addToCart
};

function mapStateToProps(state) {
    return {
        menu: state.menu,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummaryCard);
