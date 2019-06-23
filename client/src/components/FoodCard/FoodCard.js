import React from "react";

import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import ItemIncrementor from '../ItemIncrementor/ItemIncrementor';

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
            <ItemIncrementor
            minus={minus}
            plus={plus}
            updateInputValue={updateInputValue}
            count={count}
            />
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
