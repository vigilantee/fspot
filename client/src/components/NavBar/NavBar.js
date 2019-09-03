import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import LoginButton from "../LoginButton/LoginButton";

const NavBar = (props) => (
  <div style={{ backgroundColor: "black", color: "white", width: "100%", position: "fixed", top: 0, left: 0, zIndex: 70, height: 70, padding: 5 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" , marginRight : "4%"}}>
      <img src={require('../../assets/fspot-logo.png')} style={{ height: 70, paddingRight: 10, marginLeft: "4%" }} onClick={()=>props.history.push('/')}/>
      <LoginButton/>
      {props.cart == false ||
        <CartIcon
          cartNavigate={() => props.history.push('cart')}
        />}
    </div>
  </div>
)

export default NavBar;
