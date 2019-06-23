import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";


const ItemIncrementor = props => {
    const { minus, plus, count, cart, addToCart } = props;
    return cart ?
        (
            <div style={{ display: "flex" }}>
                <p>Qty</p>
                <button
                    style={{ background: "none", border: "none", outline: "none" }}
                    onClick={() => addToCart(count-1)}
                >
                    <FiMinusCircle />
                </button>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                   <b> {count} </b> 
                </div>
                <button
                    style={{ background: "none", border: "none", outline: "none" }}
                    onClick={() => addToCart(count+1)}
                >
                    <FiPlusCircle />
                </button>
            </div>
        ) :
        (
            <div style={{ display: "flex" }}>
                <p>Qty</p>
                <button
                    style={{ background: "none", border: "none", outline: "none" }}
                    onClick={() => minus()}
                >
                    <FiMinusCircle />
                </button>
                <input
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                        width: 30,
                        textAlign: "center"
                    }}
                    value={count != 0 ? count : 1}
                    onChange={evt => props.updateInputValue(evt.target.value)}
                />
                <button
                    style={{ background: "none", border: "none", outline: "none" }}
                    onClick={() => plus()}
                >
                    <FiPlusCircle />
                </button>
            </div>
        );
}

export default ItemIncrementor;
