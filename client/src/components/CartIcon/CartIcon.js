import React from "react";
import { connect } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = props => (
    <button style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", background: "none", border: "none", outline: "none", color: "white" }}
        onClick={() => props.cartNavigate()}>
        {
            props.cartCount != 0 &&
            <div style={{ display: "flex", backgroundColor: 'black', borderRadius: 13, width: 25, height: 25, zIndex: 2, marginRight: -12, marginBottom: -10, justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: 'white' }}>{props.cartCount}</div>
            </div>
        }
        <FaShoppingCart size={30} />
    </button>
)

function mapStateToProps(state) {
    return {
        cartCount: state.menu.cartCount,
    }
}

export default connect(mapStateToProps, null)(CartIcon);
