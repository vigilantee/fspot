import React from "react";
import CartIcon from "../CartIcon/CartIcon";

const NavBar = (props) => (
  <div style={{ backgroundColor: "#CB202D", color: "white", width: "100%", position: "fixed", top: 0, left: 0, zIndex: 70, height: 70, padding: 5 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: 270, marginRight: 270, paddingLeft: 20, paddingRight: 20, height: "100%" }}>
      <img src={require('../../assets/logo.png')} style={{ height: 70 }} />
      {props.cart == false ||
        <CartIcon
          cartNavigate={() => props.history.push('cart')}
        />}
    </div>
  </div>
)

export default NavBar;
