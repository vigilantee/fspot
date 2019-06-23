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
                    updateInputValue={false}
                />
            </div>
            <div>Price/Plate:{cartItem.price}</div>
            <div>Sub Total: {netPrice}</div>
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
