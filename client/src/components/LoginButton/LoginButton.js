import React from 'react';
import { connect } from 'react-redux';

import { GoogleLogin } from 'react-google-login';
import { signInSuccess } from '../../actions';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.responseGoogle = (response) => {
      console.log("Google Response is....", response);
      this.props.signInSuccess(response);
    }
    this.failedSignin = (error) => {
      console.log("Error occured is......", error);
    }
  }

  render() {
    return (<GoogleLogin
      clientId="241827298425-5gc7bo15mt1vjhqrbi49l9svn9g4lkpk.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={this.responseGoogle}
      onFailure={this.failedSignin}
      cookiePolicy={'single_host_origin'}
    />);
  }
}

const mapDispatchToProps = {
  signInSuccess: signInSuccess
};
export default connect(null, mapDispatchToProps)(LoginButton);

