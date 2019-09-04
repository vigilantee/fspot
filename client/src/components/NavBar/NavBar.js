import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import LoginButton from "../LoginButton/LoginButton";
import { connect } from 'react-redux';
import LogoutButton from '../Logout/Logout'


class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  
  renderLogin(){
    if(this.props.email){
      console.log("vaada......");
    return <div><LoginButton/><LogoutButton /></div>
          }
          else{
           return <LoginButton />
          }
  }

  render(){
  {console.log('the value of email is coming in bruh',this.props.email)}
  return(
  <div style={{ backgroundColor: "#CB202D", color: "white", width: "100%", position: "fixed", top: 0, left: 0, zIndex: 70, height: 70, padding: 5 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: 270, marginRight: 270, paddingLeft: 20, paddingRight: 20, height: "100%" }}>
      <img src={require('../../assets/logo.png')} style={{ height: 70 }} onClick={()=>this.props.history.push('/')}/>
      
  {/* {<LoginButton/>
  this.props.cart == false ||
    <CartIcon
      cartNavigate={() => this.props.history.push('cart')}
    />
      } */}
      {this.renderLogin()}
      { this.props.cart == false || <CartIcon cartNavigate={() => this.props.history.push('cart')}/>}
    </div>
  </div>
    );


  }
}


function mapStateToProps(state) {
  return {
    email: state.menu.email,
    profilePic: state.menu.profilePic,
    name: state.menu.name
  }
}

const mapDispatchToProps = {
  // signInSuccess: signInSuccess
  null:null
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
