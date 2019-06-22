import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';
import AddToCartButton from '../AddToCartButton/AddToCartButton';


const FoodCard = data => {
  const { props, count, plus, minus, updateInputValue, addToCart } = data;
  const image = props.type == "veg" ? veg : nonveg;
  const cardBgColor = props.type == "veg" ? "#008200" : "#BF3304";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        margin: 20,
        maxWidth: 400,
        height:430,
        borderRadius: 5,
        backgroundColor: "powderblue",
        border: `5px solid ${cardBgColor}`
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div>
          <img src={props.image_url} style={{ height: 300, width: 400 }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontFamily: "georgia",
                fontSize: 16
              }}
            >
              <img src={image} style={{ height: 20, width: 20 }} />
              <b>{props.name}</b>
            </div>
            &#x20b9;{props.price}
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
                value={count!=0?count:1}
                onChange={evt => updateInputValue(evt.target.value)}
              />
              <button
                style={{ background: "none", border: "none", outline: "none" }}
                onClick={() => plus()}
              >
                <FiPlusCircle />
              </button>
            </div>
            <div>
              <b>{props.details}</b>
            </div>
          </div>
        </div>
        <AddToCartButton count={count} addToCart={addToCart}/>


      </div></div>
  );
};

export default FoodCard;
