import React from 'react';
import { connect } from 'react-redux';
import { LogoutAction } from '../../actions';


// import { GoogleLogin } from 'react-google-login';
// import { signInSuccess } from '../../actions';
// import ProfileButton from "../ProfileButton/ProfileButton"

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.LogoutDispatch=()=>{
        console.log('this is logout clicked',this.props);
        this.props.LogoutAction();
    }  
}

  

  render() {
    console.log("Login button is having props.....", this.props);
      return (
        <button 
        onClick={this.LogoutDispatch}>
            Logout
        </button>
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
    LogoutAction: LogoutAction

};
export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
// export default LogoutButton;

